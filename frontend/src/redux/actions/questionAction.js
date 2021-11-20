import axios from 'axios';
import {quesAPI} from '../../API';

export const getSomeQuestions = () => async(dispatch)=>{
    dispatch({type:'GET_QUESTION_REQ'});
    try{
        const response = await axios.get(`${quesAPI}/getSomeQuestions`);
        console.log(response.data);
        dispatch({type:'GET_QUESTIONS_SUCCESS',payload:response.data})
    }catch(e){
        dispatch({type:'GET_QUESTIONS_FAIL',payload:e})
    }
}

export const getQuestionsByCompany = (companyname) =>async(dispatch)=>{
    dispatch({type:'GET_COMPANY_QUESTION_REQ'});
    try{
        const response = await axios.get(`${quesAPI}/getQuestionByCompanies/${companyname}`);
        console.log(response.data);
        dispatch({type:'GET_COMPANY_QUESTIONS_SUCCESS',payload:response.data})
    }catch(e){
        dispatch({type:'GET_COMPANY_QUESTIONS_FAIL',payload:e})
    }
}
 