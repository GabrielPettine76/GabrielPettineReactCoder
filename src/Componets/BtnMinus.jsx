import React from 'react';
import { Button } from 'react-bootstrap';



const BtnMinus = ({ onClick }) => {
    const restar =(cant)=>{
        SetCantidad(cant-1);
}
  return (
    <Button variant="primary" onClick={onClick}>
      <i class='bx bxs-minus-square'></i>
    </Button>
  );
};

export default BtnMinus;
