import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}){
    const [product, setProduct] = useState([]);

    const agruparProductos = (productos) => {
        const contadorProductos = {};

        productos.forEach((producto) => {
            if (contadorProductos[producto.id]) {
                contadorProductos[producto.id].cantidad += 1;
            } else {
                contadorProductos[producto.id] = { ...producto, cantidad: 1 };
            }
        });

        return Object.values(contadorProductos);
    };

    const productosAgrupados = agruparProductos(product);

    function count(){
        return product.length;
    }
    return (
        <CartContext.Provider value={[product, setProduct, count, productosAgrupados]}>
            {children}
        </CartContext.Provider>
    )
}