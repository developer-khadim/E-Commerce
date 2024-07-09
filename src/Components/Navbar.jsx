import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {
    return (
        <>
           <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
    {/* logo */}
    <h1 className="w-3/12">
        <a href=""  className="text-xl font-semibold" >
        Exclusive
        </a>
    </h1>

    {/* navigation */}
    <nav className="nav ">
        <ul className="flex items-center">
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              <a href="">Home</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="">Contact</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="">About</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="">Sign Up</a>
            </li>
        </ul>
    </nav>

    {/* buttons */}
    <div className="w-3/12 flex justify-end gap-3 ">
        <a href="">
          <CiHeart  size={25}  />
        </a>
        <a href="">
          <IoCartOutline size={25}  />
        </a>
    </div>
</header>
        </>
    )
}

export default Navbar
