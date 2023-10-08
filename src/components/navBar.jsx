import React from 'react'


const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-end items-center">
        <button className="text-2xl font-bold bg-transparent border-none hover:text-red transition-colors duration-300 font-Baloo Da 2">Home</button>
        {/* You can add navigation links or other navigation items here */}
        <div className="w-4"></div>
        <button className="text-2xl font-bold bg-transparent border-none hover:text-red transition-colors duration-300 font-Baloo Da 2">Voting</button>
        {/* You can add navigation links or other navigation items here */}
      </div>
    </nav>
  )
}

export default Navbar;