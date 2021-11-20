export const getCurrentOpportunitiesReducer = (state={opportunities:[]},action)=>{
    switch(action.type){
        case 'GET_OPPORTUNITY_REQ':
            return {
                ...state,
                loading:true
            }
        case 'GET_OPPORTUNITY_SUCCESS':
            return {
                opportunities:action.payload,
                loading:false
            }
        case 'GET_OPPORTUNITY__FAIL':
            return {
                error:action.payload,
                loading:false
            }   
        default: return state     
    }
}
