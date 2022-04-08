import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import logo from "../../assets/logo_192.jpg";
import { Link } from "react-scroll";

const Menu = () => (
  <div className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-900 to-zinc-800">
    <div className="space-y-4 md:space-y-0 md:flex md:space-x-14 antialiased font-serif font-medium">
      <p className="hover:cursor-pointer">
        <Link to="#">Home</Link>
      </p>
      <p className="hover:cursor-pointer">
        <Link to="About">About</Link>
      </p>
      <p className="hover:cursor-pointer">
        <Link to="Work">Work</Link>
      </p>
      <p className="hover:cursor-pointer">
        <Link to="Contact">Contact</Link>
      </p>
    </div>
  </div>
);

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="fixed bg-gradient-to-r from-gray-50 to-indigo-50 w-screen">
      <div className="p-4 flex">
        <div className="pr-48 md:pr-0">
          <img src={logo} alt="logo" className="h-12 w-12" />
        </div>
        <div className="flex items-center space-x-8">
          <div className="md:hidden px-6 absolute right-6 top-8 text-zinc-900">
            {toggleMenu ? (
              <div onClick={() => setToggleMenu(false)}>
                <IoMdClose />
              </div>
            ) : (
              <div onClick={() => setToggleMenu(true)}>
                <IoMdMenu />
              </div>
            )}
          </div>
          <div className="hidden md:flex text-lg px-8 md:pr-32 lg:pr-48 xl:pr-72">
            <Menu />
          </div>
          <div className="px-6 absolute right-24 top-7">
            <a href="https://github.com/isaimemek" target="blank">
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>
        {toggleMenu && (
          <div className="absolute right-6 top-20 pb-6 border-2 p-6 bg-gradient-to-r from-indigo-50 to-gray-50 md:hidden">
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
