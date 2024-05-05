import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Itemlist } from "./Itemlist";
import data from "../data/products.json";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDoc,
  doc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
  limit,
  addDoc,
} from "firebase/firestore";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const{id} =useParams();
  let refCollection;
  useEffect(() => {
    const db = getFirestore();
    if(!id){
      refCollection = collection(db, "items");
    }else{
      refCollection=query(collection(db,"items"),
      where("category","==",id));
      
    }
    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) console.log("no results");
      else
        setItems(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
    });
  }, [id]);

  return (
    <Container className="contenedor">
      <Itemlist items={items} />
    </Container>
  );
};

export default ItemListContainer;

/*
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Itemlist } from "./Itemlist";
import data from "../data/products.json";

const ItemListContainer = ({ id }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then((data) => {
      console.log(id);
      if (typeof id === 'undefined') { // Verificar si id no está definido
        setItems(data);
        console.log(data);
      } else {
        console.log(id);
        const filtrar = data.filter((i) => i.category === id);
        setItems(filtrar);
      }
    });
  }, [id]);

  return (
    <Container>
      <Itemlist items={items} />
    </Container>
  );
};

export default ItemListContainer;


/*import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Itemlist } from "./Itemlist";
import data from "../data/products.json";

const ItemListContainer = ({id}) => { // Agregamos 'id' como una prop
  const [items, setItems] = useState([]);
  
  

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then((data) => {
      console.log(id)
      if (!id) {
        setItems(data);
      } else {
        console.log(id);
        const filtrar = data.filter((i) => i.category === id);
        setItems(filtrar); // Asignar el resultado del filtro a 'items'
      }
    });
  }, [id]);

  return (
    <Container>
      <Itemlist items={items} />
    </Container>
  );
};

export default ItemListContainer;

/*import React from "react";
import  Container  from "react-bootstrap/Container";
import { useEffect,useState } from "react";
import { Itemlist } from "./Itemlist";



import data from "../data/products.json";
console.log(data);
const ItemListContainer = ({ }) => {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    const get = new Promise((resolve,reject)=>{
      setTimeout(()=>resolve(data),2000);
    })
    get.then((data)=>{
      if(!id){
        setItems(data);
      }
      else{
        const filtrar = data.filter((i) =>i.category===id);
      }
      
    })
  },[id])
  return (
    <Container>
    
      
        
        <Itemlist items={items}/>
      
      
    
    </Container>
  );
};

export default ItemListContainer;
*/