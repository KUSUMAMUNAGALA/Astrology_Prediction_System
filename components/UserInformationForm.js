import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./UserInformationForm.css";

function UserInformationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [timeOfBirth, setTimeOfBirth] = useState("");

  const isFormValid = () => {
    return firstName && lastName && dateOfBirth && gender && timeOfBirth;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      console.log("User information submitted");
      console.log("First Name: ", firstName);
      console.log("Last Name: ", lastName);
      console.log("Date of Birth: ", dateOfBirth);
      console.log("Gender: ", gender);
      console.log("Time of Birth: ", timeOfBirth);
      // allow user to proceed to next step
    } else {
      alert("Please fill out all required fields.");
    }
  };
  
  return (
    <div  className="Persona">
    <form onSubmit={handleSubmit}>
      <label className="lable" htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      /><br/>
      <label className="lable" htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      /><br/>
      <label className="lable" htmlFor="dateOfBirth">Date of Birth:</label>
      <input
        type="date"
        id="dateOfBirth"
        value={dateOfBirth}
        onChange={(event) => setDateOfBirth(event.target.value)}
      /><br/>
      <label className="lable" htmlFor="gender">Gender:</label>
      <select
        id="gender"
        value={gender}
        onChange={(event) => setGender(event.target.value)}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select><br/>
      <label  className="lable" htmlFor="timeOfBirth">Time of Birth:</label>
      <input
        type="time"
        id="timeOfBirth"
        value={timeOfBirth}
        onChange={(event) => setTimeOfBirth(event.target.value)}
      /><br/>
      <Link to="/Zodic">
        <button type="submit" >Next</button>
      </Link>
    </form>
  </div>
  );
}

export default UserInformationForm;
