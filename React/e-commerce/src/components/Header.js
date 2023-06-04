import React from 'react'
import '../css/Header.css'

export default function Header({cartItems, additem}) {

    return (
        <div className='navbar'>
            <div className='logo'>
                <img src='https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x300' />
                <h1>Chor Bazar</h1>
            </div>
            <div className='right'>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
            </form>
            <button>Login</button>
            <button>Cart ({cartItems})</button>
            </div>
            
        </div>
    )
}
