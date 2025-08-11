import { useMemo, type ChangeEvent } from "react";
import { ALL_PRODUCTS } from "../ProductsData";
import { QuantitySelector } from "../QuantitySelector/QuantitySelector";
import './CartItem.css'
import { Button } from "../Button/Button";


interface CartItemProps{
    item_id: number;
    quantity: number;
    onInputQuantity: (event:ChangeEvent<HTMLInputElement>)=> void;
    onMinusOne: () =>void;
    onAddOne: () => void; 
    onDelete: () => void;
}

export const CartItem = ({item_id, quantity, onInputQuantity, onMinusOne, onAddOne, onDelete}:CartItemProps)=>{

    const product = useMemo(() => {
        return ALL_PRODUCTS.find(p => p.id === item_id);
    }, [item_id]);

    if(!product) {
        return null;
    }


    // const onInputQuantity = (event:ChangeEvent<HTMLInputElement>) => {
    //     console.log(event.target.value);
    // }


    return(
    <div className="cart-item">
        <img src={product.image} alt={product.name} className="cart-item-image" />
        <div className="cart-item-details">
            <h4>{product.name}</h4>
            <p>Precio unitario: ${product.price.toFixed(2)}</p>
            <p>Total: ${(product.price * Number(quantity)).toFixed(2)}</p>
        </div>
        <div className="cart-item-controls">
            <QuantitySelector
                quantity={String(quantity)}
                onInputQuantity={onInputQuantity}
                onMinusOne={onMinusOne}
                onAddOne={onAddOne}
            />

            {/* Agregamos un botón para eliminar el producto */}
            <div className="button-delete-container">
                <Button label="Eliminar" parentMethod={onDelete}/>
            </div>
        </div>
        </div>
    ) 
}