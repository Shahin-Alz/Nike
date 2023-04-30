import React from 'react';
import { NavLink } from 'react-router-dom';


const Logo = () => {
    return (
        <NavLink to="/" >
                        <div className='logo'>            
        <img src="./nije.jpg" alt="" />        
    </div>
                    </NavLink>
    
    );
};

export default Logo;
