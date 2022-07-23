import React, { useContext } from "react";

import CountryContext from "./CountryContext";

import { useParams, Link } from "react-router-dom";

const CountryDetails = () => {
  const { country } = useContext(CountryContext);

  let { countryName } = useParams();
  const filtered = country.filter(
    (country) => country.name.common === countryName
  );
  console.log(countryName);

  return (
    <div className="w-[950px] mx-auto px-[27px] h-[70vh]">
      <Link to="/">
        <button>Back</button>
      </Link>
      {filtered.map((country) => (
        <div className="flex h-full items-center justify-between">
          <div className="w-2/4">
            <div className="w-[370px] h-[270px] ">
              <img src={country.flags.png} className="w-full h-full" alt="" />
            </div>
          </div>

          <div className="w-2/4 flex flex-col justify-around h-[270px]  text-[12px]">
            <div>
              <h1 className="text-2xl font-bold pb-5">{country.name.common}</h1>
              <div className="flex justify-between">
                <div className="space-y-1">
                  <div className="flex gap-1">
                    <p className="font-semibold">Native Name:</p>
                    <p className="text-gray-600">{country.name.official}</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold">Population:</p>
                    <p className="text-gray-600">{country.population}</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold">Region:</p>
                    <p className="text-gray-600 truncate">{country.region}</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold">Sub Region:</p>
                    <p className="text-gray-600 truncate">
                      {country.subregion}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold">Capital:</p>
                    <p className="text-gray-600 truncate">{country.capital}</p>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex gap-1">
                    <p className="font-semibold">Top Level Domain:</p>
                    <p className="text-gray-600">{country.tld[0]}</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold">Currencies:</p>
                    <p className="text-gray-600">{country.population}</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold">Languages:</p>
                    <p className="text-gray-600 truncate">
                      {country.languages.khm}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-1">
                <p className="font-semibold">Border Countries:</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryDetails;
