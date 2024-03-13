import React from 'react';
import CartWidget from '../CartWidget/CartWidget';



const NavBar = () => {
  return (
    <header className='ComtenedorCont'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Etron-Bike</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Mountain Bike</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">E-bike</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Plegables</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Paseo</a>
                    </li>
                    </ul>
                    <CartWidget/>    
                </div>
  </nav>
    </header> 
  );
};

export default NavBar