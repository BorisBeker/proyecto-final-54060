import ItemList from "./ItemList"
import { useNavigate } from "react-router-dom";

export default function ItemListContainer() {
    const navigate = useNavigate();

    const handleClick = (categoria) => {
        navigate(`/category/${categoria}`)
    }

    return(
        <>
            <section className="flex flex-col items-center m-10 p-10 bg-indigo-800/20 rounded-lg">
                <h1 className="text-white font-sans font-extrabold text-4xl blur-none">DESTACADOS</h1>

                <div className="flex mt-4 gap-10">
                    <button className="px-4 py-2 bg-cyan-200/10 text-white font-sans font-extrabold text-xl rounded uppercase" onClick={() => { handleClick("aventura") }}>Aventura</button>
                    <button className="px-4 py-2 bg-cyan-200/10 text-white font-sans font-extrabold text-xl rounded uppercase" onClick={() => { handleClick("carreras") }}>Carreras</button>
                    <button className="px-4 py-2 bg-cyan-200/10 text-white font-sans font-extrabold text-xl rounded uppercase" onClick={() => { handleClick("supervivencia") }}>Supervivencia</button>
                </div>

                <ItemList/>
            </section>
        </>
    )
}