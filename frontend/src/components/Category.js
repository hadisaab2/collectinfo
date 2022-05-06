import React from 'react'
import { BiJoystick} from "react-icons/bi";
import { AiFillDollarCircle} from "react-icons/ai";
import { FaIndustry} from "react-icons/fa";
import { RiMessage3Line} from "react-icons/ri";






import '../css/main.css'

export default function 
(props) {
    const handlecategory = ()=>{
        props.categoryclick(props.categoryname)
    }

    const renderSwitch = (param) =>{
        switch (param) {
            case "Gaming":
                return (<BiJoystick  className="categoryicon"/> )
                break
            case "Monetization":
                return(<AiFillDollarCircle className="categoryicon"/>)
                break
            case "Industry":
                return(<FaIndustry className="categoryicon"/>)
                break
            case "Messaging" : 
                return(<RiMessage3Line  className="categoryicon"/>)
                break   
        }

    } 
   
  return (
    <div className="categorydiv" onClick={handlecategory} > 
        {renderSwitch(props.categoryname)}
        <span className="categorytitle">{props.categoryname}</span>
    </div>
  )
}
