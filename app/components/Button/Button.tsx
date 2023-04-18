'use client'

import { ButtonHTMLAttributes, FC } from 'react';

interface ButtonProps 
extends ButtonHTMLAttributes<HTMLButtonElement> 
{
    className?: string;
    full?: boolean;
    text:string;
}
// wrap component
const Button: FC<ButtonProps> = ({className, full , text}) => {
    // console.log("props is =========>" , props)
    return (
        <>
            <button>{text}</button>
        </>
        // <button {...other} className={[className, full ? 'w-full' : 'min-w-[130px]', 'shadow-lg bg-primary py-[0.5rem] px-5 text-white rounded cursor-pointer select-none'].join(' ')}>
        //     {children}
        // </button>
    );
};

export default Button;