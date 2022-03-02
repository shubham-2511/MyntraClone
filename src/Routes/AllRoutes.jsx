import { Routes, Route } from 'react-router-dom';

import React from 'react'
import { Home } from '../HomePageComponents/Home';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/login' element={<Login />} />
      <Route path='/otp' element={<Otp />} />
    </Routes>
  )
}

export default AllRoutes;
