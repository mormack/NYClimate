import React from 'react';
import Nav from './nav';
import Footer from './footer';
import styles from '../input.css';

const Arrangement = (props) => (
  <div className='text-justify-center p-10 flex-1'>{props.children}</div>
);

export { Arrangement, Nav, Footer };
