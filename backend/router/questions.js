const express = require('express');
const router = express.Router();
const Question = require('../models/questions');

router.get('/getQuestions', async (req, res) => {
    try {
    const s =  await Question.findOne({});
    console.log(s.Companies[1]) 
    console.log(s.Companies) 
    } catch (e) {
        res.status(422).json(e)
    }
});

router.post('/addQuestions', async (req, res) => {
    try {
        const { QuestionLink, Question, Companies } = req.body;
        if (!QuestionLink || !Question || !Companies) {
            return res.status(422).json({ error: "Please Add All The Feilds" });
        } else {
            const newQues = new Question({
                QuestionLink, 
                Question, 
                Companies
            });

            await newQues.save().then((saved)=>{
                res.status(201).json(saved);
            })
        }
    } catch (e) {
        res.status(422).json(e)
    }

});

router.get('/getQuestionByCompanies/:companyname', async (req, res) => {
    try{
    const ques = await Question.find({});
    // const comp = [];
    // for(var i=0;i<ques.length;i++){
    //     if(ques[i].Companies.includes(req.params.companyname)){
    //         comp.push(ques[i])
    //     }
    // }
    // console.log(comp)
    }catch(e){
        res.status(422).json(e)
    }
});


module.exports = router;
