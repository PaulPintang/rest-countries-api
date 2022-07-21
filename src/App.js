import React from "react";
import { Routes, Route } from "react-router-dom";

import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Countries />} />
        <Route path="country/:country" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
