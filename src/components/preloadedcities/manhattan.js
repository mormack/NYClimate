import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

function Manhattan() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '895284fb2d2c50a520ea537456963d9c',
    lat: '42.8865',
    lon: '-78.8784',
    lang: 'en',
    unit: 'metric',
  });

  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang='en'
      locationLabel='Manhattan'
      unitsLabels={{ temperature: '°C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
}

export default Manhattan;
