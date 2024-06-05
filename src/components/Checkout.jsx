import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { sendOrder, updateStock } from "../firebase/firebase";
import { getDoc } from "firebase/firestore"

export default function Checkout() {
    const [product, setProduct, count, productosAgrupados] = useContext(CartContext);
    const [buyerInfo, setBuyerInfo] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleChange = (e) => {
        setBuyerInfo({
            ...buyerInfo,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const precioTotal = product.reduce((total, producto) => total + producto.price * producto.cantidad, 0);

        const newOrder = {
            buyer: buyerInfo,
            items: product,
            total: precioTotal
        };
        console.log(product)
        await sendOrder(newOrder);

        for (const prod of productosAgrupados) {
            await updateStock(prod.id, prod.cantidad);
        }

        setProduct([]);
        alert("Compra realizada con éxito!");
    };

    return (
        <div className="flex flex-col items-center m-10 p-10 bg-indigo-800/20 rounded-lg">
            <h3 className="text-white font-sans font-extrabold text-4xl blur-none">Compra</h3>
            <form className="flex flex-col justify-center items-center gap-8 mt-4 p-8 bg-cyan-200/10 rounded-lg" onSubmit={handleSubmit}>
                <div>
                    <label className="m-2 text-white font-sans font-bold text-2xl">Nombre</label>
                    <input type="text" name="name" value={buyerInfo.name} onChange={handleChange} required />
                </div>
                <div>
                    <label className="m-2 text-white font-sans font-bold text-2xl">Email</label>
                    <input type="email" name="email" value={buyerInfo.email} onChange={handleChange} required />
                </div>
                <div>
                    <label className="m-2 text-white font-sans font-bold text-2xl">Teléfono</label>
                    <input type="tel" name="phone" value={buyerInfo.phone} onChange={handleChange} required />
                </div>
                <button className="p-2 bg-teal-500 rounded-lg text-white font-sans font-extrabold uppercase" type="submit">Realizar Compra</button>
            </form>
        </div>
    );
}
