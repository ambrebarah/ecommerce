// import React, { useState, useEffect, useRef } from 'react';
import '../src/css/Auth.css';
import Auth from './Auth';
import { Navigate } from 'react-router-dom';



const SignUp = ({setHideResults, setCreatedAccount}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            name: e.target.name.value,
            firstname: e.target.firstname.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
            city: e.target.city.value,
            country: e.target.country.value,
            zipcode: e.target.zipcode.value,
            email: e.target.email.value,
            password: e.target.password.value
        };
        fetch("http://localhost:3000/api/auth/user/signup", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(body)
        })
        .then(async (response) => {
            setCreatedAccount(true);
            setHideResults();
            return await response.json();
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => console.log(error));
    };
    // library.add(faMagnifyingGlass, faBars, faLocationDot, faUser, faBasketShopping);
    // const [showResults, setShowResults] = React.useState(false)
    // const clickShow = () => setShowResults(true)

    // const [hideResults, setHideResults] = React.useState(false)
    // const clickHide = () => setHideResults(false)


    const handleScrollDown = () => {
        window.scroll({
          top: document.body.offsetHeight,
          down: 2,
          behavior: 'smooth',
        });
      }
    
      const handleScrollUp = () => {
        window.scroll({
          top: document.body.offsetHeight,
          top: 2,
          behavior: 'smooth',
        });
      }

    return (
        <div>
            <div className="upCont">
                <div className="upWrap">
                    <div className="upside">
                        <div className="h1Cont">
                            <h1>CREEZ VOTRE COMPTE</h1>
                        </div>
                        <h2>VOS IDENTIFIANTS :</h2>
                        <form id='signUp' name='signUp' onSubmit={(e) => handleSubmit(e)}>
                            <input name='email' type="email" placeholder='Email...' />
                            <input name='password' type="password" placeholder='Mot de passe...' />
                            {/* <select name="gender">
                                <option value="male">M.</option>
                                <option value="female">Mme.</option>
                            </select> */}
                            <input name='firstname' type="text" placeholder='Prenom' />
                            <input name='name' type="text" placeholder='Nom...' />
                            <input name='phone' type="tel" placeholder='Téléphone...' />
                            <input name='country' type="text" placeholder='Pays...' />
                            <input name='city' type="text" placeholder='Ville...' />
                            {/* <input type="date" /> */}
                            <input name='address' type="text" placeholder='Adresse...' />
                            <input name='zipcode' type="number" placeholder='Code Postal...' />
                            <button type='submit' className='create'>CREATION DU COMPTE</button>
                        </form>
                        <h2>DEJA CLIENT ?</h2>
                        <button type="submit" onClick={handleScrollDown} >CREEZ UN COMPTE</button>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default SignUp;