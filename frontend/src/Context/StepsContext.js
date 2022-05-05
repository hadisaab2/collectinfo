import { createContext, useState, useRef } from "react";
import { chatbotsteps, categories } from "../steps";

export const StepsContext = createContext();
export const StepsProvider = ({ children }) => {
  const [interests, setinterests] = useState(categories);
  const messagesEndRef = useRef(null);

  const [steps, setsteps] = useState(chatbotsteps);
  //for chatbot response msgs for email send
  const [name, setname] = useState("");
  //chatbot items
  const [items, setitems] = useState([]);
  //
  const [lasttrigger, setlasttrigger] = useState(0);
  //input disable
  const [disableinput, setdisableinput] = useState(true);
  //Interests
  const [userresponse, setuserresponse] = useState([]);

  const [screen, setscreen] = useState();

  const [endchat, setendchat]=useState()

  const [phone, setphone]=useState(4)

  const [email, setemail]=useState()



  return (
    <StepsContext.Provider
      value={{
        steps: [steps, setsteps],
        name: [name, setname],
        items: [items, setitems],
        lasttrigger: [lasttrigger, setlasttrigger],
        disableinput: [disableinput, setdisableinput],
        interest: [interests, setinterests],
        messagesEndRef: messagesEndRef,
        screen: [screen, setscreen],
        endchat: [endchat, setendchat],
        userresponse: [userresponse, setuserresponse],
        phone: [phone, setphone],
        email: [email, setemail],




      }}
    >
      {children}
    </StepsContext.Provider>
  );
};
