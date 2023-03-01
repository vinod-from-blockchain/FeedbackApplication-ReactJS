
import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import feedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import RatingSelect from "./components/RatingSelect";
import {v4 as uuidv4} from 'uuid';
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";





function App(){

   
const [feedback,setFeedback] = useState(feedbackData);




const addFeedback=(newFeedback)=>{

  newFeedback.id=uuidv4();
  setFeedback([newFeedback,...feedback])

}

       return (
       <FeedbackProvider>
         <Router>
           <Header text="Hello World " />
           <div className="container">
             <Routes>
               <Route
                 exact
                 path="/"
                 element={
                   <>
                     <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
                     <FeedbackStats ></FeedbackStats>
                     <FeedbackList />

                   </>
                 }
               ></Route>
               <Route path="/About" element={<About />} />
             </Routes>
             <AboutIconLink></AboutIconLink>
           </div>
         </Router>
         </FeedbackProvider>
        
       );
}


export default App;