import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Header'
import '../css/View.css'

export default function View({ cartItems, additem, singleproduct }) {
  const [product, getProduct] = useState({})


  useEffect(() => {

    const apicalling = async () => {
      try {
        let response = await axios.get(`https://dummyjson.com/products/${singleproduct}`)
        console.log(response.data);
        getProduct(response.data)

      }
      catch (error) {
        console.log(error);
      }
    }

    apicalling();

  }, [])

  console.log(product)
  return (

    <div>
      <Header cartItems={cartItems} additem={additem} />
      {

        <div className='cards'>
          <img src={product.thumbnail} />
          <div>
            <h2>{product.title}</h2>
            <h5>{product.brand}</h5>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => { additem(cartItems + 1) }}>BUY NOW</button>
          </div>
        </div>


      }</div >
  )
}
