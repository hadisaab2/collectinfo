import { useContext, useEffect, useState } from "react";

export default function YesNo(props) {

  const [divchange, setdivchange] = useState(false);
  const [clickedstate, setclickedstate] = useState();

  const Yesclick = () => {
    setclickedstate("Yes");
    setdivchange(true);
    props.loopsteps(11)
  };
  const noclick = () => {
    setclickedstate("No");
    setdivchange(true);
    props.loopsteps(18)
  };


  if (!divchange) {

      return (
        <div className="interestsouter">
          <ul className="ul">
            <li className="yesli">
              <button className="yesoption" onClick={Yesclick}>
                Yes
              </button>
            </li>
            <li className="yesli">
              <button className="nooption" onClick={noclick}>
                No
              </button>
            </li>
          </ul>
        </div>
      );
    //}
  } else {
    return (
        <div className="usermessagediv">
        <div className="usermessage">
          {clickedstate}
  
        </div>
      </div>
    );
  }
}
