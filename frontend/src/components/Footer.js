import React, { useContext, useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { StepsContext } from "../Context/StepsContext";
import UserMessage from "./UserMessage";

function Footer(props) {
  const { items, lasttrigger, disableinput, name, endchat,userresponse,phone,email } =
    useContext(StepsContext);
  //components items for chatbot
  const [components, setcomponents] = items;
  //check the last trigger before returning from recursive function loopsteps
  const [trigger, settrigger] = lasttrigger;
  const [inputvalue, setinputvalue] = useState("");
  const [input, setinput] = disableinput;
  const [placeholder, setplaceholder] = useState("Enter a Message");
  const [changeinput, setchangeinput] = useState(true);
  const [finish, setfinish] = endchat;
  const [userphone, setuserphone] = phone;
  const [useremail, setuseremail] = email;
  const [inputname, setinputname] = name;




  const handleinput = (e) => {
    setinputvalue(e.target.value);
  };

  const handleuserclick = async () => {
    if (inputvalue != "") {
      //if validation is true we should check if input value is number or not
      if (props.validationstep.validation == true) {
        switch (props.validationstep.validationtype) {
          case "phone":
            const num = Number(inputvalue);
            if (!Number.isInteger(num)) {
              //if not a number
              setchangeinput(false); //change input className to show red border
              setplaceholder("Enter a valid phonenumber "); //change placeholder
              setinputvalue("");
              await new Promise((r) => setTimeout(r, 1200)); //wait then return to original classname
              setchangeinput(true);
              setplaceholder("Enter a message");
            } else {
              //if not number normally add the usermessage to components array
              setcomponents((oldArray) => [
                ...oldArray,
                <UserMessage message={inputvalue} />,
              ]);
              setuserphone(num);
              props.loopsteps(trigger);
              setinputvalue("");
              setinput(true);
            }
            break;
          case "email":
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!inputvalue.match(mailformat)) {
              setchangeinput(false); //change input className to show red border
              setplaceholder("Enter a valid Email format "); //change placeholder
              setinputvalue("");
              await new Promise((r) => setTimeout(r, 1200)); //wait then return to original classname
              setchangeinput(true);
              setplaceholder("Enter a message");
            } else {
              //if not number normally add the usermessage to components array
              setcomponents((oldArray) => [
                ...oldArray,
                <UserMessage message={inputvalue} />,
              ]);
              setuseremail(inputvalue)
              props.loopsteps(trigger);
              setinputvalue("");
              setinput(true);
            }
            break;
        }
      } else {
        //if no validation normally add usermessage
        setcomponents((oldArray) => [
          ...oldArray,
          <UserMessage message={inputvalue} />,
        ]);
        props.loopsteps(trigger);
        setinputvalue("");
        setinput(true);
        if (components.length < 4) {
          //if components length is still less than 4 than this is the name input for the user so we save value in context api
          setinputname(inputvalue);
        }
      }
    }
  };
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.key === "Enter") {
      handleuserclick();
    }
  };

  const footerclassname = () => {
    if (finish == true) {
      return "finishfooter";
    } else {
      if (changeinput) {
        return "input";
      } else {
        return "validation";
      }
    }
  };
  if (!input) {
    return (
      <div className="footer">
        <input
          className={footerclassname()}
          placeholder={placeholder}
          value={inputvalue}
          onChange={handleinput}
          onKeyPress={handleKeypress}
        />
        <div className="sendbutton" onClick={handleuserclick}>
          <IoMdSend className="sendicon" size={23} />
        </div>        
      </div>
    );
  } else {
    return (
      <div className="footer">
        <input
          className={footerclassname()}
          placeholder="Enter a Message"
          value={inputvalue}
          disabled
        />
        {!finish &&
          <div className="sendbutton">
            <IoMdSend className="sendicon" size={23} />
          </div>
          
        }

      </div>
      
    );
  }
}

export default Footer;
