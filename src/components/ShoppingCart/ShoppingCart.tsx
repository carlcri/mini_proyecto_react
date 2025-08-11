import { CartItem } from "../CartItem/CartItem";
import { Button } from "../Button/Button";
import { type ChangeEvent} from "react";
import { ALL_PRODUCTS } from "../ProductsData";

interface ShoppingCartProps {
    productsInShoppingCart: Map<number, number>; 
    handleonMinusOne: (item_id: number) =>void; 
    handleOnAddOne: (item_id: number) => void;
    handleonInputQuantity: (event:ChangeEvent<HTMLInputElement>, item_id:number) => void;
    handleOnDelete: (item_id:number) => void;
    handleBuyButton: () => void;
}
export const ShoppingCart = ({productsInShoppingCart, 
                              handleonMinusOne, 
                              handleOnAddOne, 
                              handleonInputQuantity,
                              handleOnDelete, handleBuyButton}:ShoppingCartProps) => {
    
//    console.log(productsInShoppingCart);
    
    const cartItems: Map<number,number> = (productsInShoppingCart);

    // cartItemsArray.forEach(element => {
    //     const aux = ALL_PRODUCTS.find(product => product.id === element)
    //     console.log(aux);
    // });


//    const [quantity, setQuantity] = useState<string>('');

    // const onInputQuantity = (event:ChangeEvent<HTMLInputElement>) => {
    //     const newValue:string = event.target.value;

    //     if(!isNaN(Number(newValue))){
    //       setQuantity(newValue);
    //     }
    // }



    const cartItemsArray:number[] = [...cartItems.keys()];
//    console.log(cartItemsArray);

    // const placeholder = ()=>(
    //     console.log('hola')
    // )
 

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
                    // <h5 key={key}>producto encontrado {product.name} | cantidad: {productsInShoppingCart.get(element)}</h5>  
 
                        <CartItem key={key} 
                        item_id={product.id} 
                        quantity={Number(productsInShoppingCart.get(element))} 
                        onInputQuantity={(event) => handleonInputQuantity(event, product.id)}
                        onMinusOne={() => handleonMinusOne(product.id)} 
                        onAddOne={() => handleOnAddOne(product.id)}
                        onDelete={() => handleOnDelete(product.id)}/>             
                );
            })}
        </ul>
        {/* Solo se renderiza si el arreglo no es vacio*/}
        {cartItemsArray.length > 0 ? <Button label="comprar" parentMethod={handleBuyButton}/> : null  }
        

    {/* <CartItem item_id={2} 
              quantity={Number(quantity)} 
              onInputQuantity={onInputQuantity} 
              onMinusOne={handleonMinusOne}
              onAddOne={handleOnAddOne}/> */}
    </>
    );
}



