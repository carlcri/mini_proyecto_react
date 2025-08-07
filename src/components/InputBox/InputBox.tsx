import './InputBox.css'
import { type ChangeEvent } from 'react'

interface Props{
    placeholder: string,
    value: string,
    parentMethod: (event: ChangeEvent<HTMLInputElement>)=>void,
}


export const InputBox = ({placeholder, value, parentMethod}: Props) => {
    return(
        <>
        <input className='custom-input'
            placeholder={placeholder} 
            type="text" 
            value={value}
            onChange={parentMethod} />
        </>
    );
}

