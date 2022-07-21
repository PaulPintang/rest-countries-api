import React from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  let params = useParams();

  return (
    <div>
      <p>details {params.country}</p>
    </div>
  );
};

export default CountryDetails;
