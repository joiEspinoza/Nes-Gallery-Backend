const { response, request } = require( 'express' );
const Gender = require( '../DataBase/Models/genderModel' );


//////<<<<<------------------------------------------------``



const createGender = async ( request, response = response ) =>
{
    try 
    {   
        console.log(  request.body)
        let gender = await Gender.findOne( request.body );

        if( gender )
        {
            return response.status( 400 ).json( { ok : false, msg : 'Gender already exist' } )
        };

        gender = new Gender( request.body );

        await gender.save();

        return response.status( 200 ).json( { ok : true, msg : 'Create Gender ok' } );

    } 
    catch( error ) 
    {
        return response.status( 500 ).json( { ok : false, msg : 'Please contact to the administraitor' } );
    };
};


const getGenders = async ( request, response = response ) =>
{

    try 
    {
        
        const genders = await Gender.find();

        return response.status( 200 ).json( { ok : true, msg : 'Get genders', genders } );

    } 
    catch( error ) 
    {
        return response.status( 500 ).json( { ok : false, msg : 'Please contact to the administraitor' } );
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
        return response.status( 500 ).json( { ok : false, msg : 'Please contact to the administraitor' } );
    };

};


//////---------------------------------------------->>>>>


module.exports = { createGender, getGenders, deleteGender }