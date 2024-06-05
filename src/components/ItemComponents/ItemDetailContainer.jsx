import { useParams, useNavigate } from "react-router-dom"
import ItemDetail from "./ItemDetail"

export default function ItemDetailContainer(){

    const { prodId } = useParams();
    const navigate = useNavigate();
    const handleClick2 = (categoria) => {
        navigate(`/category/${categoria}`)
    }
    return(
        <>
            <section>
                <div className="flex flex-col items-center gap-10 m-10 p-10 bg-indigo-800/20 rounded-lg">
                    <h1 className="text-white font-sans font-extrabold text-4xl blur-none">CATEGORIAS</h1>
                    <div className="flex gap-10">
                        <button className="px-4 py-2 bg-cyan-200/10 text-white font-sans font-extrabold text-xl rounded uppercase" onClick={() => { handleClick2("aventura") }}>Aventura</button>
                        <button className="px-4 py-2 bg-cyan-200/10 text-white font-sans font-extrabold text-xl rounded uppercase" onClick={() => { handleClick2("carreras") }}>Carreras</button>
                        <button className="px-4 py-2 bg-cyan-200/10 text-white font-sans font-extrabold text-xl rounded uppercase" onClick={() => { handleClick2("supervivencia") }}>Supervivencia</button>
                    </div>
                </div>

                <ItemDetail prodId={prodId}/>
                
            </section>
        </>
    )
}