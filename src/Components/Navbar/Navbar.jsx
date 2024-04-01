import React, { useState,useEffect } from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';

function Navbar() {
   const[Menu,setMenu]=useState("shop")
    // Initialize state with the value from local storage if it exists,
  // otherwise use a default value
 // const [Menu,setMenu] = useState(
 //   localStorage.getItem('Menu') || 'shop'
 // );

  // Update local storage whenever the state changes
 // useEffect(() => {
  //  localStorage.setItem('Menu', Menu);
 // }, [Menu]);

  return (
    <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{Menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link to='/mens' style={{textDecoration:'none'}}>Men</Link>{Menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{textDecoration:'none'}}>Women</Link>{Menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link>{Menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link> 
          <Link to='/cart'><img src={cart_icon} alt="" /></Link>  
            <div className="nav-bar-count">0</div>
        </div>
    </div>
  )
}

export default Navbar