const mongoose = require( 'mongoose' );

//////<<<<<------------------------------------------------``

const connectDB = async () =>
{

    try 
    {

        await mongoose.connect( 
            
            process.env.DB_CONNECTION,
            { 
                useNewUrlParser: true, 
                useUnifiedTopology: true,
                useCreateIndex : true
            }
            
        );

        mongoose.set( 'useFindAndModify', false );

        console.log( "DB Online" );

    } 
    catch( error ) 
    {
        console.log( error );  
        throw new Error( "Something is wrong with the database start" );
    };

};


//////---------------------------------------------->>>>>

module.exports = { connectDB };

