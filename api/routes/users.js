const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Post = require("../models/Post");

//UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPw = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashedPw;
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      const { password, ...rest } = updatedUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("You are not authorized to update this user!!");
  }
});




//DELETE
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
      try{
       
        const user = await User.findById(req.params.id);

        try {
            await Post.deleteMany({username: user.username});  //For Deleting all the posts of the user
            await User.findByIdAndDelete(req.params.id);
             res.status(200).json("Your Account has been deleted!!");
           } catch (error) {
             res.status(500).json(error);
           }
      }catch(error){
              res.status(404).json("User not found!!");
      }
  
      
    } else {
      res.status(401).json("You are not authorized to delete this user!!!");
    }
  });


module.exports = router;
