const { Schema, model } = require( "mongoose" );

//////<<<<<------------------------------------------------``

const gameSchema = Schema(


    {
        
        title : { type : String, required : true, unique : true },

        gender : { type : String, required : true },
        
        realese : { type : String, required : true },

        price : { type : Number, require : true },

        stock : { type : Number, require : true },

        rate : { type : Number, required : true },

        url : { type : String, require : true },

        url2 : { type : String, require : true },

    }
    

);

//////---------------------------------------------->>>>>

module.exports = model( "Game", gameSchema );