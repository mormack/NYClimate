import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Search } from './components';
import Nav from './components/nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/search' element={<Search />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
