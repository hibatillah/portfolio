import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Projects, Bookmarks, Unknown } from './pages';
import { Header } from './components';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/bookmarks' element={<Bookmarks />} />
        <Route path='*' element={<Unknown />} />
      </Routes>
    </Router>
  );
}

export default App;
