import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import fakeData from '../../data/MOCK_DATA.json';
import './Layout.css';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
const Layout = () => {
    const [cart, setCart] = useState([]);
    const handleAddCourse = (data) => {
        const newCart = [...cart, data];
        setCart(newCart);
    }
    return (
        <div>
            
            <Container>
                <Row>
                <Col sm={7} className="layout-left">
                {
                fakeData.map(product => <Course product={product} key={product.id} handleAddCourse={handleAddCourse}></Course>)
                }
                </Col>
                <Col sm={4} className="layout-right">
                <Cart cart={cart}></Cart>
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Layout;