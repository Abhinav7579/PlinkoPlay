// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Simulation } from "./pages/Stimulation";
import { Game } from "./pages/Game";
import { Welcome } from "./pages/Welcome";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Otp from "./pages/Otp";
import About from "./pages/About";
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/game" element={<Game />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;