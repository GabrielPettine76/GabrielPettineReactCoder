import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import BtnMinus from './BtnMinus';
import BtnPlus from './BtnPlus';

const Counter = ({stock,onAdd,initial}) => {
  
  // Estado para almacenar el valor del contador
  const [count, setCount] = useState(initial);
  
  // Función para sumar 1 al contador
  const sumar = () => {
    if(count<stock){
    setCount(count + 1);
    }
  };

  // Función para restar 1 al contador
  const restar = () => {
    // Verificar si el contador es mayor que 0 antes de restar
    if (count > 1) {
      setCount(count - 1);
    }
  };
  
  return (
    <Container className="d-flex justify-content-center m-2" >
      
      <Button size="sm" onClick={sumar}><BtnPlus/></Button>
        <h5 className='m-2'>{count}</h5>
      <Button  size="sm" onClick={restar}><BtnMinus/></Button>
    <>  
      <Button variant="primary" className='d-flex justify-content-center'onClick={()=>onAdd(count)}>
             Agregar Al Carrito
      </Button>
      </>
    </Container>
  );
};

export default Counter;
