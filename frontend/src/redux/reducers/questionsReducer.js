export const getSomeQuestionsReducer = (state={questions:[]},action)=>{
    switch(action.type){
        case 'GET_QUESTION_REQ':
            return {
                ...state,
                loading:true
            }
        case 'GET_QUESTIONS_SUCCESS':
            return {
                questions:action.payload,
                loading:false
            }
        case 'GET_QUESTIONS_FAIL':
            return {
                error:action.payload,
                loading:false
            }   
        default: return state     
    }
}


export const getQuestionByCompaniesReducer = (state={questions:[]},action) =>{
    switch(action.type){
        case 'GET_COMPANY_QUESTION_REQ':
            return {
                ...state,
                loading:true
            }
        case 'GET_COMPANY_QUESTIONS_SUCCESS':
            return {
                questions:action.payload,
                loading:false
            }
        case 'GET_COMPANY_QUESTIONS_FAIL':
            return {
                error:action.payload,
                loading:false
            }   
        default: return state     
    }
}

