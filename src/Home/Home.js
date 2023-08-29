import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Footer from "../Home/Components/Footer/Footer";
import Logo from './Components/Logo/Logo'
import Cart from './Components/Cart/Cart'
import BurgerMenu from './Components/Burger/Menu'
import SlideShow from './Components/Side-show-head/SideShow'
import SeasonList from './Components/Products-Main/SeasonList';
import ContactForm from './Components/Contact/ContactForm'
import BestSellerList from './Components/Bestsellers/BestSellerList';

function Home({ items, infos }) {

  return (
    <Container >

      <Row style={{ display: 'flex', alignItems: 'center', }} >
        <Col xs="6">
          <Logo />
        </Col>
        <Col xs='6' className='d-flex mt-5' style={{ display: 'flex', justifyContent: 'flex-end',  }}>
          <Cart />
          <BurgerMenu />
        </Col>
      </Row>
      <Row style={{ zIndex: 0 }}>
        <SlideShow className="slider" />
      </Row>

      <Row style={{ marginTop: '5rem' }}>
        <SeasonList infos={infos}/>
      </Row>
      <Row style={{ marginTop: '5rem', backgroundColor: '#E0E0E0' }}>
        <Col xs={{ span: 6, offset: 3 }} className="d-flex justify-content-center">
          <ContactForm className="contactForm" />
        </Col>
      </Row>
      <Row style={{ marginTop: '5rem', }}>

        <BestSellerList items={items} />

      </Row>
      <Row>
        <Footer></Footer>
      </Row>
    </Container>
  )
}
export default Home;
