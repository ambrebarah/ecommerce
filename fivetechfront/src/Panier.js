import '../src/css/Panier.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';



const Panier = () => {

    library.add(faBasketShopping);

    return (
        <div>
            <Header />
            <img className='band' src="/bandeau.jpg" alt="bandeau" />
            <div className="panierText">
                <p>
                    <strong>En vous connectant à votre compte 5Tech,</strong> vous pourrez mémoriser directement les articles qui vous auront plu. <br />
                    Et oui, en navigant connecté sur le site, rien ne se perd
                    (rien ne se transforme non plus remarquez)<strong> et vous retrouverez le fil facilement lors
                    d’une prochaine connexion, où que vous soyez.
                    </strong>
                </p>
                <Link to='/Auth/' id="select"><button className='panCon'>Me connecter</button></Link>
            </div>
            <Footer />
        </div>
    );
}


export default Panier;