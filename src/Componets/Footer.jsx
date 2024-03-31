import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Información de contacto</h5>
            <p>Mitre: 1123 , Mar del Plata</p>
            <p>Teléfono: (223) 456-7890</p>
            <p>Email: info@etronbike.com</p>
          </Col>
          <Col md={6}>
            <h5>Enlaces útiles</h5>
            <ul className="list-unstyled text-light">
              <li className='text-light'><a href="#">Acerca de nosotros</a></li>
              <li><a href="#">Términos y condiciones</a></li>
              <li><a href="#">Política de privacidad</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3">
        &copy; {new Date().getFullYear()} Mi Sitio Web
      </div>
    </footer>
  );
};

export default Footer;
