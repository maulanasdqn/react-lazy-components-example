import { FC, ReactElement, ReactNode } from "react";

type MainLayoutsTypes = {
  children: ReactNode | string;
};

const MainLayouts: FC<MainLayoutsTypes> = ({ children }): ReactElement => {
  return (
    <section className="flex flex-col gap-y-4 justify-center items-center h-screen bg-gray-200 p-8">
      {children}
    </section>
  );
};

export default MainLayouts;
