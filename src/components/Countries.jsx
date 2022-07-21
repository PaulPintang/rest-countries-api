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
    <div className="flex justify-between w-full flex-wrap gap-y-[50px]">
      {country.map((country) => (
        <div className="h-[265px] w-[200px] bg-white shadow-md rounded-md">
          <div className="h-[125px]">
            <img
              src={country.flags.png}
              className="h-full w-full rounded-t-md"
              alt=""
            />
          </div>
          <div className="p-5">
            <h2 className="pb-3 font-bold">{country.name.common}</h2>
            <div className="text-[12px]">
              <div className="flex gap-1">
                <p className="font-semibold">Population:</p>
                <p className="text-gray-600">{country.population}</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold">Region:</p>
                <p className="text-gray-600">{country.region}</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold">Capital:</p>
                <p className="text-gray-600 truncate">{country.capital}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countries;
