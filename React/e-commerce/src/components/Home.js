import React, {useState} from 'react'
import Header from './Header'
import LandingPage from './LandingPage'

export default function Home() {

  const [cartItems, additem] = useState(0)
  return (
    <>
        <Header cartItems={cartItems} additem={additem}/>
        <LandingPage cartItems={cartItems} additem={additem}/>
    </>
    
  )
}
