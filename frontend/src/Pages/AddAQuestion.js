import React, { useState } from 'react'
import Header from '../Component/Header';
import '../styles/Aaq.css';
import axios  from 'axios';
import { quesAPI } from '../API';

const questionDataSchema={
    Question:"",
    link:"",
    company:""
}

const AddAQuestion = () => {

    const[initialState,setState] = useState(questionDataSchema);

    const inputHandler = (e)=>{
        setState({...initialState,[e.target.name]:e.target.value})
    }

    const addQuestion = async() =>{
        await axios.post(`${quesAPI}/addQuestions`,{
            
        },{
            headers:{

            }
        })
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
