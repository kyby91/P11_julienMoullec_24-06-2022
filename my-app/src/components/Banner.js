// import React from 'react';
import logo from '../assets/logo.png';

 function Banner(){
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <div className="App-info">
            <p>Accueil</p>
            <p>A propos</p>
            </div>        
        </header>
    );
}

export default Banner;