import React , { useState } from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
  

    const toggleMenu = () => {
        
        setShowMenu(!showMenu);
       
    };

   


    return (
        <div className='navigation'>
            <ul className='listeDes4'>
                <li className='nav-item'  onClick={toggleMenu}>
                    <NavLink to="" className={(nav)=>(nav.isActive? "nav-active": "")}>
                        Femme
                    </NavLink>
                    {showMenu && (
                        <div className='dropdown-menu-horizontal' >
                            <ul className='ulDropdown'>
                                <li className='liDropdown'>
                                    <h4>Vêtements F</h4>
                                    <ul className='ulDropdown2'>
                                        <li><NavLink to="/homme/vetements/t-shirt">T-shirts</NavLink></li>
                                        <li><NavLink to="/homme/vetements/pull">Pulls</NavLink></li>
                                        <li><NavLink to="/homme/vetements/pantalon">Pantalons</NavLink></li>
                                    </ul>
                                </li>
                                <li className='liDropdown'>
                                    <h4>Chaussures F</h4>
                                    <ul className='ulDropdown2'>
                                        <li><NavLink to="/homme/chaussures/sneakers">Toutes les Chaussures</NavLink></li>
                                        <li><NavLink to="/homme/chaussures/sneakers">Sneakers</NavLink></li>
                                        <li><NavLink to="/homme/chaussures/montante">Montantes</NavLink></li>
                                        <li><NavLink to="/homme/chaussures/ville">Chaussures de ville</NavLink></li>
                                    </ul>
                                </li>
                                <li className='liDropdown'>
                                    <h4>Autres F</h4>
                                    <ul className='ulDropdown2'>
                                        <li><NavLink to="/homme/accessoires">Accessoires</NavLink></li>
                                        <li><NavLink to="/homme/autres">Autres</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    )}
                
                </li>
                <li className='nav-item'onClick={toggleMenu}>
                    <NavLink to="" className={(nav)=>(nav.isActive? "nav-active": "")}>
                        Homme
                    </NavLink>
                    {showMenu && (
                        <div className='dropdown-menu-horizontal'>
                            <ul className='ulDropdown'>
                                <li className='liDropdown'>
                                    <h4>Vêtements H</h4>
                                    <ul className='ulDropdown2'>
                                        <li><NavLink to="/homme/vetements/t-shirt">T-shirts</NavLink></li>
                                        <li><NavLink to="/homme/vetements/pull">Pulls</NavLink></li>
                                        <li><NavLink to="/homme/vetements/pantalon">Pantalons</NavLink></li>
                                    </ul>
                                </li>
                                <li className='liDropdown'>
                                    <h4>Chaussures H</h4>
                                    <ul className='ulDropdown2'>
                                    <li><NavLink to="/homme/chaussures/sneakers">Toutes les Chaussures</NavLink></li>
                                        <li><NavLink to="/homme/chaussures/sneakers">Sneakers</NavLink></li>
                                        <li><NavLink to="/homme/chaussures/montante">Montantes</NavLink></li>
                                        <li><NavLink to="/homme/chaussures/ville">Chaussures de ville</NavLink></li>
                                    </ul>
                                </li>
                                <li className='liDropdown'>
                                    <h4>Autres H</h4>
                                    <ul className='ulDropdown2'>
                                        <li><NavLink to="/homme/accessoires">Accessoires</NavLink></li>
                                        <li><NavLink to="/homme/autres">Autres</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    )}
                </li>
                <li className='nav-item' onClick={toggleMenu}>
                    <NavLink to="" className={(nav)=>(nav.isActive? "nav-active": "")}>
                        Enfants
                    </NavLink>
                    {showMenu && (
                        <div className='dropdown-menu-horizontal'>
                            <ul className='ulDropdown'>
                                <li className='liDropdown'>
                                    <h4>Vêtements E</h4>
                                    <ul className='ulDropdown2'>
                                        <li><NavLink to="/homme/vetements/t-shirt">T-shirts</NavLink></li>
                                        <li><NavLink to="/homme/vetements/pull">Pulls</NavLink></li>
                                        <li><NavLink to="/homme/vetements/pantalon">Pantalons</NavLink></li>
                                    </ul>
                                </li>
                                <li className='liDropdown'>
                                    <h4>Chaussures E</h4>
                                    <ul className='ulDropdown2'>
                                    <li><NavLink to="/homme/chaussures/sneakers">Toutes les Chaussures</NavLink></li>
                                        <li><NavLink to="/homme/chaussures/sneakers">Sneakers</NavLink></li>
                                        <li><NavLink to="/homme/chaussures/montante">Montantes</NavLink></li>
                                        <li><NavLink to="/homme/chaussures/ville">Chaussures de ville</NavLink></li>
                                    </ul>
                                </li>
                                <li className='liDropdown'>
                                    <h4>Autres E</h4>
                                    <ul className='ulDropdown2'>
                                        <li><NavLink to="/homme/accessoires">Accessoires</NavLink></li>
                                        <li><NavLink to="/homme/autres">Autres</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    )}
                
                </li>
                <li className='nav-item' onClick={toggleMenu}>
                    <NavLink to="" className={(nav)=>(nav.isActive? "nav-active": "")}>
                        Promos
                    </NavLink>
                    {showMenu && (
                        <div className='dropdown-menu-horizontal'>
                            <ul className='ulDropdown'>
                                <li className='liDropdown'>
                                    <h4>Vêtements</h4>
                                    <ul className='ulDropdown2'>
                                        <li><NavLink to="/homme/vetements/t-shirt">T-shirts</NavLink></li>
                                        <li><NavLink to="/homme/vetements/pull">Pulls</NavLink></li>
                                        <li><NavLink to="/homme/vetements/pantalon">Pantalons</NavLink></li>
                                    </ul>
                                </li>
                                <li className='liDropdown'>
                                    <h4>Chaussures</h4>
                                    <ul className='ulDropdown2'>
                                        <li><NavLink to="/homme/chaussures/sneakers">Toutes les Chaussures</NavLink></li>
                                        <li><NavLink to="/homme/chaussures/sneakers">Sneakers</NavLink></li>
                                        <li><NavLink to="/homme/chaussures/montante">Montantes</NavLink></li>
                                        <li><NavLink to="/homme/chaussures/ville">Chaussures de ville</NavLink></li>
                                    </ul>
                                </li>
                                <li className='liDropdown'>
                                    <h4>Autres</h4>
                                    <ul className='ulDropdown2'>
                                        <li><NavLink to="/homme/accessoires">Accessoires</NavLink></li>
                                        <li><NavLink to="/homme/autres">Autres</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    )}
                </li>
                
            </ul>
        </div>
    );
};

export default NavBar;

