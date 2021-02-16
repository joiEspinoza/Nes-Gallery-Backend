const { Router } = require( 'express' );
const router = Router();
const { check } = require( 'express-validator' );
const { ValidatorMidd } = require( '../Middleware/validadorDatos' );
const { newGame, getGames, getGamesByGender, updateGame, deleteGame, getGamesByTitle } = require( '../Control/gameControl' );


//////<<<<<------------------------------------------------``


router.post( 
    

    '/newGame', 
    [

        check( 'title', 'The title must have min 4 characters' ).isLength( { min: 4 } ),
        check( 'gender', 'Gender is required' ).notEmpty(),
        check( 'release', 'A release date is required' ).notEmpty(),
        check( 'rate', 'rate is required').notEmpty(),
        check( 'url', 'Cover is required' ).notEmpty(),
        check( 'url2', 'A screenshot is required' ).notEmpty(),
        ValidatorMidd

    ]
    ,newGame 
   
);


router.get( '/getgames', [], getGames );


router.post( '/getgamesbygender', [], getGamesByGender );


router.post( 
    
    '/getgamesbytitle', 
    [
        check( 'search', 'Search --> A title is required' ).notEmpty(),
        ValidatorMidd
    ], 
    getGamesByTitle 

);


router.put( 
    

    '/updategame', 
    [

        check( '_id', 'Id Game is required' ).notEmpty(),
        check( 'gender', 'Gender is required' ).notEmpty(),
        check( 'release', 'A release date is required' ).notEmpty(),
        check( 'rate', 'rate is required').notEmpty(),
        ValidatorMidd

    ]
    ,updateGame 
   
);


router.delete( 
    

    '/deletegame', 
    [
        check( '_id', 'Id Game is required' ).notEmpty(),
        ValidatorMidd
    ], 
    deleteGame 

);


//////---------------------------------------------->>>>>


module.exports = router;