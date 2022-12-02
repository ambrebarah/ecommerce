import '../src/css/Header.css'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBars, faBasketShopping, faDesktop, faGamepad, faGear, faHome, faLocationDot, faMagnifyingGlass, faPercent, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';



const Header = ({ token }) => {

    const [isShown, setIsShown] = useState(true);
    const [keyword, setKeyword] = useState("all");

    const handleShow = () => {
        setIsShown(current => !current);
    };


    library.add(faMagnifyingGlass, faBars, faLocationDot, faUser, faBasketShopping, faGamepad, faGear, faDesktop, faPercent, faAngleDown);

    return (
        <div>
            <div className="headContainer">
                <div className="leftCont">
                    <Link to='/'><img src="/tech.png" alt="tech" /></Link>
                    {/* <FontAwesomeIcon className='dropMenu' icon="fa-bars" /> */}
                </div>

                <div className="searchHeader">
                    <input name='keyword' className='headSearch' type="search" placeholder='Rechercher un produit ...' onChange={(e) => setKeyword(e.target.value)} />
                    <Link to={"/Result/"+keyword} id='result'><FontAwesomeIcon className='loupe' icon="fa-magnifying-glass" /></Link>
                </div>
                <div className="rightContent">
                    <FontAwesomeIcon className='headIcon' icon="fa-location-dot" />
                    <Link to={token !== null ? '/Profile/' : '/Auth/'} id="select"><FontAwesomeIcon className='headIcon' icon="fa-user" /></Link>
                    <Link to='/Panier/' id="select"><FontAwesomeIcon className='headIcon' icon="fa-basket-shopping" /></Link>
                </div>
            </div>
            <div className="borderMenu">
                <div className="subMenu">
                    <div className="allProducts sub-nav" onClick={handleShow}>
                        <h4>TOUS NOS PRODUITS</h4>
                        <FontAwesomeIcon className='menuIcon icon-left' icon="fa-angle-down" />
                    </div>
                    <div className="gamer sub-nav">
                        <FontAwesomeIcon className='menuIcon' icon="fa-gamepad" />
                        <h4>UNIVERS GAMER</h4>
                    </div>
                    <div className="config sub-nav">
                        <FontAwesomeIcon className='menuIcon' icon="fa-gear" />
                        <h4>CONFIGURATEUR</h4>
                    </div>
                    <div className="pcBureau sub-nav">
                        <FontAwesomeIcon className='menuIcon' icon="fa-desktop" />
                        <h4>PC DE BUREAU ASSEMBLES</h4>
                    </div>
                    <div className="promos sub-nav">
                        <FontAwesomeIcon className='menuIcon' icon="fa-percent" />
                        <h4>BON PLAN & PROMOS</h4>
                    </div>
                </div>
            </div>
            {!isShown && (
                <Dropdown />
            )}
        </div>
    );
}


export default Header;