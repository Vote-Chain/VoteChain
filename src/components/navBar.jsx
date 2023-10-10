import React from 'react'
import { useState } from 'react';
import NavLinks from './navLinks';
import Avatar from '../assets/avatar.svg';
 
 
 
const NavBar = () => {
  const [nav , setNav] = useState(false);
  const links = [
    {
      id:1,
      link:"Home",
    },
    {
      id:2,
      link:"Vote",
    },
  ]
 
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 bg-gray fixed">
        <div className='justify-start'>
          <img 
            src={Avatar}  
            alt="Avatar"
            className="w-10 h-10 rounded-full mr-2"
          />
        </div>
        <ul className="flex md:flex text-xl  font-bold hover:text-red transition-colors duration-90 font-Baloo Da 2">
        {links.map(({ id, link }) => (
          <NavLinks
            key={id}
            link={link}
            className="px-4 cursor-pointer font-medium hover:scale-105 duration-90"
          />
        ))}
      </ul>
      <div 
      onClick={()=>setNav(!nav)}
      className='cursor-pointer w-6 h-6 relative'
      >

      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <NavLinks
              key={id}
              link={link}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
              onClick={() => setNav(!nav)}
            />
          ))}
        </ul>
      )}

 
    </div>
  )
}

export default NavBar
