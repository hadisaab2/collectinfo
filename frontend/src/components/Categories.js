import { useContext, useState } from "react";
import { StepsContext } from "../Context/StepsContext";
import "../css/main.css";
import Category from "./Category";

export default function Categories(props) {
    /*const interests=[
        { value: "Messaging", label: "Messaging", trigger: "13" },
        { value: "Industry", label: "Industry", trigger: "14" },
        { value: "Monetization", label: "Monetization", trigger: "15" },
        { value: "Gaming", label: "Gaming", trigger: "16" },
      ]
      */
  const { interest } = useContext(StepsContext);
  const [interests, setinterests] = interest;
  const [interestclicked, setinterestclicked] = useState();
  const [divchange, setdivchange]=useState(false)

  
    const interestclick = (categoryname) =>{
        setdivchange(true)
        setinterestclicked(categoryname)
        switch(categoryname) {
            case "Messaging" :
                props.loopsteps("Messaging")
                break;
            case "Gaming" :
                props.loopsteps("Gaming")
                break;
            case "Monetization":
                props.loopsteps("Monetization")
                break;

            case "Industry" :
                props.loopsteps("Industry")
                break;
        }

    setinterests(interests.filter((item) => item.value !== categoryname)); 
    }
    
  if(!divchange){
  return (

    
      <div className="interestsouter">
        <ul className="ul">
          {interests.map((interest) => {
            return (
              <li className="li">
                <Category categoryname={interest.value} categoryclick={interestclick}  />
                {/*
                <button
                  className="option"
                  onClick={interestclick}
                  // disabled={disabledbuttons}
                >
                  {interest.value}
                </button>
            */}
              </li>
            );
          })}
        </ul>
      </div>
      
  );
  }else {
    return(
        <div className="interestusermessagediv">
        <div className="usermessage">
            {interestclicked}
        </div>
      </div>
    )
}

}
