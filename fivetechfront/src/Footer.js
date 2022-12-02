import React from 'react';
import '../src/css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBars, faBasketShopping, faDesktop, faGamepad, faGear, faHome, faLocationDot, faMagnifyingGlass, faPercent, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from 'react-router-dom';

const Footer = () => {

    library.add(faMagnifyingGlass, faBars, faLocationDot, faUser, faBasketShopping, faGamepad, faGear, faDesktop, faPercent, faAngleDown);

    return (

        <div>
            <div className="firstContainer">
                <div className="location">
                    <FontAwesomeIcon id='locationicon' icon="fa-solid fa-location-dot" />
                    <div className="textlocation">
                        <h3 className='country'>EN FRANCE</h3>
                        <h3 className='numberstore'>18 MAGASINS</h3>
                    </div>
                </div>

                <div className='livraison'>
                    <FontAwesomeIcon id='truck' name='iconFooter' icon="fa-truck" />
                    <div className="textlivraison">
                        <h3 className='livraisonrapide'>LIVRAISON RAPIDE</h3>
                        <h3 className='horairelivraison'>24H/48H</h3>
                    </div>
                </div>

                <div className="retrait">
                    <img id='shoplogo' src="/shop.png" alt="" />
                    <div className="textretrait">
                        <h3 className='retraitmag'>RETRAIT EN MAGASIN</h3>
                        <h3 className='free'>GRATUIT</h3>
                    </div>
                </div>

                <div className="securite">
                    <FontAwesomeIcon id='lock' icon="fa-solid fa-lock" />
                    <div className="textsecurite">
                        <h3 className='site'>SITE</h3>
                        <h3 className='securise'>SÉCURISÉ</h3>
                    </div>

                </div>

            </div>

            <div className="secondContainer">
                <div className="reseaux">
                    <h3>REJOIGNEZ-NOUS SUR :</h3>
                    <img src="/facebook.png" alt="" />
                    <img src="/instagram.png" alt="" />
                    <img src="/youtube(1).png" alt="" />
                </div>

            </div>

            <div className="thirdContainer">
                <div className="sections">
                    <div className="categories">
                        <h3>CATÉGORIES</h3>
                        <h5>ÉCRAN DE PC</h5>
                        <h5>SOURIS</h5>
                        <h5>CARTE MÈRE</h5>
                        <h5>BARETTE DE RAM</h5>
                        <h5>CARTE GRAPHIQUE</h5>
                        <h5>DISQUE DUR EXTERNE</h5>
                        <h5>SSD</h5>
                        <h5>PC PORTABLE</h5>
                    </div>
                    <div className="information">
                        <h3>INFORMATION</h3>
                        <h5>CONDITIONS GÉNÉRALES DE VENTES</h5>
                        <h5>PAYER EN 3X SANS FRAIS</h5>
                        <h5>LIVRAISON</h5>
                        <h5>RETRAIT EN MAGASIN</h5>
                        <h5>DESTOCKAGE</h5>
                        <h5>NOS MARQUES</h5>
                        <h5>OFFRE GROUPÉE</h5>
                    </div>
                    <div className="equipe">
                        <h3>5TECH</h3>
                        <h5>QUI SOMMES NOUS ?</h5>
                        <h5>INFOS LÉGALES</h5>
                        <h5>CHARTE DE PROTECTION DES DONNÉES</h5>
                        <h5>PRESSE</h5>
                        <h5>RECRUTEMENT</h5>
                        <h5>ACCÈS REVENDEUR</h5>
                        <h5>BLOG</h5>
                        <h5>F.A.Q</h5>
                    </div>
                    <div className="paiement">
                        <h3>MOYENS DE PAYEMENT</h3>
                        <div className="logopaiement">
                            <img id='credit' src="/cartecredit.png" alt="" />
                            <img id='paypal' src="/Paypal.png" alt="" />
                        </div>
                        <div className="troisfois">
                            <h1>3X</h1>
                            <div className="sansfrais">
                                <h5>SANS FRAIS</h5>
                                <h5>PAR CARTE BANCAIRE</h5>
                            </div>
                        </div>

                        <div className="cheque">
                            <img id='logocheque' src="/cheque.png" alt="" />
                            <div className="textcheque">
                                <h5>RÈGLEMENT PAR</h5>
                                <h5>CHÈQUE ACCEPTÉ</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;