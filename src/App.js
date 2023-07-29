
import React from 'react';
import './App.css';
import BurgerMenu from './Components/Burger/Menu';
import Logo from './Components/Logo/Logo';
import Cart from './Components/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlideShow from './Components/Side-show-head/SideShow';
import SeasonProductCards from './Components/Products-Main/SeasonProductsCards';
import ContactForm from './Components/Contact/ContactForm';

function App() {
  return (
    <Container >
      <Row className="d-flex align-items-center justify-content-between">
        <Col xs="auto">
          <Logo />
        </Col>
        <Col xs="auto" className='d-flex'>
          <Cart />
          <BurgerMenu />
        </Col>
      </Row>
      <Row>
        <SlideShow className="slider" />
      </Row>

      <Row className="Cards" style={{ marginTop: '5rem' , marginLeft: '0.5rem'}}>
        <SeasonProductCards />
      </Row>
      < Row style={{marginTop: '5rem', backgroundColor: '#E0E0E0'} }>
      <Col xs={{ span: 6, offset: 3 }} className="d-flex justify-content-center"> 
        <ContactForm className="contactForm"/>
      </Col>
      </Row>
    </Container>
  );
}

export default App;
