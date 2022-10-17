import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

function Islip() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '895284fb2d2c50a520ea537456963d9c',
    lat: '40.7298',
    lon: '-73.2104',
    lang: 'en',
    unit: 'metric',
  });

  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang='en'
      locationLabel='Islip'
      unitsLabels={{ temperature: '°C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
}

export default Islip;
