const express = require( 'express' );
const cors = require('cors');
const { connectDB } = require('./DataBase/connectDB');
require( 'dotenv' ).config();


//////<<<<<------------------------------------------------``


const app = express();


app.use( express.json() );


app.use( cors() );


connectDB();


let PORT;
!process.env.PORT ? PORT = 4030 : PORT = process.env.PORT;


app.listen( PORT, () => 
{ console.log( `Server running in port ${ PORT }` ) } );


//------------------------------|| Rutas ||-------------------------------//


app.use( express.static( './public' ) )


app.use( "/api/game", require( './Routes/gamesRoute' ) );