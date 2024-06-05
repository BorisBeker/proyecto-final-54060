import { useEffect, useState } from "react"
import { getProducts } from "../../firebase/firebase"
import { useNavigate } from "react-router-dom";

export default function ProductsComp() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    const handleClick = (prodId) => {
        navigate(`/product/${prodId}`)
    }

    const handleClick2 = (categoria) => {
        navigate(`/category/${categoria}`)
    }

    const [myGames, setMyGames] = useState([])

    async function getGames() {
        setIsLoading(true);
        const games = await getProducts();
        setMyGames(games);
        setIsLoading(false)
    }

    useEffect(() => {
        getGames();
    }, [])

    return (
        <>
            <section className="flex flex-col items-center m-10 p-10 bg-indigo-800/20 rounded-lg">
                <h1 className="text-white font-sans font-extrabold text-4xl blur-none">DESTACADOS</h1>

                <div className="flex mt-4 gap-10">
                    <button className="px-4 py-2 bg-cyan-200/10 text-white font-sans font-extrabold text-xl rounded uppercase" onClick={() => { handleClick2("aventura") }}>Aventura</button>
                    <button className="px-4 py-2 bg-cyan-200/10 text-white font-sans font-extrabold text-xl rounded uppercase" onClick={() => { handleClick2("carreras") }}>Carreras</button>
                    <button className="px-4 py-2 bg-cyan-200/10 text-white font-sans font-extrabold text-xl rounded uppercase" onClick={() => { handleClick2("supervivencia") }}>Supervivencia</button>
                </div>

                <div className="flex flex-wrap gap-10 m-10">
                    {isLoading ?
                        <div className="text-white font-sans font-extrabold text-4xl uppercase">loading...</div>
                        :
                        myGames.map(prod =>
                            <div className="flex flex-col p-2 w-60 items-center text-center justify-between bg-cyan-200/10 rounded-lg" key={prod.id}>
                                <img className="h-60 w-44 mt-4 object-cover rounded-lg" src={prod.image} alt="juego" />
                                <h3 className="m-2 text-white font-sans font-bold text-2xl">{prod.title}</h3>
                                <div className="contenedor-texto p-2 h-20 w-48 overflow-auto bg-cyan-300/10 rounded-lg text-white font-sans font-medium text-sm text-start">{prod.description}</div>
                                <span className="text-white font-sans font-normal text-xl">Stock de claves: {prod.stock}</span>
                                <div className="m-2 mt-0 flex gap-1">
                                    <span className="text-teal-500 font-sans font-light text-xl">OFF 5%</span>
                                    <span className="text-white font-sans font-light text-xl">${prod.price}</span>
                                </div>
                                <button className="mb-4 p-2 bg-teal-500 rounded-lg text-white font-sans font-extrabold uppercase" onClick={() => { handleClick(prod.id) }}>más información</button>
                            </div>
                        )}
                </div>
            </section>
        </>
    )
}