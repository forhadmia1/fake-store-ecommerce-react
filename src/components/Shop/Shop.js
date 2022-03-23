import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { addToDb, getCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]= useState([])
    useEffect(()=>{
        fetch('products.json')
            .then(res=> res.json())
            .then(data =>setProducts(data))
    },[])
    useEffect(()=>{
        const allSavedItem =[]
        const savedCart= getCart()
        for(const id in savedCart){
            const item = products.find(product=> product.id === id);
            if(item){
                item.quantity= savedCart[id];
                allSavedItem.push(item)
            }
        }
        setCart(allSavedItem)
    },[products])

    const [cart,setCart]=useState([])
    const addToCart=(product)=>{
        const exist = cart.find(pd=> pd.id=== product.id);
        if(exist){
            exist.quantity +=1;
            const rest = cart.filter(pd=> pd.id !== product.id);
            setCart([...rest,exist])
        }else{
            product.quantity= 1;
            setCart([...cart,product]);
        }
        addToDb(product.id)
    }
    
    return (
        <section>
            <Container fluid>
                <Row>
                    <Col md={10}>
                    <Row xs={1} md={3} className="g-4 mt-5 pt-5 mx-3">
                    {
                        products.map(product=><Product product={product} key={product.id} addToCart={addToCart}></Product>)
                    }
                    </Row>
                    </Col>
                    <Col md={2} className='p-0'>
                        <Cart cart={cart}></Cart>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Shop;