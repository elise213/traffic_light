import React, {useState} from "react";

const Home = () => {

	const [color, setColor] = useState("red");

  return (
    <div className="container">
      <div>
        <div className="trafficTop"></div>
        <div className="trafficLight">
          <div className={"light red" + (color === "red" ? " glow": "")} onClick={() => {setColor("red")}}></div>
          <div className={"light yellow" + (color === "yellow" ? " glow": "")} onClick={() => {setColor("yellow")}}></div>
          <div className={"light green" + (color === "green" ? " glow": "")} onClick={() => {setColor("green")}}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
