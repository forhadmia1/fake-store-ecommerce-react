import { useEffect, useState } from "react";
import { getCart } from "../utilities/fakedb";

const useCart=(products)=>{
    const [cart,setCart]= useState([]);

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
    return [cart,setCart];
}
export default useCart;