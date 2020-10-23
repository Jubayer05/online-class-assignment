import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const totalCost = cart.reduce((sum, course) => sum + course.price,0);
    return (
        <div className="cart">
            <h2 className="yourCart">Your Cart</h2>
            <h3>Total Enrolled: {cart.length}</h3>
            <h4>Total Cost: ${totalCost}</h4>
            <Button className="button" variant="success" size="lg" block>Check Out</Button>
        </div>
    );
};

export default Cart;