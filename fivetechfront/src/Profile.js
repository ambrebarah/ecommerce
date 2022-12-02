import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faIdCardClip,
  faWallet,
  faCircleInfo,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
import "../src/css/Profile.css";
import Header from "./Header";

const Profile = ({ token, userId, setToken, setUserId }) => {
  const navigate = useNavigate();
  const [userInfos, setUserInfos] = useState(false);
  let uid;
  let parsedToken;
  library.add(
    faBasketShopping,
    faIdCardClip,
    faWallet,
    faCircleInfo,
    faCommentDots
  );

  const infoSetter = (object) => {
    setUserInfos(object);
  };

  useEffect(() => {
    if (userId === 'undefined' || !userId) {
      navigate("/Auth/");
    } else {
      // console.log(userId)
      uid = JSON.parse(userId);
      parsedToken = JSON.parse(token);

      // console.log(userId);
      // console.log(token);
      // console.log(JSON.parse(userId));
      // console.log(JSON.parse(token));
      // return;
      fetch("http://localhost:3000/api/auth/user/" + uid, {
        headers: {
          Authorization: "Bearer " + parsedToken,
          "Content-Type": "application/json",
        },
        method: "GET",
      })
        .then(async (response) => {
          return await response.json();
        })
        .then((response) => {
          // console.log(response);
          infoSetter(response);
          if (response.error === 0) {
            navigate("/Auth/");
          }
        })
        .catch((error) => {
          navigate("/Auth/");
          console.log(error);
        });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setToken(false);
    setUserId(false);
    navigate("/Auth");
  };

  // console.log(userInfos);

  return (
    <>
      <Header />
      <div className="Container">
        <div className="profil">
          <div className="titre">
            <h4>Profil</h4>
          </div>
          <div className="content">
            <div className="name">
              <h5 id="Firstname">{userInfos && userInfos.firstname}</h5>
              <h5 id="Lastname">{userInfos && userInfos.name}</h5>
            </div>
            <button id="Déconnexion" onClick={() => logout()} >Déconnexion</button>
          </div>
          <div className="Informations">

            <div className="infoTitle">
              <h2>Mes Informations :</h2>
              <Link to={'/Modif/'}><img src="../edit.png" alt="" /></Link>
            </div>

            <h3 id="Adress">{userInfos && userInfos.address}</h3>
            <h3 id="Zipcode">{userInfos && userInfos.zipcode}</h3>
            <h3 id="City">{userInfos && userInfos.city}</h3>
            <h3 id="Country">{userInfos && userInfos.country}</h3>
          </div>
        </div>

        <div className="Commandes">
          <div className="titre">
            <h4>Commandes en cours</h4>
          </div>
          <div className="Categories">
            <h3>Article</h3>
            <h3>Prix unitaire</h3>
            <h3>Quantité</h3>
            <h3>Prix total</h3>
          </div>
          <div className="cartes">
            <img id="articleImg" src="../ram.png" alt="" />
            <div className="prixUnit">
              <h3 id="prix">299</h3>
              <img id="euros" src="../euros.png" alt="" />
              <h3 id="centimes">99</h3>
            </div>
            <div className="quantité">
              <h3 id="quantity">1</h3>
            </div>
            <div className="profilTotal">
              <h3 id="totalProfil">299</h3>
            </div>
          </div>


          <div className="carteSousTotal">
            <div className="textSousTotal">
              <div className="sousTotal">
                <h2>Sous - total :</h2>
                <h3 id="sousPrix">299</h3>
              </div>

              <div className="fraisPort">
                <h2>Frais de livraison :</h2>
                <h3 id="frais">Offert</h3>
              </div>
            </div>
          </div>

          <div className="Total">
            <h2>Total de la commande :</h2>
            <h3 id="TotalPrix">299</h3>
          </div>

        </div>



      </div>

    </>
  );


};

export default Profile;
