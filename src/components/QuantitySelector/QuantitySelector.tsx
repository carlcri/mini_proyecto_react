import './QuantitySelector.css'
import { type ChangeEvent } from "react"
import { Button } from "../Button/Button"
import { InputBox } from "../InputBox/InputBox"

interface QuantitySelectorProps {
    quantity: string;
    onInputQuantity: (event:ChangeEvent<HTMLInputElement>) => void;
    onMinusOne: () => void;
    onAddOne: () => void;
}

export const QuantitySelector = ({quantity, 
                                  onInputQuantity, 
                                  onMinusOne,
                                  onAddOne}:QuantitySelectorProps) => {


    return(
        <>
        <div className="quantity-selector-container">
            {/* <h3>seleccionar cantidad</h3> */}
            <div className="quantity-controls">
                <Button label="-" parentMethod={onMinusOne}></Button>
                <InputBox placeholder="QTY" value={quantity} parentMethod={onInputQuantity}/>
                <Button label="+" parentMethod={onAddOne}/>
            </div>
        </div>

        <div>
            <h4>{quantity}</h4>
        </div>
        </>
    )
}



// import './QuantitySelector.css'
// import { useState, type ChangeEvent } from "react"
// import { Button } from "../Button/Button"
// import { InputBox } from "../InputBox/InputBox"



// export const QuantitySelector = () => {

//     const [quantity, setQuantity] = useState<string>('');
//     const captureInput = (event:ChangeEvent<HTMLInputElement>) => {
//         const newValue:string = event.target.value;
//         if(!isNaN(Number(newValue))){
// //            console.log(`${newValue} es un numero`);
//             setQuantity(newValue);
//         }
//     }

//     const addOne = () => {
//         let newQuantity = String(Number(quantity)+1);
//         setQuantity(newQuantity);
//     }

//     const minusOne = () => {
//         let newQuantity = Number(quantity)-1;
//         if (newQuantity >= 0){
//             setQuantity(String(newQuantity))
//         }
//     }

//     return(
//         <>
//         <div className="quantity-selector-container">
//             <h3>seleccionar cantidad</h3>
//             <div className="quantity-controls">
//                 <Button label="-" parentMethod={minusOne}></Button>
//                 <InputBox placeholder="QTY" value={quantity} parentMethod={captureInput}/>
//                 <Button label="+" parentMethod={addOne}/>
//             </div>
//         </div>

//         <div>
//             <h4>{quantity}</h4>
//         </div>
//         </>
//     )
// }