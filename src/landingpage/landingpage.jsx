import React from 'react'
import Avatar1 from '../assets/welcomepage.svg' 
import { Link } from 'react-router-dom';


const login = () => {
  const handlestart = () => {
    window.location.href = '/terms'
  }
  return (
    <div className="min-h-screen bg-gray flex flex-col justify-center">
      <div className="m-auto">
 
        <form className="bg-gray  ">
        {/* <img src= {Avatar1} alt="Login" className="mb-4 ml-4" /> */}
        <img src= {Avatar1} alt="Login" className="mb-4 ml-4" />
        <h1 className='font-bold mt-2 text-center'>Votechain</h1>
        <p className='text-center mb-4 mt-4'>Welcome to Votechain!</p>
        <p className="text-center mb-4">Already have an account? 
        <span className="text-red">
        <Link to="/login" className="text-red">Click here</Link>
        </span>
        </p>
           
         
          <div className="flex items-center justify-between">
          
            <button
            onClick={handlestart}
              className="mt-5 justify-center bg-red shadow-red ml-12 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              <link to="/terms" />
              Get started
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default login;
