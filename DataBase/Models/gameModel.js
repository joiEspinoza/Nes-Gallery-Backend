const { Schema, model } = require( "mongoose" );

//////<<<<<------------------------------------------------``

const gameSchema = Schema(


    {
        
        title : { type : String, required : true, unique : true },

        gender : { type : String, required : true },
        
        release : { type : String, required : true },

        rate : { type : Number, required : true },

        url : { type : String, require : true },

        url2 : { type : String, require : true },

    }
    

);

//////---------------------------------------------->>>>>

module.exports = model( "Game", gameSchema );