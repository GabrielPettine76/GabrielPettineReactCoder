import React from 'react';
import { Button } from 'react-bootstrap';



const BtnPlus = ({ onClick }) => {
  return (
    <Button variant="primary" onClick={onClick}>
      <i class='bx bxs-plus-square'></i>
    </Button>
  );
};

export default BtnPlus;
