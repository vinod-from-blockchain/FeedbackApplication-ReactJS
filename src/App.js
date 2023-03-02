
import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";


import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";


import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";






function App(){

   







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
                     <FeedbackForm ></FeedbackForm>
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