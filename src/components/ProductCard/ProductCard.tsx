import './ProductCard.css'
import { Button } from "../Button/Button"

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
}

interface ProductCardProps{
    product: Product;
    onAddToCart:(productId: number) => void
}

export const ProductCard = ({product, onAddToCart}: ProductCardProps) => {

    const handleClick = ()=>{
        onAddToCart(product.id);
    }
    
    return(
        <>  
        <div className='product-card'>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
            <p><strong>$ {product.price.toFixed(2)}</strong></p>
            <Button label = {'Agregar al Carrito'} parentMethod={handleClick} />
        </div>
        </>
    )
}
