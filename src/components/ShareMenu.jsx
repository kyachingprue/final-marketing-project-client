import React from 'react';
import { IoMdHome } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { MdContactPhone } from 'react-icons/md';
import { FcAbout } from "react-icons/fc";


const ShareMenu = () => {
  return (
    <div className='pt-4'>
      <NavLink to="/" className="flex justify-start items-center gap-2">
        <IoMdHome className='text-sm md:text-2xl ' />
        <h2 className='text-sm md:text-xl text-center uppercase font-medium py-3'>Home</h2>
      </NavLink>
      <NavLink to="/products" className="flex justify-start items-center gap-2">
        <IoMenu className='text-sm md:text-2xl ' />
        <h2 className='text-sm md:text-xl text-center uppercase font-medium py-3'>Menu</h2>
      </NavLink>
      <NavLink to="/contact" className="flex justify-start items-center gap-2">
        <MdContactPhone className='text-sm md:text-2xl ' />
        <h2 className='text-sm md:text-xl text-center uppercase font-medium py-3'>Contact</h2>
      </NavLink>
      <NavLink to="/about" className="flex justify-start items-center gap-2">
        <FcAbout className='text-sm md:text-2xl ' />
        <h2 className='text-sm md:text-xl text-center uppercase font-medium py-3'>About</h2>
      </NavLink>
    </div>
  );
};

export default ShareMenu;