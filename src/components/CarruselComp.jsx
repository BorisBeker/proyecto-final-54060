import { useEffect, useState } from "react"

export default function CarruselComp({ images }) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => {
            clearInterval(intervalId);
        };
    }, [images.length, 2000]);

    return (
        <div className="overflow-hidden carousel-container">
            <div className="flex carousel-slide" style={{ width: `${images.length * 100}%`, transform: `translateX(-${currentImageIndex * (100 / images.length)}%)` }}>
                {images.map((image, index) => (
                    <div key={index} style={{ width: `${100 / images.length}%` }}>
                        <img src={image} alt={`image${index}`} className="w-full h-auto"/>
                    </div>
                ))}
            </div>
        </div>
    )
}