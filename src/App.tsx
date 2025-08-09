import './App.css'
import { ProductCard, ProductCarousel, ShoppingCart } from './components'
import { ALL_PRODUCTS } from './components'
import { useState } from 'react';



function App() {

  // const [quantity, setQuantity] = useState<string>('')

  const [productsInShoppingCart, setProductsInShoppingCart] = useState<Set<number>>(new Set());

  const handleonAddToCart = (productID: number) => {
      console.log(`el producto con ID: ${productID} fue agregado al carrito`);  
      setProductsInShoppingCart(prevSet => {
        const newSet = new Set(prevSet);
        newSet.add(productID);

        
        return newSet;
      })
  }

//   const onInputQuantity = (event:ChangeEvent<HTMLInputElement>) => {
//     const newValue:string = event.target.value;
// //    console.log(event.target.value);
//     if(!isNaN(Number(newValue))){
//       setQuantity(newValue);
//     }

//   }


//   const handleonMinusOne = () => {
//     const newQuantity = Number(quantity)-1;

//       if (newQuantity >= 0){
//         setQuantity(String(newQuantity))
//       }
//   }

//   const onAddOne = () => {
//     const newQuantity = String(Number(quantity)+1);
//     setQuantity(newQuantity);
//   }


  return (
    <>
    <ShoppingCart productsInShoppingCart={productsInShoppingCart}/>   
    <br />
    <br />
    <ProductCarousel products={ALL_PRODUCTS} onAddToCart={handleonAddToCart}/>
    <br />
    <ul>
      {ALL_PRODUCTS.map((item, index)=>(
        <ProductCard key={index} product={item} onAddToCart={handleonAddToCart}/>
      ))}
    </ul>

    
    </>
  )
}

export default App








// import './App.css'
// import { useState, type ChangeEvent } from 'react'
// import { Button, InputBox, ProductCard, ProductCarousel, QuantitySelector } from './components'
// import { ALL_PRODUCTS } from './components'



// function App() {
//   const [count, setCount] = useState(0)
//   const [animal, setAnimal] = useState<string>('')

//   const countMore = () =>{
//     setCount(count+1);
//   }

//   const capture_animal = (event:ChangeEvent<HTMLInputElement>) =>{
//     setAnimal(event.target.value);
//   }

//   const handleonAddToCart = (productID: number) => {
//       console.log(`el producto con ID: ${productID} fue agregado al carrito`);  
//   }

//   const handleonInputQuantity = (event:ChangeEvent<HTMLInputElement>) => {
//     console.log(event.target.value);
//   }

//   const handleonMinusOne = () => {

//   }

//   const onAddOne = () => {

//   }

//   //console.log(`animal es: ${animal}`);

//   return (
//     <>
//     <QuantitySelector quantity='0' onInputQuantity={handleonInputQuantity} onMinusOne={handleonMinusOne} onAddOne={onAddOne}/>
//     <br />
//     <ProductCarousel products={ALL_PRODUCTS} onAddToCart={handleonAddToCart}/>
//     <br />
//     <Button label={`count is ${count}`} parentMethod={countMore} />
//     <br />
//     <br />
//     <InputBox 
//       placeholder={'escribe tu animal favorito'}
//       value={animal}
//       parentMethod={capture_animal}/>
//     <h3>{animal}</h3>
//     <br />
//     <ul>
//       {ALL_PRODUCTS.map((item, index)=>(
//         <ProductCard key={index} product={item} onAddToCart={handleonAddToCart}/>
//       ))}
//     </ul>

    
//     </>
//   )
// }

// export default App
