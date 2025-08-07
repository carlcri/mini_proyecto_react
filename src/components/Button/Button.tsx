// 'src/components/Button/Button.tsx'
import './Button.css'

interface Props{
    label: string,
    parentMethod: ()=>void,
}


export const Button = ({label, parentMethod}: Props) => {
    return(
        <>
        {/* <h3>hello boton</h3> */}
        <button className="custom-button" onClick={parentMethod}>
            {label}
        </button>
        </>
    );
}


