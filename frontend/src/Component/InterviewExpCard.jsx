import React from 'react'

const InterviewExpCard = ({interview}) => {
    return (
        <div>
                <div class="inteview_experience_card">
                    <h3>{interview.interviewTitle}</h3>
                    <div class="image__container">
                        <img src={interview.companyLogo} class="brand" />
                    </div>
                    <div class="text__info">
                        {interview.interviewShortDesc}
                    </div>
                    <button class="read__more__button">
                        <a href={interview.interviewArticleLink} target="__">
                            Read More
                        </a>
                    </button>
                </div>
        </div>
    )
}

export default InterviewExpCard;
