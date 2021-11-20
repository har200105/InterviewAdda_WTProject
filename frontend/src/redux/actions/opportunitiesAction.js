import axios from 'axios';
import {opporAPI} from '../../API';

export const getCurrentOpportunities = () => async(dispatch)=>{
    dispatch({type:'GET_OPPORTUNITY_REQ'});
    try{
        const response = await axios.get(`${opporAPI}/getLink`);
        console.log(response.data);
        dispatch({type:'GET_OPPORTUNITY_SUCCESS',payload:response.data})
    }catch(e){
        dispatch({type:'GET_OPPORTUNITY_FAIL',payload:e})
    }
}
