// import useState from 'react';
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
    // const [acceptedTerms, setAcceptedTerms] = useState(false);

    // const handleAcceptTerms = () => {
    //   setAcceptedTerms(!acceptedTerms);
    // };

    return (
        <div className="min-h-screen bg-gray flex flex-col justify-center">
            <div className="absolute top-0 left-0 m-4">
                <img src={Avatar} alt="Profile" className="w-12 h-12 rounded-full" />
            </div>
            <Navbar /> {/* Include the Navbar component here */}
            <div className="m-auto text-center "> {/* Center the text */}

                <h1 className="text-2xl font-bold text-red font-[Baloo Da 2] md:ml-0">Terms and Conditions</h1>
                <ul className="text-left ml-4 mt-4 mx-auto list-inside"> {/* Bullet list */}
                    <li>- Data entered into the site will be saved.</li>
                    <li>- Data entered into the site will be tracked.</li>
                    <li>- Data entered into the site will be used.</li>
                    <li>-To begin, voters should register and have a valid phone no.</li>
                    <li>-OTP will be ONLY sent to registered mobile number.</li>
                    <li>-Votes should be genuine.</li>
                    <li>-Voters should have a verified national ID.</li>
                    <li>-Voters should be of 18yrs and above.</li>
                    <li>-Vote(s) can be given to only one candidate, and after submission the vote CANNOT be changed.</li>
                </ul>
                <div className="mt-4">
                    <label>
                        <input
                            type="radio"
                        //   checked={acceptedTerms}
                        //   onChange={handleAcceptTerms}
                        />
                        <span className="ml-2">I accept the terms and conditions</span>
                    </label>
                </div>
                <div className="mt-4">
                    {
                        //  acceptedTerms &&
                        (
                            <Link to="/signup">
                                <button
                                    className="bg-red text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Proceed
                                </button>
                            </Link>
                        )}
                </div>
            </div>
        </div>
    );
};

export default Login;
