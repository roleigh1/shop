
import React from 'react';
import './App.css';
import BurgerMenu from './Components/Burger/Menu';
import Logo from './Components/Logo/Logo';
import Cart from './Components/Cart/Cart';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container >
      <Row className="d-flex align-items-center justify-content-between">
        <Col xs="auto"> 
         <Logo />
        </Col>
        <Col xs="auto">
      
        </Col>
        <Col xs="auto" className='d-flex'>
          <Cart />
          <BurgerMenu />
        </Col>

      </Row>
    </Container>
  );
}

export default App;
