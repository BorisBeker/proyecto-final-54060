import Perfil from "../assets/perfil.webp"
import CartWidget from "./CartComponents/CartWidget";

export default function ProfileComp() {
    return(
        <>
            <div className="flex">
                <button className="flex items-center px-3 mr-4 h-12 bg-teal-500 rounded-3xl">
                    <img className="mr-2 h-8 w-8 rounded-full" src={Perfil} alt="Imagen de usuario" />
                    <h2 className="text-white font-sans font-extrabold uppercase">pedro pascal</h2>
                </button>
                <CartWidget/>
            </div>
        </>
    )
}