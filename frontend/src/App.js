import './App.css';
import Chatbot from './Chatbot';
import { StepsContext } from "./Context/StepsContext";
import {useContext} from "react"



function App() {
  const {screen } = useContext(StepsContext);
  const [mobile, setmobile] = screen;

  
  window.addEventListener("message",evt=>{
    //console.log(evt)
    if(evt.data=="notMobile"){
      setmobile(evt.data)
    }else{
      if(evt.data == "Mobile"){
      setmobile(evt.data)
      }
    }
  })
  return (
    <Chatbot screen={mobile}/>
  );
}

export default App;
