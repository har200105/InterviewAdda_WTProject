import axios from 'axios';
import {quesAPI} from '../../API';

export const getInterviews = () => async(dispatch)=>{
    dispatch({type:'GET_INTERVIEW_REQ'});
    try{
        const response = await axios.get(`${quesAPI}/getInterviewExp`);
        console.log(response.data);
        dispatch({type:'GET_INTERVIEW_SUCCESS',payload:response.data})
    }catch(e){
        dispatch({type:'GET_INTERVIEW_FAIL',payload:e})
    }
}
