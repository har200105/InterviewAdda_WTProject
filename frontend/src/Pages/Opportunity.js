import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Opportunity.css';
import OpportunityBox from '../Component/OpportunityBox';
import { opporAPI } from '../API';
import Header from '../Component/Header';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentOpportunities } from '../redux/actions/opportunitiesAction';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';


const Opportunity = () => {

    const dispatch = useDispatch();
    const opportunityState = useSelector(state => state.getCurrentOpportunitiesReducer);
    const { error, loading, opportunities } = opportunityState;

    useEffect(() => {
        dispatch(getCurrentOpportunities());
    }, [dispatch]);


    return (
        <>
            <Header />

           

            <div className="info">
                <div id="data">
                {loading && <div style={{ width: 40, height: 40, margin: 'auto' }}>
                <CircularProgressbar
                    styles={buildStyles({
                        pathColor: 'white', pathTransitionDuration: 0.5
                    })}
                />
            </div>}
                    {
                        opportunities.map((o) => (
                            <OpportunityBox p={o} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Opportunity
