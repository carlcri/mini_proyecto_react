import './App.css'
import { ProductCard, ProductCarousel, ShoppingCart, CartIcon, InputBox} from './components'
import { ALL_PRODUCTS } from './components'
import { useState, type ChangeEvent } from 'react';



function App() {

  const [productsInShoppingCart, setProductsInShoppingCart] = useState<Map<number, number>>(new Map());
  const [showCartView, setShowCartView  ] = useState<boolean>(false);
  const [searchField, setSearchField] = useState<string>('')
  const [products_filtered, set_products_filtered] = useState(ALL_PRODUCTS);


  const handleonAddToCart = (productID: number) => {
      console.log(`el producto con ID: ${productID} fue agregado al carrito`);  
      setProductsInShoppingCart(previousCart => {
        const newCart = new Map(previousCart);
        newCart.set(productID, (newCart.get(productID) || 0) + 1);
        
        return newCart;
      })
    }

//    console.log(productsInShoppingCart);

  const handleOnDelete = (productID: number) => {
    // console.log(`product ID to delete ${productID}`);
    setProductsInShoppingCart(previousCart => {
      const newCart = new Map(previousCart);
      const operationDelete: Boolean = newCart.delete(productID);
      if(operationDelete){
        return newCart;
      }
      return previousCart;

    })
  }

    

  const handleonInputQuantity = (event:ChangeEvent<HTMLInputElement>, productID:number) => {
    const newValue:string = event.target.value;
    // if (newValue === '') {
    //     setProductsInShoppingCart(previousCart => {
    //         const newCart = new Map(previousCart);
    //         newCart.set(productID, 1);
    //         return newCart;
    //     });
    //     return; // Salimos de la función para evitar el resto de la lógica
    // }
//    console.log(`current q: ${newValue} | ${quantity}`);
//    console.log(event.target.value);
    if(!isNaN(Number(newValue))){
//      setQuantity(newValue);
      setProductsInShoppingCart(previousCart => {
        const newCart = new Map(previousCart);
        newCart.set(productID, Number(newValue));
        
        return newCart;
      })            
    }
  }


  const handleonMinusOne = (productID: number) => {
    setProductsInShoppingCart(previousCart => {
//    console.log(`cantidad: ${previousCart.get(productID)}`);    
    const newCart = new Map(previousCart);
    const newQuantity = Number(previousCart.get(productID)) -1;
  
    if (newQuantity > 0){
      newCart.set(productID, newQuantity);
    }
        
    return newCart;
    })

  }

  const handleOnAddOne = (productID:number) => {
    setProductsInShoppingCart(previousCart => {
//    console.log(`cantidad: ${previousCart.get(productID)}`);    
      const newCart = new Map(previousCart);
      const newQuantity = Number(previousCart.get(productID)) + 1;
      newCart.set(productID, newQuantity);
       
      return newCart;
      })
  }

  const handleBuyButton = () => {
    const cartItemsArray = Array.from(productsInShoppingCart);
    let subtotal: number = 0;
    
    cartItemsArray.forEach(element => {
      const productID:number = element[0];
      const quantity = productsInShoppingCart.get(productID);
      if(quantity !== undefined){
        console.log('hola');
        const product = ALL_PRODUCTS.find((p)=>p.id===productID);
        if(product){
          subtotal = subtotal + product.price * quantity;
        }
      }
    });
    alert(`subtotal compra: $${subtotal}`);
  }

  const onToggleView = () =>{
    setShowCartView(!showCartView);
    console.log(`hola toggle: ${showCartView}`);
  }

  // 🟢 Calcula el número total de ítems para el contador
  const totalItemsInCart = [...productsInShoppingCart.values()].reduce((sum, current) => sum + current, 0);


  const applyFilter = (name: string) => {
    var filtered = ALL_PRODUCTS;
    if(name){
      filtered = filtered.filter(element => element.name.toLowerCase().includes(name.toLowerCase()));
    }
    set_products_filtered(filtered);       
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchField = event.target.value;
    setSearchField(newSearchField); 
    applyFilter(newSearchField);
  }


  return (
    <>
    <CartIcon itemCount={totalItemsInCart} onToggleView={onToggleView} />

    {showCartView && (
        <ShoppingCart productsInShoppingCart={productsInShoppingCart} 
                    handleonMinusOne={handleonMinusOne} 
                    handleOnAddOne={handleOnAddOne}
                    handleonInputQuantity={handleonInputQuantity}
                    handleOnDelete={handleOnDelete}
                    handleBuyButton={handleBuyButton}/>
    )}
    {!showCartView && (
        <><ProductCarousel products={ALL_PRODUCTS.slice(0,10)} onAddToCart={handleonAddToCart}/>
        {/* <ul>
          {ALL_PRODUCTS.map((item, index)=>(
            <ProductCard key={index} product={item} onAddToCart={handleonAddToCart}/>
          ))}
        </ul>       */}
        <br />
        </>  
    )}
    {!showCartView && (
      <>
      <InputBox placeholder='buscar producto' value={searchField} parentMethod={handleInputChange}/>
      <ul>
        {products_filtered.map((item, index)=>(
          <ProductCard key={index} product={item} onAddToCart={handleonAddToCart}/>
        ))}
      </ul>
      </>
    )}

    </>
  )
}

export default App
