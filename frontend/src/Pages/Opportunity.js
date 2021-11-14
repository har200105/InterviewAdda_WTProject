import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Opportunity.css';
import Question from '../Component/Question';
import { opporAPI } from '../API';
import Header from '../Component/Header';

const Opportunity = () => {

    const [opportunities, setOpportunities] = useState([]);

    const getCurrentOpportunities = async () => {
        const oppor = await axios.get(`${opporAPI}/getLink`);
        if (oppor.status === 201) {
            setOpportunities(oppor.data);
        }
    }

    useEffect(() => {
        getCurrentOpportunities();
    }, [opportunities]);


    return (
        <>
            <Header />
            <div className="info">
                <div id="data">
                    {
                        opportunities.map((o) => (
                            <Question p={o} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Opportunity
