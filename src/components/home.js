import React from 'react';
import Manhattan from './preloadedcities/manhattan';
import Yonkers from './preloadedcities/yonkers';
import Buffalo from './preloadedcities/buffalo';
import Hempstead from './preloadedcities/hempstead';
import Islip from './preloadedcities/islip';

// Temp fixed func to display 5 cities
// can use BE to pull historic data for prepoulated portion
// or create separate files for each location/api call
function Home() {
  return (
    <div className='mainContainer'>
      <div className='topContainer'>
        <Manhattan />
      </div>
      <div className='bottomContainer'>
        <div>
          <Buffalo />
        </div>
        <div>
          <Yonkers />
        </div>
        <div>
          <Hempstead />
        </div>
        <div>
          <Islip />
        </div>
      </div>
    </div>
  );
}

export default Home;
