import React, { useEffect } from 'react';
import './css/styles.css';
import { Fragment, useState } from 'react';

const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('mumbai');

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=97c86800efa5014b6c21f54f1d39a484`;
      const response = await fetch(url);
      const resJson = await response.json();
      console.log(resJson);
    };
  });

  return (
    <Fragment>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            onChange={(event) => {}}
          ></input>
        </div>

        <div className="info">
          <h2 className="location">
            <i className="fas fa-street-view"> </i> Pune
          </h2>
          <h1 className="temp"> 5.25 Cel</h1>
          <h3 className="minmax">Min:5.25 cel | Max : 5.25 Cel </h3>
        </div>

        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
    </Fragment>
  );
};

export default TempApp;

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=97c86800efa5014b6c21f54f1d39a484
