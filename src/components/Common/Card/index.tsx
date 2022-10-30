import { FC, ReactElement, ReactNode } from "react";

type CardTypes = {
  header: string;
  children: ReactNode;
};

const Card: FC<CardTypes> = (props): ReactElement => {
  return (
    <section className="flex flex-col gap-y-4 items-center w-full p-4 rounded-lg bg-white shadow-lg">
      <h1 className="text-black-900 font-bold text-2xl">{props.header}</h1>
      {props.children}
    </section>
  );
};

export default Card;
