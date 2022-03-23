import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({product,addToCart}) => {
    const{img,price,name,ratings} =product;
    return (
        <Col>
        <Card className='position-relative'>
            <Card.Img className='p-2' width={100} height={400} variant="top" src={img} />
            <Card.Body>
            <Card.Title className='text-left'>{name.slice(0,10)}</Card.Title>
            <Card.Text>Price: ${price}</Card.Text>
            <Card.Text className='mb-4'>Ratings: {ratings}
            </Card.Text>
            </Card.Body>
            <Button className='cart-btn' onClick={()=>addToCart(product)}>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Button>
        </Card>
        </Col>
    );
};

export default Product;