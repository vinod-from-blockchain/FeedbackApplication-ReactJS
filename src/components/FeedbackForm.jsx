import React from 'react'
import Card from '../shared/Card'
import { useState } from 'react'
import Button from '../shared/Button';
import RatingSelect from './RatingSelect';
import { useContext ,useEffect} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {

    const [text,setText] = useState('');
    const [isDisabled,setDisabled] = useState(true)
    const [message,setMessage]=useState('');
    const [rating , setRating] = useState(10);

    const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext);

    useEffect(()=>{
     
      if(feedbackEdit.edit===true)
      {
        setDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
      }
       
        
  

    },[feedbackEdit])

   



const handleTextChange=(e)=>{

  if(text=== '')
  {
    setDisabled(true)
  }  
  else if(text != '' && text.length <= 10)
  {
    setDisabled(true)
    setMessage("you must enter atleast 10 characters")
  }
  else{
    setDisabled(false)
    setMessage("");

  }
  
  setText(e.target.value)
}

const handleSubmit=(e)=>{
  e.preventDefault();
  if(text.trim().length > 10)
  {
    const newFeedback={
      
      rating,
      text
    }
    console.log('in handleSubmit')
    if(feedbackEdit.edit===true)
    {
      updateFeedback(feedbackEdit.item.id,newFeedback)

    }
    else{
      addFeedback(newFeedback);

    }
    
    setText('');

  }



}

  return (
    <div>
     <Card>
        <form onSubmit={handleSubmit}>
        <h2>How would you rate us for our service ?</h2>
        <RatingSelect select={(rating)=> setRating(rating)}></RatingSelect>
        <div className="input-group">
        <input type="text" onChange={handleTextChange} placeholder='write review here'  value={text}/>
        <Button type="submit" isDisabled={isDisabled}>Send</Button>

        </div>
        </form>
        {message &&
        <div className='message'>
          {message}
        </div>
}
        </Card>
    </div>
  )
}

export default FeedbackForm
