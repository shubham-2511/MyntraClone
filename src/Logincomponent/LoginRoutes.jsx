import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Login } from './Login'
import { Otp } from './Otp'

export const LoginRoutes = () => {
    return (
        <div>
            <Routes>

                <Route path='/' element={<Login />}></Route>
                <Route path='/otp' element={<Otp />}></Route>
            </Routes>
        </div>
    )
}
