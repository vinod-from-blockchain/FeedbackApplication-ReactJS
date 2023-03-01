import React from 'react'
import { useState,useContext,useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function RatingSelect({select}) {


    const [selected,setSelected]= useState(3);
    const {feedbackEdit} = useContext(FeedbackContext)

    useEffect(()=>{
        setSelected(feedbackEdit.item.rating)

    },[feedbackEdit])

    const handleChange = (e)=>{

        console.log(e.currentTarget.value)
        setSelected(+e.currentTarget.value)
        select(e.currentTarget.value)

    }
  return (
    <div>
      
          <ul className='rating'>
              <li>
                  <input type="radio" name="1" id="1" checked={selected==1} onChange={handleChange} value='1'/>
                  <label htmlFor='1'>1</label>
              </li>
              <li>
                  <input type="radio" name="2" id="2"  checked={selected==2} onChange={handleChange} value='2' />
                  <label htmlFor='2'>2</label>
              </li>
              <li>
                  <input type="radio" name="3" id="3" checked={selected==3} onChange={handleChange} value='3'/>
                  <label htmlFor='3'>3</label>
              </li>
              <li>
                  <input type="radio" name="4" id="4" checked={selected==4} onChange={handleChange} value='4'/>
                  <label htmlFor='4'>4</label>
              </li>
          </ul>
      </div>
  )
}

export default RatingSelect
