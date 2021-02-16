const { response, request } = require( 'express' );
const Gender = require( '../DataBase/Models/genderModel' );


//////<<<<<------------------------------------------------``



const createGender = async ( request, response = response ) =>
{
    try 
    {   

        let gender = await Gender.findOne( request.body );

        if( gender )
        {
            return response.status( 400 ).json( { ok : false, msg : 'Gender already exists' } )
        };

        gender = new Gender( request.body );

        await gender.save();

        return response.status( 200 ).json( { ok : true, msg : 'Gender added successfully' } );

    } 
    catch( error ) 
    {
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Something went wrong, please contact the administrator' } );
    };
};


const getGenders = async ( request, response = response ) =>
{

    try 
    {
        let genders = await Gender.find();

        genders.sort( ( a, b ) => a.descr < b.descr && -1 )

        return response.status( 200 ).json( { ok : true, msg : 'Get genders', genders } );
    } 
    catch( error ) 
    {
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Something went wrong, please contact the administrator' } );
    };

};


const deleteGender  = async ( request, response = response ) =>
{

    try 
    {
        
        const gender = await Gender.findByIdAndDelete( request.body );


        if( !gender )
        {
            return response.status( 404 ).json( { ok : false, msg : 'Gender not found' } );
        };


        return response.status( 200 ).json( { ok : true, msg : 'Gender was successfully removed' } );

        
    } 
    catch( error ) 
    {
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Something went wrong, please contact the administrator' } );
    };

};


//////---------------------------------------------->>>>>


module.exports = { createGender, getGenders, deleteGender }