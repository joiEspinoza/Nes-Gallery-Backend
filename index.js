const express = require( 'express' );
const cors = require('cors');
const { connectDB } = require('./DataBase/connectDB');
require( 'dotenv' ).config( { path : 'var.env' } );


//////<<<<<------------------------------------------------``


const app = express();


app.use( express.json() );


app.use( cors() );


connectDB();


let PORT;
!process.env.PORT ? PORT = 4030 : PORT = process.env.PORT;

let HOST = process.env.HOST || '0.0.0.0';

app.listen( PORT, HOST, () => 
{ console.log( `Server running in port ${ PORT }` ) } );


//------------------------------|| Rutas ||-------------------------------//


app.use( express.static( './public' ) )


app.use( "/api/auth", require( './Routes/authRoute' ) );


app.use( "/api/game", require( './Routes/gamesRoute' ) );


app.use( "/api/gender", require( './Routes/genderRoute' ) );