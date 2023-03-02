import { createContext,useState } from "react";
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{

    const [feedback,setFeedback] = useState([
    {
        id:1,
        text:'This text is from Context Provider',
        rating:10

    },
    {
      id:2,
      text:'This text is from Context Provider-2',
      rating:5

  },
  {
    id:3,
    text:'This text is from Context Provider-3',
    rating:6

}
  ])

  const [feedbackEdit,setFeedbackEdit] = useState({
    item:{},
    edit:false,
  })

    
    const addFeedback=(newFeedback)=>{

        newFeedback.id=uuidv4();
        setFeedback([newFeedback,...feedback])
      
      }


const deleteFeedback=(id)=>{
    if(window.confirm('do you really want to delete?')){
      setFeedback(feedback.filter((item)=> item.id!==id))
    }
  }
  
  const editFeedback=(item)=>{

    setFeedbackEdit({item,edit:true})
    
  }

  const updateFeedback=(id,updItem)=>{
    
    setFeedback(
      feedback.map((item)=>(item.id===id?{...item,...updItem}:item))

    )
  }

    return <FeedbackContext.Provider value={
        {feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        }
    }>
        {children}

    </FeedbackContext.Provider>

}

export default FeedbackContext;