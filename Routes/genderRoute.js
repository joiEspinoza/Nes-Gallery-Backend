const { Router } = require( 'express' );
const router = Router();
const { check } = require( 'express-validator' );
const { ValidatorMidd } = require( '../Middleware/validadorDatos' );
const { createGender, getGenders, deleteGender } = require('../Control/genderControl');


//////<<<<<------------------------------------------------``


router.post( 
    

    '/createGender', 
    [
        check( 'descr', 'Description is required' ).notEmpty(),
        ValidatorMidd
    ]
    ,createGender 

);


router.get( '/getGenders', [], getGenders );


router.delete( '/deleteGender', [], deleteGender )


//////---------------------------------------------->>>>>

module.exports = router;