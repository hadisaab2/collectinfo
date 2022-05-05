import React,{useContext} from 'react'
import "../css/main.css"
import { BsFillXCircleFill } from "react-icons/bs";
import { StepsContext } from "../Context/StepsContext";





let monty = require("./MONTYLOGO.png")
let montytitle = require("./MONTYTITLE.png")



export default function Header(props) {
  const { screen } = useContext(StepsContext);
  const [mobile, setmobile] = screen;
 const handleexit =() =>{
    props.ontoggle(true)

  }
  
  return (

    <div className={mobile =="notmobile" ? "mobileheader" :"header"}>

        <div className="circle">
            <img src={monty} className="montyimg"/>
        </div>
        <span className="chattitle">MontyMobile</span>
        <BsFillXCircleFill size={30} className="exit" onClick={handleexit}/>
    </div>
  )
}
