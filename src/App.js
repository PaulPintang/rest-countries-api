import React from "react";
import { Routes, Route } from "react-router-dom";
import { CountryProvider } from "./components/Country/CountryContext";

import Countries from "./components/Country/Countries";
import CountryDetails from "./components/Country/CountryDetails";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <CountryProvider>
        <Routes>
          <Route index element={<Countries />} />
          <Route path="country/:countryName" element={<CountryDetails />} />
        </Routes>
      </CountryProvider>
    </div>
  );
}

export default App;
