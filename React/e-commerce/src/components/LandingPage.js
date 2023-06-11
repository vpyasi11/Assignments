import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/LandingPage.css'
import { Link, useNavigate } from 'react-router-dom'
import View from './View'

export default function LandingPage(props) {
    // console.log(props ,"props");
    const navigate = useNavigate()

    const [product, getProduct] = useState([])
  

    useEffect(() => {

        const apicalling = async () => {
            try {
                let response = await axios.get('https://dummyjson.com/products')
                // console.log(response.data);
                getProduct(response.data.products)
            }
            catch (error) {
                console.log(error);
            }
        }

        apicalling();

    }, [])


    function viewProduct(id) {
        // console.log(getSingleProduct);
        // console.log(id, "this is  id of product clicked");

       props.getSingleProduct(id)
        navigate('/details')
       


    }
    return (
        <div id='abc' className='header'>
            {
                product.length !== 0 ? product.map((element) => (
                    <div className='card'>
                        <img src={element.thumbnail} />
                        <div>
                            <div>{element.title}</div>
                            <div>{element.brand}</div>
                            <button onClick={() => viewProduct(element.id)}>View</button>
                            <button onClick={() => { props.additem(props.cartItems + 1) }}>Add to cart</button>
                        </div>
                    </div>
                )) : <div>No products found</div>

            }
        </div>
    )
}
