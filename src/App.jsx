import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Terms from './components/terms';
import LandingPage from './landingpage/landingpage';
import OTP from './verificationpage/OTP';
import Verification from './verificationpage/VerificationPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/VerificationPage" element={<Verification />} />
        <Route path="/OTP" element={<OTP />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
