import {FaTimes,FaEdit} from 'react-icons/fa'
import { useState } from "react"
import Card from "../shared/Card"
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackIten({item}){

   const {deleteFeedback,editFeedback} = useContext(FeedbackContext)
    
    return(

        <Card >
            <div className="num-display">      {item.rating}    </div>
            <button onClick={()=>deleteFeedback(item.id)}  className="close">
                <FaTimes></FaTimes>
            </button>
            <button className="edit">
                <FaEdit color='purple' onClick={()=>editFeedback(item)}></FaEdit>
            </button>
            <div className="text-display">{item.text}</div>
            
       </Card>
    )
}

export default FeedbackIten

