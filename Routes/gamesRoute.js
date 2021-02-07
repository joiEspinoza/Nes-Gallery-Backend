const { Router } = require( 'express' );
const router = Router();
const { check } = require( 'express-validator' );
const { ValidatorMidd } = require( '../Middleware/validadorDatos' );
const { newGame, getGames, updateGame, deleteGame } = require( '../Control/gameControl' );


//////<<<<<------------------------------------------------``


router.post( 
    

    '/newGame', 
    [

        check( 'title', 'Title must be have min 4 characters' ).isLength( { min: 4 } ),
        check( 'gender', 'Gender is required' ).notEmpty(),
        check( 'realese', 'Gender is required' ).notEmpty(),
        check( 'price', 'Price is required' ).notEmpty(),
        check( 'stock', 'Stock is required' ).notEmpty(),
        check( 'rate', 'rate is required').notEmpty(),
        check( 'url', 'Cover is required' ).notEmpty(),
        check( 'url2', 'Screenshoot is required' ).notEmpty(),
        ValidatorMidd

    ]
    ,newGame 
   
);


router.get( '/getGames', [], getGames );


router.put( 
    

    '/updateGame', 
    [

        check( '_id', 'Id Game is required' ).notEmpty(),
        check( 'gender', 'Gender is required' ).notEmpty(),
        check( 'realese', 'Gender is required' ).notEmpty(),
        check( 'price', 'Price is required' ).notEmpty(),
        check( 'stock', 'Stock is required' ).notEmpty(),
        check( 'rate', 'rate is required').notEmpty(),
        ValidatorMidd

    ]
    ,updateGame 
   
);


router.delete( 
    

    '/deleteGame', 
    [
        check( '_id', 'Id Game is required' ).notEmpty(),
        ValidatorMidd
    ], 
    deleteGame 

);


//////---------------------------------------------->>>>>


module.exports = router;