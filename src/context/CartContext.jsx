import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}){
    const [product, setProduct] = useState([]);
    function count(){
        return product.length;
    }
    return (
        <CartContext.Provider value={[product, setProduct, count]}>
            {children}
        </CartContext.Provider>
    )
}