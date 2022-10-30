import { FC, ReactElement } from "react";

const Navbar: FC = (): ReactElement => {
  return (
    <header className="text-white bg-gray-700 p-4 flex h-auto w-full items-center justify-between">
      <figure className="flex items-center p-2 gap-x-3">
        <img src="" alt="logo" />
        <figcaption>Logo</figcaption>
      </figure>
      <nav className="flex items-center gap-x-4">
        <span className="text-white">Home</span>
        <span className="text-white">About</span>
        <span className="text-white">Contact</span>
      </nav>
    </header>
  );
};

export default Navbar;
