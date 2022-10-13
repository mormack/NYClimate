import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };
  return (
    <div className='weather'>
      <div>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter City Name'
          type='text'
        />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <h2>{data.name}</h2>
            {data.main ? <h3>{data.sys.country}</h3> : null}
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
          <div className='detail'>
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
          <div className='hiLo'>
            {data.main ? (
              <p>
                L:{data.main.temp_min.toFixed()}° H:
                {data.main.temp_max.toFixed()}°
              </p>
            ) : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className='bottom'>
            <div className='feels'>
              {data.main ? (
                <p className='bold'>{data.main.feels_like.toFixed()}°F</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className='humidity'>
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className='pressure'>
              {data.main ? (
                <p className='bold'>{data.main.pressure}inHg</p>
              ) : null}
              <p>Pressure</p>
            </div>
          </div>
        )}
        {data.name !== undefined && (
          <div className='bottom'>
            <div className='visibility'>
              {data.visibility ? (
                <p className='bold'>{data.visibility}m</p>
              ) : null}
              <p>Visibility</p>
            </div>
            <div className='wind'>
              {data.wind ? (
                <p className='bold'>{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
