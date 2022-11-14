import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import './App.scss'

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<MainRoutes />} />
      {/* <Route exact path="/dashboard" element={ <Dashboard /> } /> */}
    </Routes>
  );
};

export default App;
