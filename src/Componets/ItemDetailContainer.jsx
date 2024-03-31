import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import data from "../data/products.json";
import { ItemDetail } from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    get.then((data) => {
      console.log(id);  
      const filtro = data.find((i) => i.id == id);
      console.log(filtro);
      setItem(filtro);
    });
  }, [id]);

  return (
    <Container>
      {item === null ? (
        <div className="contenedor">Cargando....</div>
      ) : (
        <ItemDetail {...item} />
      )}
    </Container>
  );
};

export default ItemDetailContainer;
