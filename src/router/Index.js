import React from 'react';
import Home from '../container/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}
