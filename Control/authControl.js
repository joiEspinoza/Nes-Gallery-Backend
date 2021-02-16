const { response, request } = require( 'express' );
const bcryptjs = require( 'bcryptjs' );
const User = require( '../DataBase/Models/userModel' );


//////<<<<<------------------------------------------------``


const register = async ( request, response = response ) =>
{

    try 
    {
        const { email, name, password } = request.body;


        let user = await User.findOne( { email } )
        if( user )
        {
            return response.status( 400 ).json( { ok : false, msg : 'Email already exists' } ); 
        };


        user = await User.findOne( { name } )
        if( user )
        {
            return response.status( 400 ).json( { ok : false, msg : 'Name already exists' } ); 
        };


        user = new User( request.body );


        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync( password, salt );


        await user.save();


        return response.status( 200 ).json( { ok : true, msg : 'Successful user registration' } );

    } 
    catch( error ) 
    {
        
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Something went wrong, please contact the administrator' } );

    };

};


const login = async ( request, response = response ) =>
{

    try 
    {
        const { email, password } = request.body;


        let user =  await User.findOne( { email } );


        if( !user )
        {
            return response.status( 404 ).json( { ok : false, msg : 'User don´t found' } );
        };


        const validPassword = bcryptjs.compareSync( password, user.password );
        if( !validPassword )
        {
            return response.status( 400 ).json( { ok : false, msg : "Access denied - the password is wrong" } );
        };


        return response.status( 200 ).json( { ok : true, msg : 'Access granted', user } );

    } 
    catch( error ) 
    {
        
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Something went wrong, please contact the administrator' } );

    };

};


const updatePassword = async ( request, response = response ) =>
{

    try 
    {
        const { _id, oldPassword } = request.body;

        let { newPassword } = request.body;


        let user = await User.findById( _id );

        
        const validPassword = bcryptjs.compareSync( oldPassword, user.password );
        if( !validPassword )
        {
            return response.status( 400 ).json( { ok : false, msg : "Wrong password" } );
        };


        const salt = bcryptjs.genSaltSync();
        newPassword = bcryptjs.hashSync( newPassword, salt );


        await User.findByIdAndUpdate( _id, { password : newPassword } );

        return response.status( 200 ).json( { ok : true, msg : 'Password updated successfully' } );
    } 
    catch( error ) 
    {
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Something went wrong, please contact the administrator' } );

    };

};




//////---------------------------------------------->>>>>

module.exports = { register, login, updatePassword };