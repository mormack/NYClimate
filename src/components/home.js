import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

// Temp fixed func to display 5 cities
// can use BE to pull historic data for prepoulated portion
// or create separate files for each location/api call
function Home() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '895284fb2d2c50a520ea537456963d9c',
    lat: '40.7834',
    lon: '-73.9662',
    lang: 'en',
    unit: 'metric',
  });

  return (
    <div className='mainContainer'>
      <div className='topContainer'>
        <ReactWeather
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang='en'
          locationLabel='Manhattan'
          unitsLabels={{ temperature: '°C', windSpeed: 'Km/h' }}
          showForecast
        />
      </div>
      <div className='bottomContainer'>
        <div>
          <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang='en'
            locationLabel='Buffalo'
            unitsLabels={{ temperature: '°C', windSpeed: 'Km/h' }}
          />
        </div>
        <div>
          <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang='en'
            locationLabel='Yonkers'
            unitsLabels={{ temperature: '°C', windSpeed: 'Km/h' }}
          />
        </div>
        <div>
          <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang='en'
            locationLabel='Hempstead'
            unitsLabels={{ temperature: '°C', windSpeed: 'Km/h' }}
          />
        </div>
        <div>
          <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang='en'
            locationLabel='Islip'
            unitsLabels={{ temperature: '°C', windSpeed: 'Km/h' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
