import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowsList from './Shows/ShowsList';
import ShowDetail from './Shows/VenueDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowsList />} />
        <Route path="/:id" element={<ShowDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
