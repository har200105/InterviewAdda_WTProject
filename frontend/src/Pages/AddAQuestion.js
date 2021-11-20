import React, { useEffect, useState } from 'react'
import Header from '../Component/Header';
import '../styles/Aaq.css';
import axios  from 'axios';
import { quesAPI } from '../API';
import { useNavigate } from 'react-router';

const questionDataSchema={
    Question:"",
    link:"",
    company:""
}

const AddAQuestion = () => {

    const navigate = useNavigate();

    useEffect(()=>{
        localStorage.getItem("jwt") === null && navigate("/Login") 
    },[])

    const[initialState,setState] = useState(questionDataSchema);

    const inputHandler = (e)=>{
        setState({...initialState,[e.target.name]:e.target.value})
    }

    const addQuestion = async() =>{

      const addQues =  await axios.post(`${quesAPI}/addQuestions`,{
            QuestionLink:initialState.link,
            Companies:initialState.company.split(","),
            Question:initialState.Question,
            isContributed:true
        },{
            headers:{
                "Authorization" : localStorage.getItem("jwt")
            }
        });

        if(addQues.status===201){
            console.log("Question Added");
            navigate("/")
        }

    }

    return (
        <>
            <Header />
            <div>
                <div class="form">
                    <div class="title">Add a Interview Question</div>
                    <div class="input-container ic1">
                        <input id="Question" class="input" type="text" name="Question"
                         placeholder="Question Statement" 
                         onChange={inputHandler}
                         />
                        <div class="input-container ic2">
                            <input id="Link" class="input" type="text" 
                            name="link" placeholder="Question Link"
                            onChange={inputHandler}
                            />
                        </div>
                        <div class="input-container ic2">
                            <input id="company" class="input" type="text" name="company"
                             placeholder="Companies (Comma Separated)"
                             onChange={inputHandler}
                             />
                        </div>
                        <div class="input-container ic2">
                            <input type="submit" class="submit" value="Add Question"
                             onClick={addQuestion} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddAQuestion
