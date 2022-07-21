import React, { useState, useEffect } from "react";
import axios from "axios";
const Countries = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(function (res) {
      setCountry(res.data);
    });
  }, []);

  return (
    <div>
      <p>Countries</p>
      {country.map((country) => (
        <p>{country.name.common}</p>
      ))}
    </div>
  );
};

export default Countries;
