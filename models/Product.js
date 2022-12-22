const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    brand:{
        type:String,
        required:[true, 'Please provide product name '],
        maxlength:70,
    },
    category:{
        type:String,
        required:[true, 'Please provide product type'],
        maxlength:100,
    },
    opened:{
        type:String,
        default:Date,
        required:[true, 'Please provide date opened'],
    },
    validity:{
        type:String,
        required:[true, 'Please provide validity'],
        maxlength: 4,
        
    },
    status:{
        type:String,
        enum:['new', 'in-use', 'expired'],
        default:'new',
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'Please provide user'],
    }

}, {timestamps:true})


module.exports = mongoose.model('Product', ProductSchema )