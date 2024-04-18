import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"

export default function CartComp() {
    const [product, setProduct, count] = useContext(CartContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () =>{
        setProduct([])
    }

    const handleClick2 = () =>{
        localStorage.setItem('nuevaCompra', JSON.stringify(product))
    }

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <>
            <button className="flex group justify-center items-center w-12 h-12 mr-4 bg-white rounded-full cursor-pointer" onClick={toggleMenu}>
                <svg height="24" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
                <span>{count()}</span>
                {isMenuOpen && (
                    <div className="flex flex-col items-start z-10 absolute right-5 top-28 min-w-80 p-4 bg-white rounded-xl">
                        <h3 className="ml-2 font-sans font-extrabold text-xl">Carrito:</h3>
                        <ul className="w-full">
                            {product.map((prod, index) => (
                                <li key={index} className="m-2 w-100 flex justify-between items-center font-sans">
                                    {prod.title} - ${prod.price}
                                </li>
                            ))}
                        </ul>
                        <button className="m-2 px-4 py-2 bg-red-700 rounded-full text-white font-sans font-extrabold uppercase" onClick={()=>{handleClick()}}>vaciar carrito</button>
                        <button className="m-2 px-4 py-2 bg-teal-500 rounded-full text-white font-sans font-extrabold uppercase" onClick={()=>{handleClick2()}}>comprar</button>
                    </div>
                )}
            </button>
        </>
    )
}