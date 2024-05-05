import React from 'react';
import NavBar from './Componets/Navbar/NavBar';
import Footer from './Componets/Footer';
import ItemListContainer from './Componets/ItemListContainer';
import './App.css'; 
import ItemDetailContainer from './Componets/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Componets/CartContext';
import firebase from 'firebase/compat/app';
import CartItem from './Componets/CartItem/CartItem';
import Cart from './Componets/Cart';


function App() {
  
  return (
    <>
    <BrowserRouter>
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart/>}/>
        
      </Routes>
      </CartProvider>
    </BrowserRouter>
    <Footer/>
    </>
  );
}

export default App;

/*
import { useState } from 'react'
import NavBar from './Componets/Navbar/NavBar'
import './App.css'
import './Componets/ItemListContainer.jsx'
import ItemListContainer from './Componets/ItemListContainer.jsx';
import ItemDetailContainer from './Componets/ItemDetailContainer.jsx';
import { NavLink } from 'react-router-dom';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  
  return (
    <>
      <BrowserRouter>
       <NavBar />
        <Routes>
          <Route path='./' element={<ItemListContainer/>}></Route>
          <Route path='./category/:id' element={<ItemListContainer/>}></Route>  
          <Route path='./item/:id' element={<ItemDetailContainer />}></Route>     
        </Routes>
       <ItemListContainer />
       </BrowserRouter>
    </>
  )
}

export default App*/
