const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.post("/login", async (request, response) => {
    try {
        console.log(request.body)
        const exist = await User.findOne({ googleId: request.body.googleId });
        console.log("Exist : "+ exist)

        if(exist) {
            console.log("Inside")
             let ss = jwt.sign({_id:exist._id},process.env.JWT_SECRET);
             console.log("Debug")
           return response.status(201).json({user:exist,token:ss});
           
        }

        const newUser = new User(request.body);
        console.log("new")
        await newUser.save().then((s)=>{
        let pp = jwt.sign({_id:s._id},process.env.JWT_SECRET)     
            console.log("Signed")
        response.status(201).json({user:s,token:pp});
    });
    } catch (error) {
        response.status(422).json(error);
    }
});

module.exports = router;