import React from 'react';
import Header from '../Component/Header';
import InterviewExpCard from '../Component/InterviewExpCard';
import '../styles/InterviewExperience.css';

const InterviewExperience = () => {
    return (
        <div>
            <Header/>
            <div class="interview_experiences">
                <InterviewExpCard />
                <InterviewExpCard />
                <InterviewExpCard />
                <InterviewExpCard />
                <InterviewExpCard />
                <InterviewExpCard/>


            </div>

        </div>
    )
}

export default InterviewExperience
