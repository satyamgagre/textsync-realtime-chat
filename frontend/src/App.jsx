import {Routes, Route} from "react-router-dom";
import "./index.css";
import Login from "./pages/login/login.jsx";
import SignUp from "./pages/signup/signup.jsx";
import Home from "./pages/home/home.jsx";


function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
