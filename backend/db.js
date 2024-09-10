const mongoose=require('mongoose');

mongoose.connect("mongodb+srv://sushantj_97:z2DRGTJzJ8KGu6Hb@cluster0.8sspqci.mongodb.net/CashApp")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minlength:3,
        maxlength:20
    },
    password:{
        type:String,
        required:true,
        minlength:8,
       
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    firstname:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    lastname:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    }
    }
)
const User=mongoose.model('users',userSchema);

module.exports=User;