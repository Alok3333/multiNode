const router = require('express').Router();
const User = require('../model/Usermodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// user register
router.post("/register", async (req, res) => {
    // checking user email id in database
    const checkEmail = await User.findOne({
        email: req.body.email
    });

    if(checkEmail) return res.status(400).send("Email is already exits.");

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    // Create a New User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPass
    });


    try {
        const saveUser = await user.save();
        res.send(saveUser);
    } catch (error) {
        res.status(400).send(error);
    }
});


//user login
router.post("/login", async (req, res) => {
    //checking user email register or not in database
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send("Email is wrong.");

    //checking password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send("password encrypted.");

    //create and assign a token
    const token = jwt.sign({_Id: user._Id}, process.env.TOKEN_SECRET);
    res.header("auth_token", token).send({token: token});


});

module.exports = router;