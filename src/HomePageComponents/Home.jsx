import React from 'react'
import { Component2 } from './Component2'
import Component3 from './Component3'
import Component4 from './Component4'
import { Component5 } from './Component5'
import { Component6 } from './Component6'
import Component7 from './Component7'
import { Heading } from './Heading'
import Navbar from './Navbar'

export const Home = () => {
  return (
    <div>
        <Navbar />
        {/* <Heading title="EXPLORE TOP BRANDS" /> */}
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />
        <Component6 />
        <Component7 />
    </div>
  )
}
