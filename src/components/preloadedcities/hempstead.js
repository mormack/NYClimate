import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

function Hempstead() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '895284fb2d2c50a520ea537456963d9c',
    lat: '40.7062',
    lon: '-73.6187',
    lang: 'en',
    unit: 'metric',
  });

  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang='en'
      locationLabel='Hempstead'
      unitsLabels={{ temperature: '°C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
}

export default Hempstead;
