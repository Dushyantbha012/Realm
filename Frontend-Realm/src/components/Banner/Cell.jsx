import {React,useState,useEffect} from "react";


function Cell({number}) {
  const [opacity,setOpacity]=useState((0.7*Math.random())/Number(number));
  
  useEffect(() => {
    setInterval(() => {
      setOpacity((0.7 * Math.random())/Number(number));
    }, 1500);

    // Clear the interval when the component unmounts
    return
  }, []);
  return (
    <div
      style={{
        backgroundColor: "rgb(0,117,255)",
        height: "15px",
        width: "15px",
        margin: "1px",
        borderRadius: "4px",
        transitionBehavior: "normal",
        transitionDuration: "1.5s",
        transitionProperty: "all",
        transitionTimingFunction: "ease-in",
        opacity:`${opacity}`
      }}
    ></div>
  );
}

export default Cell;
