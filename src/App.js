import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Search, ComingSoon } from './components';
import Nav from './components/nav';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/comingsoon' element={<ComingSoon />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
