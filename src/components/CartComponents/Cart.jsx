import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export default function CartWidget() {

    const [product, setProduct, count, productosAgrupados] = useContext(CartContext);

    const handleClick = () =>{
        setProduct([])
    }

    return (
        <>
            <div className="flex flex-col items-start z-10 absolute right-5 top-28 min-w-80 p-4 bg-white rounded-xl">
                <h3 className="ml-2 font-sans font-extrabold text-xl">Carrito:</h3>
                <ul className="w-full">
                    {productosAgrupados.map((prod) => (
                        <li key={prod.id} className="m-2 w-100 flex justify-between items-center font-sans">
                            {prod.title} - ${prod.price} - Cantidad: {prod.cantidad}
                        </li>
                    ))}
                </ul>
                <button className="m-2 px-4 py-2 bg-red-700 rounded-full text-white font-sans font-extrabold uppercase" onClick={() => { handleClick() }}>vaciar carrito</button>
                <Link className="m-2 px-4 py-2 bg-teal-500 rounded-full text-white font-sans font-extrabold uppercase" to="/checkout">comprar</Link>
            </div>
        </>
    )
}