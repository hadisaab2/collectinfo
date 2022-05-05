import React, { useState, useEffect, useContext } from "react";
import { StepsContext } from "../Context/StepsContext";
import Selectedinterest from "./Selectedinterest";
import { FaArrowRight } from "react-icons/fa";

import "../css/main.css";


export default function Interest(props) {
  let id = 0;
  const [disablesend, setdisablesend] = useState(false);
  const [changecomponent, setchangecomponent] = useState(false);
  const [auxoptions, setauxoptions] = useState([]);
  const { interest,messagesEndRef,userresponse } = useContext(StepsContext);
  const [interests, setinterests] = interest;
  const [response, setresponse] = userresponse;
  const endref=messagesEndRef;

  const optionclick = (e) => {
    if(disablesend==false){
        setdisablesend(true);
    }
    var element = document.getElementById(e.target.id);
    if (element.classList.contains("optionchecked")) {
      element.classList.remove("optionchecked");
      setauxoptions(auxoptions.filter((item) => item !== e.target.outerText));
    } else {
      setauxoptions((oldArray) => [...oldArray,e .target.outerText]);
      setresponse((oldArray) => [...oldArray,e .target.outerText]);
      element.classList.add("optionchecked");
    }
  };

  useEffect(() => {
    if(auxoptions.length==0){
      setdisablesend(false)
    }
  },[auxoptions])

  useEffect(() => {
    endref.current?.scrollIntoView({ behavior: "smooth" })

  },[disablesend])

  
  const sendhandle = () => {
    setchangecomponent(true);
    
    if(interests.length == 0) {
        props.loopsteps(18)
    }else {
    props.loopsteps(16)
    }
    
  };
  

  if (!changecomponent) {
    return (
      <div className="interestsouter">
        <ul className="ul">
          {props.opt.map((option) => {
            id = id + 1;
            return (
              <li className="li">
                <button
                  className="option"
                  id={id}
                  onClick={optionclick}
                  //disabled={disabledbuttons}
                >
                  {option.value}
                </button>
              </li>
            );
          })}
        </ul>
        {disablesend ? (
          <FaArrowRight className="sendinterest" size={18} onClick={sendhandle} />
        ) : null}
      </div>
    );
  } else {
    return(
    <div className="maincategoriesdiv">
    <div className="outer">
      <div className="innerinner">
        {auxoptions.map((option) => {
          //return(<li className="selectedoptionli">{option}</li>)
          return <Selectedinterest interestname={option} />  ;
        })}
      </div>
    </div>
    </div>
    )
  }
  

  /*
const [options, setoptions] = useState(opt)
  const [auxoptions, setauxoptions] = useState([]);
  const [progress, setprogress] = useState(0);
  const [clickcounter, setclickcounter] = useState(0);
  const [disableloader, setdisableloader] = useState(false);
  const [target, settarget] = useState();
  const [disabledbuttons, setdisabledbuttons] = useState(false);
  const [changecomponent, setchangecomponent] = useState(false);
  const { interest, chatinterestsresponse } = useContext(InterestsContext);
  const [interests, setinterests]=interest
  const [interestresponse, setinterestresponse] = chatinterestsresponse



  const optionclick = (e) => {
    //console.log(e.target.outerText);
    settarget(e.target.outerText);

    if (clickcounter == 0) {
      setdisableloader(true);
    }
    setclickcounter(clickcounter + 1);
    setprogress(0);
    setoptions(options.filter((item) => item.value !== e.target.outerText));
    setauxoptions(oldArray => [...oldArray, e.target.outerText]);
    setinterestresponse(oldArray => [...oldArray, e.target.outerText]);
    console.log(interests)
  };

  const findselectedoptions = () =>{
    let text= ""
    for (let i = 0; i < auxoptions.length; i++){
      text=text.concat(auxoptions[i])
      if(i != auxoptions.length-1){
      text=text.concat("-")
      }

    }
    return text
  }

  useEffect(() => {
    console.log(interestresponse)
    let bool = false;
    if (options.length == 0) {
      setdisableloader(false);
      if(interests.length == 0){
        triggerNextStep({ trigger: "20" });
      }else {
      triggerNextStep({ trigger: "18" });
      }
      setchangecomponent(true);

    }else {
    if (disableloader == true) {
      const timer = setInterval(() => {
        setprogress((oldProgress) => {
          if (oldProgress === 100) {
            setchangecomponent(true);
            setdisableloader(false);
            console.log(target);
            setdisabledbuttons(true);
            if (bool == false) {
              if(interests.length == 0) {
                triggerNextStep({ trigger: "20"});
              }else {
              triggerNextStep({ trigger: "18"});
              }
              bool = true;
            }
            return 0;
          } else {
            const diff = 5;
            return Math.min(oldProgress + diff, 100);
          }
        });
      }, 300);
      return () => {
        clearInterval(timer);
      };
    }
  }
  }, [options]);
  if (!changecomponent) {
    return (
      <div className="interestsouter">
        <ul className="ul">
          {options.map((option) => {
            return (
              <li className="li">
                <button
                  className="option"
                  onClick={optionclick}
                  disabled={disabledbuttons}
                >
                  {option.value}
                </button>
              </li>
            );
          })}
        </ul>
        <div className="sendbutton">
        <FaArrowRight  size={18}/>
        </div>
        
        {disableloader && options.length > 0 ? (
          <span className="othercategories">
            Do you want to choose other categories?
          </span>
        ) : (
          <></>
        )}

        {disableloader && options.length > 0 ? (
          <LinearProgress
            variant="determinate"
            value={progress}
            style={{ width: "70%", marginTop: "20px", height: "5%",marginLeft:"15%" }}
            className="buffer"
          />
        ) : (
          <> </>
        )}
      </div>
      // <button onClick={() => triggerNextStep({ trigger: '18' })}>Next</button>
    );
  } else {
    return (
      <div className="outer">
        <div className="innerinner">
          {auxoptions.map((option) => {
            //return(<li className="selectedoptionli">{option}</li>) 
            return(<Selectedinterest interestname={option}/>) 

          })
        }
        </div>
      </div>
    );
  }
  \*/
}
