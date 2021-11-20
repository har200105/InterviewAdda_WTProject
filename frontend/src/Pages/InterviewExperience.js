import React, { useEffect } from 'react';
import Header from '../Component/Header';
import InterviewExpCard from '../Component/InterviewExpCard';
import '../styles/InterviewExperience.css';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { getInterviews } from '../redux/actions/InterviewExperienceAction';


const InterviewExperience = () => {

    const dispatch = useDispatch();
    const interviewState = useSelector(state => state.getInterviewsReducer);
    const { error, loading, interviews } = interviewState;

    useEffect(()=>{
        dispatch(getInterviews());
    },[dispatch])



    return (
        <div>
            <Header />
                {loading && <div style={{ width: 40, height: 40, margin: 'auto' }}>
                    <CircularProgressbar
                        styles={buildStyles({
                            pathColor: 'white', pathTransitionDuration: 0.5
                        })}
                    />
                </div>}
            <div class="interview_experiences">

                {
                    interviews.map((d)=>(
                    <InterviewExpCard  interview={d}/>
                    ))
                }
                
            </div>

        </div>
    )
}

export default InterviewExperience
