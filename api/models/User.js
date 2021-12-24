const mongoose= require('mongoose');


const UserSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    profilePicture:{
        type: String,
        default: "https://res.cloudinary.com/dzqbzqgjw/image/upload/v1587692404/default_profile_picture_xqjqjy.png"
    },
}, {
   timestamps: true 
})



module.exports = mongoose.model("User", UserSchema);