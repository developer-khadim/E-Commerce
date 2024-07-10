import React, { useState, useEffect } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Language");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsLanguageOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const Links = [
    { name: "Home", href: "#" },
    { name: "Contact", href: "#" },
    { name: "About", href: "#" },
    { name: "Sign Up", href: "#" }
  ];

  return (
    <>
      <div className="bg-black w-full py-2 px-4 xl:block sm:hidden">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <div className="flex items-center gap-2 flex-grow justify-center md:justify-start mb-2 md:mb-0">
            <p className="text-white text-sm text-center md:text-left">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <h3 className="font-semibold text-white underline cursor-pointer">ShopNow</h3>
          </div>
          <div className="relative inline-block text-left z-30">
            <button 
              type="button" 
              className="inline-flex justify-center items-center rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              id="language-menu"
              aria-expanded={isLanguageOpen}
              aria-haspopup="true"
              onClick={toggleLanguage}
            >
              <span>{selectedLanguage}</span>
              <svg className={`ml-2 h-5 w-5 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {isLanguageOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-40" role="menu" aria-orientation="vertical" aria-labelledby="language-menu">
                <div className="py-1" role="none">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => handleLanguageSelect("English")}>English</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => handleLanguageSelect("Urdu")}>Urdu</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <header className="sticky top-0 flex items-center  justify-between px-20 sm:py-4 xl:py-3">
        <h1 className="w-3/12 md:w-auto">
          <a href="#" className="text-xl font-semibold">
            Exclusive
          </a>
        </h1>
        <nav className={`fixed md:static top-0 left-0 h-full w-64 md:w-auto bg-white shadow-md md:shadow-none transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out z-20 md:z-auto`}>
          <ul className="flex flex-col md:flex-row items-center h-full md:h-auto pt-20 md:pt-0 gap-5">
            <li className="md:hidden mb-10">
              <a href="#" className="text-xl font-semibold">
                Exclusive
              </a>
            </li>
            {Links.map((link) => (
              <li key={link.name} className="w-full md:w-auto sm:px-20 xl:px-0">
                <a href={link.href} className="block p-2 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="w-3/12 md:w-auto flex justify-end items-center gap-3">
          <a href="#" className="hidden md:block">
            <IoIosHeartEmpty size={25} />
          </a>
          <a href="#" className="hidden md:block">
            <IoCartOutline size={25} />
          </a>
          <button className="md:hidden z-30" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <IoMdClose size={25} /> : <IoMdMenu size={25} />}
          </button>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Navbar;