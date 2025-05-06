import React from 'react'
import dayjs from 'dayjs';


const InterviewCard = ({ interviewId, userID, role, type, techstack, createdAt}: InterviewCardProps) => {
    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;


    return (
    <div>InterviewCard</div>
  )
}

export default InterviewCard