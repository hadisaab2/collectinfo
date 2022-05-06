import React, { useState, useContext, useEffect, useRef } from "react";
import "./css/main.css";
import { BsFillChatLeftFill } from "react-icons/bs";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Message from "./components/Message";

import { StepsContext } from "./Context/StepsContext";
import Categories from "./components/Categories";
import Interest from "./components/Interest";
import YesNo from "./components/YesNo";
import axios from "axios"


export default function Chatbot({ screen }) {
  const chatbotclassname = () => {
    switch (screen) {
      case "Mobile":
        if (toggle) {
          return "mobilewholechatbot show";
        } else {
          if (test) {
            return "mobilewholechatbot notdisplayed";
          } else {
            return "hide";
          }
        }
        break;
      case "notMobile":
        if (toggle) {
          return "wholechatbot show";
        } else {
          if (test) {
            return "wholechatbot notdisplayed";
          } else {
            return "hide";
          }
        }
        break;
      default:
        if (toggle) {
          return "wholechatbot show";
        } else {
          if (test) {
            return "wholechatbot notdisplayed";
          } else {
            return "hide";
          }
        }
        break;
    }
  };

  const togglebuttonclassname = () =>{
    switch (screen) {
      case "mobile":
        if(!toggle){
          return "mobiletogglebutton"
        }else {
          return "mobiletogglebuttondisappear"
        }
        break;
      case "notMobile":
        if(!toggle){
          return "togglebutton"
        }else {
          return "togglebuttondisappear"
        }
        break;
      default:
        if(!toggle){
          return "togglebutton"
        }else {
          return "togglebuttondisappear"
        }
        break;
    }

  }
  const { steps, items, lasttrigger, disableinput,endchat,userresponse,phone,email,name } = useContext(StepsContext);
  const [components, setcomponents] = items;
  const [chatbotsteps, setchatbotsteps] = steps;
  const [trigger, settrigger] = lasttrigger;
  const [input, setinput] = disableinput;
  const [finish,setfinish]=endchat
  const [response,setresponse]=userresponse
  const [userphone, setuserphone] = phone;
  const [useremail, setuseremail] = email;
  const [inputname, setinputname] = name;


  const [toggle, settoggle] = useState(false);
  const [test, settest] = useState(true);
  const [scroll, setscroll] = useState(false);
  const messagesEndRef = useRef(null);
  const [validationstep, setvalidationstep] = useState({});

  //sending api to backend when the chat ends and finish state becomes true
  useEffect(() => {
    const data = {response,userphone,useremail,inputname}
    console.log(data)
    axios.post("http://localhost:5000/email",data).then((response) => {
        console.log("data sent")
      })
  },[finish])

  const togglehandle = () => {
    var doc = document.getElementsByClassName("chatbot");
    settest(false);
    togglefunction(toggle);
  };
  const togglefunction = async (toggle) => {
    if (toggle == true) {
      settoggle(!toggle);
      await new Promise((r) => setTimeout(r, 400));
      window.parent.postMessage("hides", "*");
    } else {
      window.parent.postMessage("shows", "*");
      settoggle(!toggle);

    }
  };

  const findjson = (stepid) => {
    for (let i = 0; i < chatbotsteps.length; i++) {
      if (chatbotsteps[i].id == stepid) {
        return chatbotsteps[i];
      }
    }
  };

  async function loopsteps(i) {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

    const object = findjson(i);
    await new Promise((r) => setTimeout(r, 1000));
    if (object.user == true) {
      settrigger(object.trigger);
      setinput(false);
      setscroll(!scroll);
      setvalidationstep({
        validation: object.validation,
        validationtype: object.validationtype,
      });

      return;
    }

    if (object.customcomponent != null) {
      switch (object.customcomponent) {
        
        case "categories":
          setcomponents((oldArray) => [
            ...oldArray,
            <Categories loopsteps={loopsteps} />,
          ]);
          return;
        case "interests":
          await new Promise((r) => setTimeout(r, 400));
          setcomponents((oldArray) => [
            ...oldArray,
            <Interest opt={object.options} loopsteps={loopsteps} />,
          ]);

          return;
        case "yesno":
          setcomponents((oldArray) => [
            ...oldArray,
            <YesNo loopsteps={loopsteps} />,
          ]);

          return;
      }
    }
    if (object.message !== null) {
      setcomponents((oldArray) => [
        ...oldArray,
        <Message
          message={object.message}
          previousvalue={object.previousvalue}
        />,
      ]);
    }
    if(object.end == true){
      setfinish(true)
      return;  
    }
    loopsteps(object.trigger);
  }

  return (
    <div className="chatbot">
      <div
        // className={!toggle ? "togglebutton" : "togglebuttondisappear"}
        className={togglebuttonclassname()}
        onClick={togglehandle}
        style={{ transition: "all .3s" }}
      >
        <BsFillChatLeftFill className="toggleicon" size={23} />{" "}
      </div>
      <div
        className={chatbotclassname()}
        disabled={false}
        style={{ transition: "all .3s" }}
      >
        {toggle && <Header ontoggle={togglehandle} loopsteps={loopsteps} />}
        <Body loopsteps={loopsteps} />
        {toggle && (
          <Footer loopsteps={loopsteps} validationstep={validationstep} />
        )}
      </div>
    </div>
  );
}
