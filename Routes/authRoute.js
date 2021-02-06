const { Router } = require( 'express' );
const router = Router();
const { check } = require( 'express-validator' );
const { register, login } = require('../Control/authControl');
const { ValidatorMidd } = require( '../Middleware/validadorDatos' );


//////<<<<<------------------------------------------------``


router.post( 
    

    '/register', 
    [

        check( 'email', 'Email is required' ).isEmail().notEmpty(),
        check( 'name', 'Name must have at least 4 characters' ).isLength( { min : 4 } ),
        check( 'password', 'Password must have at least 6 characters' ).isLength( { min : 6 } ),
        ValidatorMidd

    ]
    ,register 
   
);


router.post( 
    
    '/login',
    [

        check( 'email', 'Email is required' ).isEmail().notEmpty(),
        check( 'password', 'Password must have at least 4 characters' ).isLength( { min : 6 } ),
        ValidatorMidd

    ],login 

);


//////---------------------------------------------->>>>>


module.exports = router;