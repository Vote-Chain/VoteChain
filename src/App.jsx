import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Terms from './components/terms';
import LandingPage from './landingpage/landingpage';
import Forgot from './components/forgot';
import Reset from './components/reset';
import NavBar from './components/navBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset" element={<Reset />} />
        <Route path='navBar' element={<NavBar />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
