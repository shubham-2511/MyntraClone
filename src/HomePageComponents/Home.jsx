import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { getItemsToWishlist } from '../Reducers/WishlistReducer/actions'
import { Component2 } from './Component2'
import {Component1} from './Component1'
import Component3 from './Component3'
import Component4 from './Component4'
import { Component5 } from './Component5'
import { Component6 } from './Component6'
import Component7 from './Component7'
import { Heading } from './Heading'
import Navbar from './Navbar'
import PopupComponent from './PopupComponent'

export const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsToWishlist({phone: 6677889900}));
  }, [])

  return (
    <div>
        <Navbar />
        
        <Heading title="EXPLORE TOP BRANDS" />
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
