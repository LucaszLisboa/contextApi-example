import React from 'react';
import { Carousel } from 'primereact/carousel';

export function Carrosel() {
    const products = [
        { name: 'Primeira Imagem', image: 'https://st.depositphotos.com/1062624/4071/i/450/depositphotos_40716309-stock-photo-best-internet-concept-of-global.jpg' },
        { name: 'Segunda Imagem', image: 'https://st.depositphotos.com/1062624/4071/i/450/depositphotos_40716309-stock-photo-best-internet-concept-of-global.jpg' },   
    ];

    return (
        <div className="carousel-container">
            <Carousel value={products} circular className="custom-carousel" showNavigators={false} autoplayInterval={3000}
                itemTemplate={(products) =>
                    <div className="custom-carousel-item relative">  
                        <img src={products.image} alt={products.name} className='w-screen h-[70vh] relative bg-cover bg-no-repeat' />
                        <h4 className='absolute bottom-5 left-5 text-black p-4 bg-white rounded-lg '>{products.name}</h4>
                    </div>
                } 
            />
        </div>
    );
 
    
}
