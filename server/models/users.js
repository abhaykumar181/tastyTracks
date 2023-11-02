import mongoose, { model } from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        minLength:3
    },
    email:{
        type:String,
        require:true,
        unique:[true, "This email already exists."],
        validate: function(value){
            if(validator.isEmail(value)){
                throw new Error("Invalid Email.");
            }
        }
    },
    phoneNumber:{
        type:String,
        require:true,
        validate: function(value){
            if(validator.isMobilePhone(value, "any")){
                throw new Error("Invalid Phone Number.");
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 3
    },
    role: {
        type: String,
        enum: ["user","admin"],
        default: "user"
    },
    tokens:[{
        token:{
            type:String,
            required:true,
        }
    }]
});

const users = new mongoose.model("users_tastyTracks",userSchema);
module.exports = users;