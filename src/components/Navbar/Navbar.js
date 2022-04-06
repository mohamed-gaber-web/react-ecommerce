import React from 'react'
import style from './Navbar.module.css';

import { BsSearch } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";

import { Link } from 'react-router-dom';

import Topnav from '../Topnav/Topnav';

 const Navbar = () => {
     return (
      <>
        <Topnav />
      
        <div className={style.navbar}>
            <div class="row">
            <div className='col-md-3'>
                <h1> LOGO </h1>
            </div>  
            
            <div className='col-md-6'>
                <ul className={ style.navbar_links }>
                    <li> <Link to="/"> Home </Link> </li>      
                    <li> <Link to="/shop"> Shop </Link> </li>      
                    <li> <Link to="#"> Collection </Link> </li>      
                    <li> <Link to="#"> About us </Link> </li>      
                    <li> <Link to="#"> Blog </Link> </li>      
                    <li> <Link to='#'> Contact us </Link> </li>      
                </ul>
            </div>
                
            <div className='col-md-3'>
                <ul className={ style.navbar_cart }>
                    <li> <BsSearch />  </li>
                    <li> <BsPerson />  </li>
                    <li> <BsCart /> <span> 0 </span>  </li>
                    <li> <BsHeart /> <span> 0 </span>  </li>
                </ul>
            </div>
            </div>
        </div>
      </>
     
  )
 }

export default Navbar;
