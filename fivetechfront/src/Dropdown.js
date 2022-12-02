import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBars, faBasketShopping, faDesktop, faGamepad, faGear, faHome, faLocationDot, faMagnifyingGlass, faPercent, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from 'react-router-dom';
import '../src/css/Dropdown.css'


const Dropdown = () => {

    library.add(faMagnifyingGlass);

    return (
        <div>
            <div className="dropDown">
                <div className="dropDownInside">
                    <Link to='/Result/62ebb05fd66dd376e9ec962e'>CARTE GRAPHIQUE</Link>
                    <Link to='/Result/62ebb091d66dd376e9ec962f'>SSD</Link>
                    <Link to='/Result/62ebb0d0d66dd376e9ec9632'>MEMOIRE VIVRE</Link>
                    <Link to='/Result/62ebb0e3d66dd376e9ec9633'>DISQUE DUR</Link>
                    <Link to='/Result/62ebb0a6d66dd376e9ec9630'>CARTE MERE</Link>
                    <Link to='/Result/62ebb0b9d66dd376e9ec9631'>CLAVIERS</Link>
                    <Link to='/Result/62ebb0fdd66dd376e9ec9635'>MONITEUR</Link>
                    <Link to='/Result/62ebb0f3d66dd376e9ec9634'>SOURIS</Link>
                </div>

            </div>
        </div>
    );
}


export default Dropdown;