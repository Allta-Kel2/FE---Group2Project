import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    id: string;
}

const Input = ({ id, ...props}: Props) =>{
    return(
        <input 
            id={id}
            className="bg-slate-200 rounded-lg text-orange-500 p-2 border focus:outline-none focus:border-orange-500 focus:ring-orange-500"
            {...props}
        />
    )
}

export default Input;