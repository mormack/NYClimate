import React from 'react';

const Nav = () => (
  <nav>
    <ul className='nav'>
      <li className='nav-content'>
        <a href='#' class='ico' />
      </li>
      <li className='nav-content'>
        <a href='/'>NYClimate</a>
        <p>Forecasts for New York's Major Cities</p>
      </li>
      <li className='nav-content'>
        <a href='/'>Home</a>
      </li>
      <li className='nav-content'>
        <a href='/search'>More Cities</a>
      </li>
    </ul>
  </nav>
);

export default Nav;
