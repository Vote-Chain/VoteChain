import React from 'react';
import Avatar from '../assets/avatar.svg';
import { Link } from 'react-router-dom';


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

const Login = () => {
  return (
    <div className="min-h-screen bg-gray flex flex-col justify-center">
      <div className="absolute top-0 left-0 m-4">
        <img src={Avatar} alt="Profile" className="w-12 h-12 rounded-full" />
      </div>
      <Navbar /> {/* Include the Navbar component here */}
      <div className="m-auto">
        <form className="bg-gray">
          <img src={Avatar} alt="Login" className="mb-4 ml-4" />
          <h1 className="font-bold mt-2 text-center">Forgot Password</h1>
          <p className="text-center mb-4 mt-2">Enter new password</p>
          <div className="mb-4">
            <input
              className="bg-white rounded-md w-full py-2 px-3 "
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <p className="text-center mb-4">Confirm new password</p>
          <div className="mb-6">
            <input
              className="bg-white rounded-md w-full py-2 px-3 "
              id="password"
              type="password"
              placeholder="*********"
            />
          </div>

          <div className="mt-4 text-centre">
                        {
                            //  acceptedTerms &&
                            (
                                <Link to="/login">
                                    <button
                                        className="justify-center bg-red shadow-red ml-12 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Proceed
                                    </button>
                                </Link>
                            )}
                    </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
