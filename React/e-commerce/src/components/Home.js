import React, {useState} from 'react'
import Header from './Header'
import LandingPage from './LandingPage'

export default function Home({cartItems, additem, getSingleProduct}) {

 
  return (
    <>
        <Header cartItems={cartItems} additem={additem}/>
        <LandingPage cartItems={cartItems} additem={additem} getSingleProduct={getSingleProduct}/>
    </>
    
  )
}
