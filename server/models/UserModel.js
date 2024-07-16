import { genSalt, hash } from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true,"Email is required."],
        unique: true,
    },
    password:{
        type: String,
        required:[true, "Password is Required"],
    },
    firstname: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false
    },
    image:{
        type: String,
        required: false
    },
    color:{
        type:Number,
        required: false,
    },
    profileSetup:{
        type:Boolean,
        default: false,
    }
});


//prebuild middleware (pre and post): 

userSchema.pre("save", async function(next){
    const salt = await genSalt();
    this.password = await hash(this.password, salt);
    next();
});

const User = mongoose.model("Users", userSchema);

export default User;