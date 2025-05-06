import React, { useEffect, useState } from "react";
import { DolarCard } from "./DolarCard";
import "./Dolar.css";

export const Dolars = () => {
  const [countries, setCountries] = useState([]);
  console.log(countries);

  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((e) => console.log(e));
  }, []);

  console.log(countries);

  return (
    <div>
      <h3>Dolar List</h3>
      <div className="container">
        {countries.length > 0 ? (
          countries.map((country) => (
            <DolarCard key={country.nombre} country={country} />
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
};
