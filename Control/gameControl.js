const { response, request } = require( 'express' );
const Game = require( '../DataBase/Models/gameModel' );

//////<<<<<------------------------------------------------``


const newGame = async ( request, response = response ) =>
{

    try 
    {

        const { title } = request.body;


        let game = await Game.findOne( { title } );


        if( game )
        {
            return response.status( 400 ).json( { ok : false, msg : 'Title already exist' } );
        };


        game = new Game( request.body );


        await game.save();


        return response.status( 200 ).json( { ok : true, msg : 'Game added succefully' } );

    } 
    catch( error ) 
    {
        
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Something went wrong, please contact the administraitor' } );

    };

};


const getGames = async ( request, response = response ) =>
{

    try 
    {

        const games = await Game.find();


        if( games.length > 0 )
        {
            return response.status( 200 ).json( { ok : true, msg : 'Get games', games } );
        }
        else
        {
            return response.status( 404 ).json( { ok : false, msg : `Games don't found` } );
        };


    } 
    catch( error ) 
    {

        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Something went wrong, please contact the administraitor' } );

    };

};


const updateGame = async ( request, response = response ) =>
{

    try 
    {

        const { _id } = request.body;


        let game = await Game.findById( { _id } );


        if( !game )
        {

            return response.status( 404 ).json( { ok : false, msg : 'Game don´t found' } );
            
        };


        game = new Game( request.body );


        await Game.findByIdAndUpdate( _id, game);


        return response.status( 200 ).json( { ok : true, msg : 'Update game' } );

    } 
    catch( error ) 
    {
        
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Something went wrong, please contact the administraitor' } );

    };

};


const deleteGame = async ( request, response = response ) =>
{

    try 
    {

        const { _id } = request.body;


        let game = await Game.findByIdAndDelete( { _id } );


        if( !game )
        {
            return response.status( 404 ).json( { ok : false, msg : 'Game don´t found' } );
        };


        return response.status( 200 ).json( { ok : true, msg : 'Game deleted succefully' } );

    } 
    catch( error ) 
    {
        
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Something went wrong, please contact the administraitor' } );

    };

};


//////---------------------------------------------->>>>>

module.exports = { newGame, getGames, updateGame ,deleteGame };