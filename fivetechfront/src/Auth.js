import React, { useState } from 'react';
import '../src/css/Auth.css';
import Header from "./Header";
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';



const Auth = ({ setToken, setUserId }) => {

    const [createdAccount, setCreatedAccount] = useState(false);
    const [showResults, setShowResults] = useState(false)
    const clickShow = () => setShowResults(true)
    const clickHide = () => setShowResults(false)
    const navigate = useNavigate();

    // TOKEN MANAGMENT

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            email: e.target.email.value,
            password: e.target.password.value
        };

        fetch('http://localhost:3000/api/auth/user/login', {
            headers: {
                'Content-Type': "application/json"
            },
            method: "POST",
            body: JSON.stringify(body)
        })
        .then(async (response) => {
            // navigate('/Profile/');
            return await response.json();
        })
        .then((response) => {
            console.log(response);
            // sessionStorage.setItem('token', JSON.stringify(response.token));
            localStorage.setItem('token', JSON.stringify(response.token));
            localStorage.setItem('userId', JSON.stringify(response.userId));
            // localStorage.setItem('userId', response.userId);
            setToken(JSON.stringify(response.token));
            setUserId(JSON.stringify(response.userId));
            // console.log()
            navigate('/Profile/');
        })
        .catch((error) => console.log(error));
    };

    return (
        <div>
            <Header />
            <div className="inCont">
                <div className="inWrap">
                    {showResults ? <SignUp setHideResults={clickHide} setCreatedAccount={setCreatedAccount} /> : null}
                    <div className="inside">
                        <div className="h1Cont">
                            <h1>IDENTIFIEZ-VOUS</h1>
                        </div>
                        {createdAccount ? <h2>ACCOUNT CREATED,<br />LOGGIN</h2> : <h2>DEJA CLIENT ?</h2>}
                        <form id='signIn' name='signIn' onSubmit={(e) => handleSubmit(e)}>
                            <input name='email' type="email" placeholder='Votre email...' />
                            <input name='password' type="password" placeholder='Votre mot de passe...' />
                            <a href="#">Vous avez oublie votre mot de passe?</a>
                            <button type='submit' className='conn'>CONNEXION</button>
                        </form>
                        <h2>NOUVEAU CLIENT ?</h2>
                        <button type="submit" onClick={clickShow} >CREEZ UN COMPTE</button>
                    </div>

                </div>
            </div>
        </div>
    );
}


export default Auth;