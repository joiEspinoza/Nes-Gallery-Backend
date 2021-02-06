const { Schema, model } = require( "mongoose" );

//////<<<<<------------------------------------------------``

const genderSchema = Schema(


    {
        

        descr : { type : String, required : true, unique : true },

    }
    

);

//////---------------------------------------------->>>>>

module.exports = model( "Gender", genderSchema );