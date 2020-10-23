import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    const product = props.product;
    const handleAddCourse = props.handleAddCourse;
    return (
        <div className="product">
            <img src={product.photo} alt="" className="product-photo"/>
            <h3 className="product-title">{product.name}</h3>
            <div className="product-container">
            <p className="product-author">by, {product.instructor}</p>
            <h4>${product.price}</h4>
            </div>
            <Button onClick={() => handleAddCourse(product)} variant="primary">Enroll Now</Button>{' '}
        </div>
    );
};

export default Course;