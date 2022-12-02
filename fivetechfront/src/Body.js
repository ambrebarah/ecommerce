import "../src/css/Body.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa3,
  faBars,
  faBasketShopping,
  faBox,
  faHome,
  faLocationDot,
  faLock,
  faMagnifyingGlass,
  faTimes,
  faTruck,
  faUnlockKeyhole,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Slide } from "react-slideshow-image";
import { Link } from "react-router-dom";

const Body = () => {
  const slideImages = [
    {
      url: "slide1.jpg",
    },
    {
      url: "slide2.jpg",
    },
    {
      url: "slide3.png",
    },
  ];

  library.add(
    faMagnifyingGlass,
    faBars,
    faLocationDot,
    faUser,
    faBasketShopping,
    faLock,
    faBox,
    faTruck
  );

  return (
    <div>
      <div className="bodyContainer">
        <div className="slideCont">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div className="each-slide" key={index}>
                <div
                  style={{ backgroundImage: `url(${slideImage.url})` }}
                ></div>
              </div>
            ))}
          </Slide>
        </div>
        <div className="infoBlock">
          <div className="info">
            <FontAwesomeIcon className="infoIcon" icon="fa-lock" />
            <h3>PAIEMENT SÉCURISÉ</h3>
          </div>
          <div className="info">
            <FontAwesomeIcon className="infoIcon" icon="fa-box" />
            <h3>DÉBIT À L'EXPÉDITION </h3>
          </div>
          <div className="info">
            <h3 className="infoIcon">3x</h3>
            <h3>PAIEMENT EN 3 FOIS</h3>
          </div>
          <div className="info">
            <FontAwesomeIcon className="infoIcon" icon="fa-truck" />
            <h3>LIVRAISON EXPRESS</h3>
          </div>
        </div>
        <h1>CATÉGORIES POPULAIRES :</h1>
        <div className="productNav">
          <div className="card card1">
            <Link to="/Result/62ebb05fd66dd376e9ec962e">
              <img src="graphiccard.png" alt="" />
            </Link>
            <h4>CARTE GRAPHIQUE</h4>
          </div>
          <div className="card card2">
            <Link to="/Result/62ebb091d66dd376e9ec962f">
              <img src="ssd.png" alt="" />
            </Link>
            <h4>SSD</h4>
          </div>
          <div className="card card3">
            <Link to="/Result/62ebb0a6d66dd376e9ec9630">
              <img src="motherboard.png" alt="" />
            </Link>
            <h4>CARTE MERE</h4>
          </div>
          <div className="card card4">
            <Link to="/Result/62ebb0b9d66dd376e9ec9631">
              <img src="clavier.png" alt="" />
            </Link>
            <h4>CLAVIERS</h4>
          </div>
          <div className="card card5">
            <Link to="/Result/62ebb0d0d66dd376e9ec9632">
              <img src="ram.png" alt="" />
            </Link>
            <h4>MEMOIRE VIVRE</h4>
          </div>
          <div className="card card6">
            <Link to="/Result/62ebb0e3d66dd376e9ec9633">
              <img src="harddrive.png" alt="" />
            </Link>
            <h4>DISQUE DUR</h4>
          </div>
          <div className="card card7">
            <Link to="/Result/62ebb0f3d66dd376e9ec9634">
              <img src="mouse.png" alt="" />
            </Link>
            <h4>SOURIS</h4>
          </div>
          <div className="card card8">
            <Link to="/Result/62ebb0fdd66dd376e9ec9635">
              <img src="screen.png" alt="" />
            </Link>
            <h4>MONITEUR LCD</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
