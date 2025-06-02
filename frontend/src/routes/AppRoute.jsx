import React from 'react'
import {Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import SignInSide from '../pages/SignInSide'
import SignUp from '../pages/SignUp'
const AppRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<SignInSide/>}/>
        <Route path='/signup' element={<SignUp/>}/>
    </Routes>
  )
}

export default AppRoute