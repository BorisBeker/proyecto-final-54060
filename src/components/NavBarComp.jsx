import { Link } from "react-router-dom"
import ProfileComp from "./ProfileComp"

export default function NavBarComp() {

    return (
        <>
            <nav>
                <div className="flex justify-center items-center h-10 bg-indigo-800">
                    <h2 className="text-white font-sans font-bold">OFERTA ÚNICA POR TIEMPO LIMITADO</h2>
                </div>
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center pl-9 w-1/4">
                        <svg className="h-20" version="1.1" viewBox="0 0 256 256" space="preserve">
                            <path fill="white" d="M183,53c-13.2,0-33.3,11.4-54.9,11.4C106.4,64.4,86.3,53,73.1,53c-42.2,0-61,73-63.1,119.2c0,33.7,21.8,38.3,37.1,20.4c33.2-38.8,41.5-40.3,80.9-40.3s47.7,1.5,80.9,40.4c15.3,17.9,37.1,13.3,37.1-20.4C244,126.1,225.2,53,183,53L183,53z M98.2,119.1h-6.3c-1.1,0-2,0.9-2,2v6.1c0,3.3-2.9,5.9-6.3,5.5c-3-0.3-5.2-2.9-5.2-5.9V121c0-1.1-0.9-2-2-2h-6.3c-3.3,0-6-2.8-5.6-6.2c0.3-2.9,3-5,6-5h5.9c1.1,0,2-0.9,2-2v-6.1c0-3.3,2.9-5.9,6.3-5.5c3,0.3,5.2,3,5.2,5.9v5.8c0,1.1,0.9,2,2,2h6c2.9,0,5.6,2,5.9,4.9C104.2,116.1,101.5,119.1,98.2,119.1L98.2,119.1z M170.7,129.2c-8.9,0-16-7-16-15.7s7.2-15.7,16-15.7c8.9,0,16,7,16,15.7S179.5,129.2,170.7,129.2L170.7,129.2z" />
                        </svg>
                        <h1 className="ml-2 text-white font-sans font-extrabold text-4xl uppercase">GFG</h1>
                    </div>

                    <ul className="flex items-center justify-center gap-10 w-2/4">
                        <li><Link className="text-white font-sans font-bold text-xl cursor-pointer" to="/proyecto-final-54060">INICIO</Link></li>
                        <li><Link className="text-white font-sans font-bold text-xl cursor-pointer" to="/productos">JUEGOS</Link></li>
                    </ul>
                    <div className="flex justify-end w-1/4">
                        <ProfileComp />
                    </div>
                </div>
            </nav>
        </>
    )
}