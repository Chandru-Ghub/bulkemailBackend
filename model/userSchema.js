const mongoose = require('mongoose');

const User = mongoose.Schema({

    fromMail:{
        type:String,
        required:true,
    },
    toMail:{
        type:Array,
        required:true,
    },
    sub:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    files:{
        type:Array,

    },
    time:{
        type:String,
        default:new Date
    }
},{
    timestamp :true
})

module.exports = mongoose.model('records',User);