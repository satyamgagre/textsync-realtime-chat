import {Routes, Route} from "react-router-dom";
import "./index.css";
import Login from "./pages/login/login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import Home from "./pages/home/home.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/authContext.jsx";
import { Navigate } from "react-router-dom";


function App() {
  const{authUser} = useAuthContext();
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Routes>
        <Route path="/" element={ authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={ authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={ authUser ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
