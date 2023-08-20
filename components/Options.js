import React, { useState } from "react";
import "./Options.css"
import { Link } from 'react-router-dom';

function Option() {
  const [answer, setAnswer] = useState("");

  const handleYesClick = () => {
    setAnswer("ZODIC  INFO");
  };

  const handleNoClick = () => {
    setAnswer("ZODIC MATCHING");
  };

  return (
    <div className="option">
      <h1>Select Your Choice</h1>
      <br/>
      <br/>
      <Link to="/Persona">
      <button onClick={handleYesClick}>ZODAIC  INFO</button></Link>
      <br/>
      <br/>
      
      <Link to="/Match">
      <button onClick={handleNoClick}>ZODAIC MATCHING</button></Link>
      <br/>
      <br/>
      {answer && <p>Your Option is: {answer}</p>}
    </div>
  );
}

export default Option;
