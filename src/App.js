import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cocktails from './pages/Cocktails';
import './style/index.scss';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cocktails />}> </Route>
          <Route path="*" element={<Cocktails />}> </Route>
          {/* <Route path="/mybar" element={<Bar />}> </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
