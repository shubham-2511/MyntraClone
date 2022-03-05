import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Component2 } from './Component2'
import {Component1} from './Component1'
import Component3 from './Component3'
import Component4 from './Component4'
import { Component5 } from './Component5'
import { Component6 } from './Component6'
import Component7 from './Component7'
import Navbar from './Navbar'

export const Home = () => {

  const dispatch = useDispatch();

  return (
    <div>
        <Navbar />
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />
        <Component6 />
        <Component7 />

    </div>
  )
}
