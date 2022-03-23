// use local storage to manage cart data
const addToDb = id =>{
    const shoppinCart = getCart(id)

    // add quantity
    const quantity = shoppinCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppinCart[id] = newQuantity;
    }
    else{
        shoppinCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppinCart));
}

const getCart= ()=>{
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    getCart, 
    removeFromDb,
    deleteShoppingCart
}