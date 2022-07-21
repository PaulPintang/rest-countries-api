import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(function (res) {
      setCountry(res.data);
    });
  }, []);
  return (
    <CountryContext.Provider value={{ country }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
