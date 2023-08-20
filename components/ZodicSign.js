import "./Button.css"
import { useState } from "react";

const ZodicSign = ({onSignSelected}) => {
  const [data, setData] = useState(null);

  const handleSignSelected = async (sign) => {
    const url = `https://horoscope-astrology.p.rapidapi.com/sign?s=${sign}`;
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
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="page">
      <h2>Select Your Zodiac Sign</h2>
      <br/><br/>
      <div className="grid">
      {[
        "aries",
        "taurus",
        "gemini",
        "cancer",
        "leo",
        "virgo",
        "libra",
        "scorpio",
        "sagittarius",
        "capricorn",
        "aquarius",
        "pisces",
      ].map((sign) => (
        <button key={sign} onClick={() => handleSignSelected(sign)}>
          {sign}
        </button>
      ))}</div>
      {data && <div>{data}</div>}
    </div>
  );
};

export default ZodicSign;
