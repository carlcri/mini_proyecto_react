import './ProductCarousel.css'
import { Button} from "../Button/Button";
import { ProductCard } from '../ProductCard/ProductCard';

import {useState} from "react";


interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface ProductCarouselProps{
    products: Product[];
    onAddToCart:(productId: number) => void
}

export const ProductCarousel = ({products, onAddToCart}: ProductCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handlePrevious = () => {
        if (currentIndex > 0){
            setCurrentIndex(currentIndex-1);
        }
    }

    const handleNext = () =>{
        if(currentIndex < products.length - 1){
            setCurrentIndex(currentIndex+1);
        }
    }

    const current_product = products[currentIndex]

    return(
        <>
        <div className='carousel-container'>
            <h4>Productos Destacados</h4>
            <div className='carousel-content'>
                <Button label="Previous" parentMethod={handlePrevious}/>
                <ProductCard product={current_product} onAddToCart={onAddToCart}/>                
                <Button label="Next" parentMethod={handleNext}></Button>
            </div>
        </div>
        </>
    );
}