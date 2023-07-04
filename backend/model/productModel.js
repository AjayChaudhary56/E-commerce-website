const mongoose = require ("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Required"],
        trim:true
    },
    description:{
          type:String,
          required:[true,"Description is Required"],

    },
    price:{
        type:Number,
        required:[true,"Price is Required"],
        maxLength:[8, "Price cannot exceed 8 figures"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }
    ],
    category:{
        type:String,
        required:[true,'Category is required']
    },
    stock:{
        type:Number,
        required:[true, "Stock is required"],
        maxLength:[4, "Stock cannot exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type: Number,
        default:0
    },
    reviews:[
        {name:{
            type:String,
            required:true
        },
    rating:{
        type:Number,
            required:true
    },
    comment:{
        type:String,
            required:true
    }
    }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports= mongoose.model("Product",productSchema)