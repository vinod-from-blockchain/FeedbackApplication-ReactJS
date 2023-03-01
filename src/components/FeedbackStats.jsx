import React from 'react'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';



function FeedbackStats() {

  const {feedback} = useContext(FeedbackContext)

    let SUM = feedback.reduce((acc,curr)=>{
        return acc+curr.rating
    },0)



    let average=SUM/feedback.length;


  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} reviews</h4>
      <h4>Average {isNaN(average)?0:average}</h4>
      
    </div>
  )
}

export default FeedbackStats
