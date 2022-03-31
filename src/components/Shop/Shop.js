import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useProducts();
    const [cart,setCart]=useCart(products)

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
                        <Cart cart={cart}>
                            <Link className='bg-primary p-2 rounded-pill text-white fw-bold text-decoration-none ms-4' to='/order'>Review Order</Link>
                        </Cart>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Shop;