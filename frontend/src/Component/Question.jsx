import React from 'react'

const Question = ({p}) => {
    return (
        <div class="list_top_questions">
        <div class="questions_box">
          <span class="question">
          {p.companyName} ({p.formType})
          </span>
            <a class="solve_apply" href={p.link} target="__"> Apply </a>
        </div>
      </div>
    )
}

export default Question
