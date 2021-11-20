import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getQuestionsByCompany } from '../redux/actions/questionAction';
import {Link} from 'react-router-dom';
import Header from '../Component/Header';
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

const QuestionByCompanies = () => {
    const dispatch = useDispatch();
    const questionState = useSelector(state => state.getQuestionByCompaniesReducer);
    const { loading, questions, error } = questionState;

    const { name } = useParams();
    console.log(name);

    useEffect(() => {
        dispatch(getQuestionsByCompany(name));
    }, [dispatch,name]);

    return (
        <>
            <Header />
            <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            <div class="parent">
                <div class="left-container">
                    <div class="item">
                        <Link to={`/getComp/GoldmanSachs`}>
                            GoldmanSachs Questions
                        </Link>
                    </div>

                    <div class="item">
                        <Link to={`/getComp/Microsoft`}>
                            Microsoft Questions
                        </Link>
                    </div>


                    <div class="item">
                        <Link to={`/getComp/Amazon`}>
                            Amazon Questions
                        </Link>
                    </div>


                    <div class="item">
                        <Link to={`/getComp/Meta`}>
                            Meta Questions
                        </Link>
                    </div>

                    <div class="item">
                        <Link to={`/getComp/Google`}>
                            Google Questions
                        </Link>
                    </div>

                    <div class="item">
                        <Link to={`/getComp/MorganStanley`}>
                            MorganStanley Questions
                        </Link>
                    </div>

                    <div class="item">
                        <Link to={`/getComp/BrowserStack`}>
                            BrowserStack Questions
                        </Link>
                    </div>
                </div>
                <div class="right-container">
                    <img src="/assets/bg.png" height="500px" width="95%" alt="" />

                    {loading &&  <div style={{ width: 40, height: 40 , margin:'auto' }}>
  <CircularProgressbar 
      styles={buildStyles({ pathColor:'white',pathTransitionDuration:0.5

    })} />
    </div>
                    }

                    {questions && questions.map((q) => (


                        <div class="list_top_questions">
                            <div class="questions_box">
                                <span class="question">
                                    {q.Question}
                                </span>

                                <a href={q.QuestionLink} target="__">
                                    <button class="solve_button">Solve</button>
                                </a>

                                <div class="companies_list">
                                    {q.Companies.map((c) => (
                                        <p>{c}</p>
                                    ))}
                                </div>

                                {
                                    q.isContributed &&
                                    <div class="contributor__details">
                                        <p>Contributed By : {q.addedBy.name}</p>
                                    </div>
                                }


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default QuestionByCompanies
