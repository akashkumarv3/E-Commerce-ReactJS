import React, { useState } from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

function Navbar() {
    const[Menu,setMenu]=useState("shop")
  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}>Shop {Menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}>Men{Menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}>Women{Menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}>Kids{Menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
            <div className="nav-bar-count">0</div>
        </div>
    </div>
  )
}

export default Navbar