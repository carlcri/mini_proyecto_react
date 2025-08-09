import { CartItem } from "../CartItem/CartItem";
import { type ChangeEvent, useState } from "react";
import { ALL_PRODUCTS } from "../ProductsData";

interface ShoppingCartProps {
    productsInShoppingCart: Set<number>;
}
export const ShoppingCart = ({productsInShoppingCart}:ShoppingCartProps) => {

//    console.log(productsInShoppingCart);
    
    const cartItemsArray: number[] = [...productsInShoppingCart]

    // cartItemsArray.forEach(element => {
    //     const aux = ALL_PRODUCTS.find(product => product.id === element)
    //     console.log(aux);
    // });


    const [quantity, setQuantity] = useState<string>('');

    const onInputQuantity = (event:ChangeEvent<HTMLInputElement>) => {
        const newValue:string = event.target.value;

        if(!isNaN(Number(newValue))){
          setQuantity(newValue);
        }
    }

    const handleonMinusOne = () => {
        const newQuantity = Number(quantity)-1;

        if (newQuantity >= 0){
            setQuantity(String(newQuantity))
        }
    }

    const handleOnAddOne = () => {
        const newQuantity = String(Number(quantity)+1);
        setQuantity(newQuantity);
    }

    return(
    <>
        <h3>Mi Carrito</h3>
        <ul>
            {cartItemsArray.map((element, key)=>{
                const product = ALL_PRODUCTS.find((p)=>p.id===element);
                if(!product){
                    return null;
                }
                return (
                    <CartItem key={key} item_id={product.id} quantity={Number(quantity)} onInputQuantity={onInputQuantity}
                    onMinusOne={handleonMinusOne} onAddOne={handleOnAddOne}/>
                    // <li key={product.id}>{product.id} {product.name}</li>
            //             {/* <CartItem item_id={2} 
            //   quantity={Number(quantity)} 
            //   onInputQuantity={onInputQuantity} 
            //   onMinusOne={handleonMinusOne}
            //   onAddOne={handleOnAddOne}/> */}    
                );
            })}
        </ul>

    {/* <CartItem item_id={2} 
              quantity={Number(quantity)} 
              onInputQuantity={onInputQuantity} 
              onMinusOne={handleonMinusOne}
              onAddOne={handleOnAddOne}/> */}
    </>
    );
}