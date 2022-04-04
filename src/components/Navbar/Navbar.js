import React from 'react'
import style from './Navbar.module.css';

import { BsSearch } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";

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
                    <li> <a href="#"> Home </a> </li>      
                    <li> <a href="#"> Shop </a> </li>      
                    <li> <a href="#"> Collection </a> </li>      
                    <li> <a href="#"> About us </a> </li>      
                    <li> <a href="#"> Blog </a> </li>      
                    <li> <a href='#'> Contact us </a> </li>      
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
