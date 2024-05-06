import React, { useState } from 'react';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import {
    getFirestore,
    doc,
    updateDoc,
    collection,
    addDoc,
  } from "firebase/firestore";

const initialValues = {
  email: "",
  phone: "",
  fullName: ""
};

const CheckOut = () => {
  const [values, setValues] = useState(initialValues);
  const { cart } = useContext(CartContext);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    const order = {
        buyer:values,
        items:cart,
        total:16500,
    };
    e.preventDefault();
    console.log(values);
    console.log(cart);
    console.log(order);
    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su orden: " + id + " ha sido completada!");
      }
    });
  };

  return (
    <div>
      <h2>Finalizar Compra</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" value={values.email} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Nombre completo:</label>
          <input type="text" className="form-control" id="fullName" name="fullName" value={values.fullName} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono:</label>
          <input type="tel" className="form-control" id="phone" name="phone" value={values.phone} onChange={handleInputChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Finalizar Compra</button>
      </form>
      <div>
        <h3>Resumen de la Compra:</h3>
        <ul>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.title} - Cantidad: {item.quantity} - Precio unitario: ${item.price}
            </li>
          ))}
        </ul>
        </ul>
      </div>
    </div>
  );
};

export default CheckOut;

/*import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from './CartContext';
const initialValues={
    email:"",
    phone:"",
    fullName:""
}
const CheckOut = () => {
  const { cart } = useContext(CartContext);

  const [values,setValues] = useState(initialValues);

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    //e.preventDefault();
    console.log(e.target.fullName);
  };

  return (
    <div>
      <h2>Finalizar Compra</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email"value={values.email} onChange={(e) => handleInputChange(e, setEmail)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Nombre completo:</label>
          <input type="text" className="form-control" id="fullName" name="fullName"value={values.fullName} onChange={(e) => handleInputChange(e, setFullName)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono:</label>
          <input type="tel" className="form-control" id="phone" name='phone' value={values.phone} onChange={(e) => handleInputChange(e, setPhone)} required />
        </div>
        <button type="button" className="btn btn-primary">Finalizar Compra</button>
      </form>
      <div>
        <h3>Resumen de la Compra:</h3>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.title} - Cantidad: {item.quantity} - Precio unitario: ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckOut;
*/