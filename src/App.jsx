import { useState } from 'react'
import NavBar from './Componets/Navbar/NavBar'
import './App.css'
import './Componets/ItemListContainer/ItemListContainer'
import ItemListContainer from './Componets/ItemListContainer/ItemListContainer'

function App() {
  
  return (
    <>
       <NavBar />
       <ItemListContainer text={"Etron-Bikes"}/>
    </>
  )
}

export default App
