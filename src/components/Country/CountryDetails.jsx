import React, { useContext } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
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
    <div className="w-[950px] mx-auto px-[27px]">
      <div className="py-[60px]">
        <Link to="/">
          <button className="shadow-[0px_1px_5px_1px_#5552524c] bg-white px-6 py-[4px]  text-[12px] rounded-md">
            <div className="flex items-center gap-1">
              <div className="p-0">
                <IoIosArrowRoundBack size={19} />
              </div>
              <span>Back</span>
            </div>
          </button>
        </Link>
      </div>

      {filtered.map((country) => (
        <div className="flex h-full items-center justify-between">
          <div className="w-2/4">
            <div className="bg-red-800 w-[370px] h-[270px] ">
              <img src={country.flags.png} className="w-full h-full" alt="" />
            </div>
          </div>

          <div className="w-2/4 flex flex-col justify-around h-[270px] text-[12px]">
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
