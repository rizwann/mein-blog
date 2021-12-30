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
        default: "https://randomuser.me/api/portraits/men/19.jpg"
    },
}, {
   timestamps: true 
})



module.exports = mongoose.model("User", UserSchema);