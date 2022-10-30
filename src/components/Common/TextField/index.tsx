import { ReactElement, FC, InputHTMLAttributes } from "react";

interface TextFieldInterfaces extends InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "number";
  className: string;
  value: string;
  placeholder: string;
}

const TextField: FC<TextFieldInterfaces> = (props): ReactElement => {
  return (
    <input
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      className={
        props.className + " outline-none focus:outline-none p-4 border-blue-400"
      }
      type={props.type}
    />
  );
};

export default TextField;
