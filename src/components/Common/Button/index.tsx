import { ButtonHTMLAttributes, FC, ReactElement, ReactNode } from "react";

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  children: string | ReactNode;
  className: string;
}

const Button: FC<ButtonInterface> = ({
  children,
  type,
  className,
  onClick,
}): ReactElement => {
  return (
    <button onClick={onClick} type={type} className={className}>
      {children}
    </button>
  );
};

export default Button;
