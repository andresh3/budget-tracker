import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Signup from './Components/pages/Signup/Signup';
import Login from './Components/pages/Login/Login';
import Home from './Components/pages/Home/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
