import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom"
import { getProducts } from "../firebase/firebase";
import { CartContext } from "../context/CartContext";

export default function ProductComp() {

    const [isLoading, setIsLoading] = useState(false);

    const [product, setProduct] = useContext(CartContext);

    const handleClick = () => {
        setProduct((prevProduct) => [...prevProduct, game])
    }

    const { prodId } = useParams();

    const [game, setGame] = useState({});

    async function getProduct(id) {
        setIsLoading(true);
        const aux = await getProducts();
        setGame(aux.find((prod) => prod.id == id));
        setIsLoading(false)
    }

    useEffect(() => {
        getProduct(prodId);
    }, [])

    return (
        <>
            <section className="flex gap-10 m-10 p-10 bg-indigo-800/20 rounded-lg">
                {isLoading ?
                    <div className="text-white font-sans font-extrabold text-4xl uppercase">loading...</div>
                    :
                    <>
                        <img className="h-96 mb-4 rounded" src={game.image} alt="" />
                        <div className="flex flex-col">
                            <h1 className="ml-4 text-white font-sans font-extrabold text-4xl blur-none">{game.title}</h1>
                            <div className="mt-4 p-4 pt-3 bg-cyan-300/10 rounded-lg text-white font-sans font-medium text-xl text-justify">{game.description}</div>
                            <div className="h-full flex flex-col justify-end items-end">
                                <div className="m-2 flex gap-1">
                                    <span className="text-teal-500 font-sans font-light text-xl">OFF 5%</span>
                                    <span className="text-white font-sans font-light text-xl">${game.price}</span>
                                </div>
                                <button className="px-3 py-2 bg-teal-500 rounded text-white font-sans font-extrabold" onClick={() => { handleClick() }}>AGREGAR AL CARRITO</button>
                            </div>
                        </div>
                    </>}
            </section>
        </>
    )
}