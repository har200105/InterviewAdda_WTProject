const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.post("/login", async (request, response) => {
    try {
        let token;
        const exist = await User.findOne({ googleId: request.body.googleId });

        if(exist) {
             token = jwt.sign(exist._id,process.env.JWT_SECRET);
            response.status(201).json({user:exist,token});
            return;
        }

        const newUser = new User(request.body);
        await newUser.save().then((s)=>{
        token = jwt.sign(s._id,process.env.JWT_SECRET)     
        response.status(201).json({user:s,token});
    });
    } catch (error) {
        response.status(500).json(error);
    }
});

module.exports = router;