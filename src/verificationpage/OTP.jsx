import React from 'react';
import { useLocation } from 'react-router-dom';
import Avatar from '../assets/avatar.svg';
import { useNavigate } from 'react-router-dom';

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

const OTP = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const phoneNumber = queryParams.get('phone'); // Get the phone number from query parameters

  const handleVerify = () => {
      navigate(`/capture`);
  };

  // Function to partially star the middle part of the phone number
  const partiallyStarPhoneNumber = (phoneNumber) => {
    if (phoneNumber && phoneNumber.length >= 10) {
      const maskedPart = phoneNumber.slice(3, -3).replace(/./g, '*');
      return `${phoneNumber.slice(0, 3)}-${maskedPart}-${phoneNumber.slice(-3)}`;
    }
    return phoneNumber;
  };

  return (
    <div className="min-h-screen bg-gray flex flex-col justify-center">
      <div className="m-auto">
        <form className="bg-gray">
          <img src={Avatar} alt="Login" className="mb-4 ml-4" />
          <Navbar /> {/* Include the Navbar component here */}
          <h1 className="font-bold mt-2 text-center">Verification</h1>
          <p className="text-center mb-4">
            ID confirmed! To continue, enter the OTP sent to{' '}
            {partiallyStarPhoneNumber(phoneNumber)}
          </p>
          <div className="mb-4">
            <input
              className="bg-white rounded-md w-full py-2 px-3"
              id="otp"
              type="text"
              placeholder="Enter OTP"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={handleVerify}
              className="justify-center bg-red shadow-red ml-12 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTP;
