import React from 'react';
import { NavLink } from 'react-router-dom';

// easier to add to nav bar using an arr of objs
const navigateTo = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/cities',
    name: 'Cities',
  },
  {
    path: '/comingsoon',
    name: 'Coming Soon',
  },
];

const Nav = () => (
  <nav className='bg-gray-200 p-1'>
    <ul className='flex space-x-5 justify-end'>
      {navigateTo.map((navProp) => (
        <li>
          <NavLink exact='true' to={navProp.path}>
            {navProp.name}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
