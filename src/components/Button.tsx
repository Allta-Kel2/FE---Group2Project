import { FC, ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string | ReactNode;
  onClick?: React.FormEventHandler
  color?: string 
}

const Button: FC<ButtonProps> = ({ label, onClick, color}) => {
  return (
    <button
      className={`btn border-transparent w-fit tracking-wider text-[0.75rem] ${color} text-white hover:bg-zinc-400 hover:border-transparent dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 md:text-base`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button