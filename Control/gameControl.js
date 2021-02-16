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
            return response.status( 400 ).json( { ok : false, msg : 'Title already exists' } );
        };


        game = new Game( request.body );


        await game.save();


        return response.status( 200 ).json( { ok : true, msg : 'Game added successfully' } );

    } 
    catch( error ) 
    {
        
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Something went wrong, please contact the administrator' } );

    };

};


const getGames = async ( request, response = response ) =>
{

    try 
    {

        let games = await Game.find();

        games.sort( ( a, b ) => a.title < b.title && -1 );
        
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
        return response.status( 500 ).json( { ok : false, msg : 'Something went wrong, please contact the administrator' } );

    };

};


const getGamesByGender = async ( request, response = response ) =>
{

    try 
    {
        
        const { gender } = request.body;

        let games = await Game.find();

        games = games.filter( ( game ) => game.gender === gender );

        games.sort( ( a, b ) => a.title < b.title && -1 );

        if( games.length > 0 )
        {
            return response.status( 200 ).json( { ok : true, msg : 'Get games by gender', games } );
        }
        else
        {
            return response.status( 404 ).json( { ok : false, msg : `Games don't found` } );
        };


    } 
    catch( error ) 
    {

        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Something went wrong, please contact the administrator' } );

    };

};


const getGamesByTitle = async ( request, response = response ) =>
{

    try 
    {
        
        const { search } = request.body;

        let games = await Game.find();

        games = games.filter( ( game ) => game.title.includes( search ) );

        games.sort( ( a, b ) => a.title < b.title && -1 );

        if( games.length > 0 )
        {
            return response.status( 200 ).json( { ok : true, msg : 'Get games by search', games } );
        }
        else
        {
            return response.status( 404 ).json( { ok : false, msg : `Games don't found` } );
        };


    } 
    catch( error ) 
    {

        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Something went wrong, please contact the administrator' } );

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


        return response.status( 200 ).json( { ok : true, msg : 'Game updated successfully' } );

    } 
    catch( error ) 
    {
        
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Something went wrong, please contact the administrator' } );

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


        return response.status( 200 ).json( { ok : true, msg : 'Game deleted successfully' } );

    } 
    catch( error ) 
    {
        
        console.log( error );
        return response.status( 500 ).json( { ok : false, msg : 'Something went wrong, please contact the administrator' } );

    };

};


//////---------------------------------------------->>>>>

module.exports = { newGame, getGames, getGamesByGender, getGamesByTitle, updateGame ,deleteGame };