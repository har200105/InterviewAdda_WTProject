const express = require('express');
const router = express.Router();
const Questions = require('../models/questions');
const Interview = require('../models/interviewExperiences');
const middleware =  require('../middleware/middleware');

router.get('/getSomeQuestions', async (req, res) => {
try {
    const s =  await Questions.find({})
    .populate("addedBy","name email")
    .sort("-createdAt")
    .limit(10);
    res.status(201).json(s)
}catch (e) {
        res.status(422).json(e)
    }
});

router.post('/addQuestions',middleware,async (req, res) => {
    try {
        const { QuestionLink, Question, Companies,isContributed } = req.body;
        console.log(req.body);
        if (!QuestionLink || !Question || !Companies) {
            return res.status(422).json({ error: "Please Add All The Feilds" });
        } else {

            const newQues = new Questions({
                QuestionLink, 
                Question, 
                Companies,
                addedBy:req.user._id,
                isContributed
            });

            await newQues.save().then((saved)=>{
                res.status(201).json(saved);
            })

        }
    } catch (e) {
        res.status(422).json(e)
    }

});

router.get('/getQuestionByCompanies/:companyid', async (req, res) => {
try{
    const ques = await Questions.find({Companies:{$in:[req.params.companyid]}})
    .sort("-createdAt")
    .limit(10)
    .populate("addedBy","name email")
    res.status(201).json(ques);
}catch(e){
        res.status(422).json(e)
    }
});

router.post('/addInterviewExp',async(req,res)=>{
    try{
    const company = await Interview(req.body);
    await company.save().then((s)=>{
        res.status(201).json(s)
    })
}catch(e){
    res.status(422).json(e)
}
});

router.get('/getInterviewExp',async(req,res)=>{
    try{
        const interviewexps = await Interview.find({});
        res.status(201).json(interviewexps);
    }catch(e){
        res.status(422).json(e)
    }
});


module.exports = router;
