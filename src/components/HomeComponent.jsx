import image1 from '../assets/image1.webp'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import CarruselComp from './CarruselComp/CarruselComp.jsx'
import ProductsComp from './ItemComponents/ItemList.jsx'

export default function HomeComponent(){
    const images = [image1, image2, image3]
    return(
        <>
            <CarruselComp images={images} />
            <hr id="productos"/>
            <ProductsComp/>
        </>
    )
}