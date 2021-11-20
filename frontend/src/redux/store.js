import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { getQuestionByCompaniesReducer, getSomeQuestionsReducer } from './reducers/questionsReducer';
import { getCurrentOpportunitiesReducer } from './reducers/opportunityReducer';
import { getInterviewsReducer } from './reducers/InterviewExperienceReducer';
const rootReducer = combineReducers({
    getSomeQuestionsReducer:getSomeQuestionsReducer,
    getQuestionByCompaniesReducer:getQuestionByCompaniesReducer,
    getCurrentOpportunitiesReducer:getCurrentOpportunitiesReducer,
    getInterviewsReducer:getInterviewsReducer
});

const initialState={};

const middleware = [thunk];
const store = createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));
export default store;