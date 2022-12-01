import React, { useEffect } from 'react';
import './css/styles.css';
import { Fragment, useState } from 'react';

const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('kathmandu');

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=97c86800efa5014b6c21f54f1d39a484`;
      const response = await fetch(url);
      const resJson = await response.json();

      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <Fragment>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
        </div>
        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                <i className="fas fa-street-view"> </i> {search}
              </h2>
              <h1 className="temp">{city.temp.toFixed(0)}° Cel </h1>
              <h3 className="minmax">
                Min: {city.temp_min}° Cel | Max:{city.temp_max}° Cel
              </h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default TempApp;

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=97c86800efa5014b6c21f54f1d39a484
