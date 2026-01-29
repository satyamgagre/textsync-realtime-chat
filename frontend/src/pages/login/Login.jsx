import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 py-8">
      <div className="w-full max-w-md p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl 
      backdrop-blur-xl bg-gray-900/40 border border-gray-700/50 shadow-2xl">
        
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-100 
        mb-2 sm:mb-3">
          Login to{' '}
          <span className="text-blue-500 bg-gradient-to-r from-blue-500 to-cyan-500 
          bg-clip-text text-transparent">
            ChatSync
          </span>
        </h1>
        
        <p className="text-center text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">
          Welcome back! Please login to your account.
        </p>
        
        {/* Form */}
        <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
          {/* Username Field */}
          <div>
            <label className="label p-2">
              <span className="text-sm sm:text-base text-gray-300 font-medium">
                Username
              </span>
            </label>
            <input 
              type="text" 
              placeholder="Enter your username" 
              className="w-full input input-bordered h-11 sm:h-12 md:h-13 
              backdrop-blur-xl bg-white/5 text-white text-sm sm:text-base
              placeholder:text-gray-500 border-gray-600/50 
              focus:border-blue-500/70 focus:bg-white/10 focus:outline-none 
              transition-all duration-200 rounded-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          {/* Password Field */}
          <div>
            <label className="label p-2">
              <span className="text-sm sm:text-base text-gray-300 font-medium">
                Password
              </span>
            </label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="w-full input input-bordered h-11 sm:h-12 md:h-13 
              backdrop-blur-xl bg-white/5 text-white text-sm sm:text-base
              placeholder:text-gray-500 border-gray-600/50 
              focus:border-blue-500/70 focus:bg-white/10 focus:outline-none 
              transition-all duration-200 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          {/* Signup Link */}
          <Link 
            to="/signup"
            className="text-sm sm:text-base text-gray-400 hover:text-blue-400 
            hover:underline transition-colors duration-200 inline-block"
          >
            Don't have an account? <span className="font-semibold">Sign up</span>
          </Link>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-block h-11 sm:h-12 md:h-13 
              bg-gradient-to-r from-blue-600 to-blue-700 
              hover:from-blue-700 hover:to-blue-800
              text-white font-semibold text-sm sm:text-base
              border-none rounded-lg
              transition-all duration-200 
              hover:scale-[1.02] active:scale-95
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
              shadow-lg shadow-blue-500/25"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="loading loading-spinner loading-sm"></span>
                  <span className="hidden sm:inline">Logging in...</span>
                </span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;