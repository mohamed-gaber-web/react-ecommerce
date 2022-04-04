import React from 'react';
import style from './Topnav.module.css';


function Topnav() {
    return (
        <div className={ style.topnav }>
            <div className={ style.topnav__left }>
                <ul>
                    <li> English </li>
                    <li> EUR </li>
                    <li> Call Us 0100-000-0000 </li>
                </ul>
            </div>
            
            <div className={ style.topnav__right }>
                <p> Free delivery on order over <span> €200.00 </span> </p>
            </div>
        </div>
    );
}

export default Topnav;