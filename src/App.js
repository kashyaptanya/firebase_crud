import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginform from './components/Loginform';
import List from './components/list'
import UPDATE from './components/update'

function App  ()  {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Loginform/>} />
        <Route  path="/show" element={<List/>} />
        <Route  path="/update" element={<UPDATE/>} />
      </Routes>
    </BrowserRouter> 
    </>
  )
}
export default App