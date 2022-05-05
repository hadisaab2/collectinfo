import { wait } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState,useContext } from "react";
import { StepsContext } from "../Context/StepsContext";


export default function ( props) {
  const {name,items } = useContext(StepsContext);
  const[username,setusername]=name
  const [components, setcomponents] = items



  const [bool,setbool]=useState(true)
  useEffect(() => {
    setTimeout(function(){setbool(false)},1000);
     
    }, []);
if(!bool){
    return (
      <div className="botmessagediv">
        <div className="botmessage">{props.previousvalue ? props.message.concat(username): props.message}</div>
      </div>
    );
    
  } else {
    return(
    <div className="botmessagediv">
      <div className="botmessagedots">
        <div className="dot1"></div>
        <div className="dot2"></div>
        <div className="dot3"></div>
        
      </div>
    </div>
    )
  }
}
