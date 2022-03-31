import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderdItem from '../OrderdItem/OrderdItem';

const Order = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)

    const deleteItem=id=>{
        const rest= cart.filter(item=> item.id !== id);
        setCart(rest); 
        removeFromDb(id)
    }

    return (
        <Row>
            <Col md={10} className='mt-5'>
                {
                    cart.map(item=> <OrderdItem item={item} key={item.id} deleteItem={deleteItem}></OrderdItem>)
                }
            </Col>
            <Col md={2}>
                <Cart cart={cart}></Cart>
            </Col>
        </Row>
    );
};

export default Order;