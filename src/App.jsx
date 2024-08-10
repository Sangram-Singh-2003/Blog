import React from 'react'
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homes from './components/home/Homes'
import Register from './components/Registration/Register';
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/homes" element={<Homes />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
