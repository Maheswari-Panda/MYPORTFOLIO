import React from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Introduction', 'Education', 'Experience', 'Projects', 'Skills', 'Certificates'];

  return (
    <nav className="navbar bg-base-100 shadow-sm px-4 md:px-8 py-3">
      <div className="flex-1">
        <a className="text-xl bg-gradient-to-r px-3 from-primary to-secondary text-transparent bg-clip-text font-bold transition duration-300 hover:text-gray-300 hover:bg-none">
          Maheswari Panda
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:items-center">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((text) => (
            <li key={text}>
              <a
              href={`#${text}`}
              className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text transition duration-300 hover:text-white hover:bg-none">
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-primary focus:outline-none"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-18 left-0 w-full bg-base-100 shadow-md md:hidden z-10">
          <ul className="flex flex-col items-start p-4 space-y-2 mx-3">
            {navItems.map((text) => (
              <li key={text}>
                <a
                  href={`#${text}`}
                  className="block w-full bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text transition duration-300 hover:text-white hover:bg-none"
                  onClick={() => setIsOpen(false)} // close on selection
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
