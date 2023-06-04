import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/LandingPage.css'
import {Link} from 'react-router-dom'
import View from './View'

export default function LandingPage({cartItems, additem}) {

    const [product, getProduct] = useState([])

    useEffect(() => {

        const apicalling = async () => {
            try {
                let response = await axios.get('https://dummyjson.com/products')
                console.log(response.data);
                getProduct(response.data.products)
            }
            catch (error) {
                console.log(error);
            }
        }

        apicalling();

    }, [])

    return (
        <div id='abc' className='header'>
            {
                product.length !== 0 ? product.map((element) => (
                    <div  className='card'>
                        <img src={element.thumbnail} />
                        <div>
                            <div>{element.title}</div>
                            <div>{element.brand}</div>
                            <button onClick={()=>{
                                const prod = document.getElementById('abc')
                                prod.innerHTML = ''
                        
                                console.log(element.thumbnail)

                            }}>View
                                {/* <Link to='/details'>View</Link> */}
                                </button>
                            <button onClick={()=>{additem(cartItems+1)}}>Add to cart</button>
                        </div>
                    </div>
                )) : <div>No products found</div>

            }
        </div>
    )
}
