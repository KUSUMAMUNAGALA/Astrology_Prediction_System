import React, { useState } from "react";
import "./Match.css";

function Match() {
  const [sign1, setSign1] = useState("aries");
  const [sign2, setSign2] = useState("aries");
  const [result, setResult] = useState("");

  const handleSign1Change = (event) => {
    setSign1(event.target.value);
  };

  const handleSign2Change = (event) => {
    setSign2(event.target.value);
  };

  const handleGetSignsClick = async () => {
    const url = `https://horoscope-astrology.p.rapidapi.com/affinity?sign1=${sign1}&sign2=${sign2}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fcbaf83650mshece281c10b24667p17699bjsn63021bd3ac43",
        "X-RapidAPI-Host": "horoscope-astrology.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      setResult(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="match-container">
      <div className="match-card">
        <h1>Match Maker</h1>
        <p>Select Compatibility Signs</p>
        <label className="la" htmlFor="sign1">Sign 1</label>
        <select id="sign1" value={sign1} onChange={handleSign1Change}>
          <option value="aries">Aries</option>
          <option value="taurus">Taurus</option>
          <option value="gemini">Gemini</option>
          <option value="cancer">Cancer</option>
          <option value="leo">Leo</option>
          <option value="virgo">Virgo</option>
          <option value="libra">Libra</option>
          <option value="scorpio">Scorpio</option>
          <option value="sagittarius">Sagittarius</option>
          <option value="capricorn">Capricorn</option>
          <option value="aquarius">Aquarius</option>
          <option value="pisces">Pisces</option>
        </select>
        <label className="la"  htmlFor="sign2">Sign 2</label>
        <select id="sign2" value={sign2} onChange={handleSign2Change}>
          <option value="aries">Aries</option>
          <option value="taurus">Taurus</option>
          <option value="gemini">Gemini</option>
          <option value="cancer">Cancer</option>
          <option value="leo">Leo</option>
          <option value="virgo">Virgo</option>
          <option value="libra">Libra</option>
          <option value="scorpio">Scorpio</option>
          <option value="sagittarius">Sagittarius</option>
          <option value="capricorn">Capricorn</option>
          <option value="aquarius">Aquarius</option>
          <option value="pisces">Pisces</option>
        </select>
        <button onClick={handleGetSignsClick}>Get Signs</button>
        {result && <p>{result}</p>}
      </div>
    </div>
  );
}

export default Match;