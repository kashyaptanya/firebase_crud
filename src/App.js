import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginform from './components/Loginform';



function App  ()  {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Loginform/>} />

      </Routes>
    </BrowserRouter> 
    </>
  )
}
export default App