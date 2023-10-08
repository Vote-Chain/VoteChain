import React from 'react';
import Avatar from '../assets/avatar.svg';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-end items-center mr-15">
        <button className="text-2xl font-bold bg-transparent border-none hover:text-red transition-colors duration-300 font-Baloo Da 2">Home</button>
        {/* You can add navigation links or other navigation items here */}
        <div className="w-4"></div>
        <button className="text-2xl font-bold bg-transparent border-none hover:text-red transition-colors duration-300 font-Baloo Da 2">Voting</button>
        {/* You can add navigation links or other navigation items here */}
      </div>
    </nav>
  );
};

const Login = () => {
  return (
    <div className="min-h-screen bg-gray flex flex-col justify-center">
      <Navbar /> {/* Include the Navbar component here */}
      <div className="m-auto">
        <form className="bg-gray">
          <img src={Avatar} alt="Login" className="mb-4 ml-4" />
          <h1 className="font-bold mt-2 text-center">Login</h1>
          <p className="text-center mb-4">To get started, first login</p>
          {/* Rest of your login form */}
          <p className="text-red mb-4">Forgot password?</p>
          <div className="flex items-center justify-between">
            <button
              className="justify-center bg-red shadow-red ml-12 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
