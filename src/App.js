import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Cities } from './components';
import Nav from './components/nav';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className='flex flex-col h-screen'>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cities' element={<Cities />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
