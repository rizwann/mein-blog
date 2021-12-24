const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");

//Register
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPw = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPw,
    });
    const user = await newUser.save();
    const {password, ...rest} = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    res.status(500).json(error);
  }
});



//Login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(400).json('Wrong Credentials !!');

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        !isMatch && res.status(400).json('Wrong Credentials !!');
   const {password, ...rest} = user._doc;
        res.status(200).json(rest);
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;
