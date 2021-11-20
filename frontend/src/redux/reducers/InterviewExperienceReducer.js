export const getInterviewsReducer = (state={interviews:[]},action)=>{
    switch(action.type){
        case 'GET_INTERVIEW_REQ':
            return {
                ...state,
                loading:true
            }
        case 'GET_INTERVIEW_SUCCESS':
            return {
                interviews:action.payload,
                loading:false
            }
        case 'GET_INTERVIEW_FAIL':
            return {
                error:action.payload,
                loading:false
            }   
        default: return state     
    }
}
