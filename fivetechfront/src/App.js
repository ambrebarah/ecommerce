import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import React from 'react';
import Auth from './Auth';
import Panier from './Panier';
import Profile from './Profile';

function App({ token }) {
  return (
    <div>
      <Header token={token} />
      <Body />
      <Footer />
    

    </div>
  );
}

export default App;
