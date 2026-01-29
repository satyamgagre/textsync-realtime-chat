import { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signUp } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInputs((prev) => ({ ...prev, gender }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputs.gender) {
      alert("Please select a gender");
      return;
    }

    await signUp(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 py-8">
      <div className="w-full max-w-md p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl 
      backdrop-blur-xl bg-gray-900/40 border border-gray-700/50 shadow-2xl
      max-h-[calc(100vh-2rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 
      scrollbar-track-transparent">
        
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-100 
        mb-2 sm:mb-3">
          Sign Up on{' '}
          <span className="text-blue-500 bg-gradient-to-r from-blue-500 to-cyan-500 
          bg-clip-text text-transparent">
            ChatSync
          </span>
        </h1>
        
        <p className="text-center text-gray-400 text-sm sm:text-base mb-5 sm:mb-6">
          Create your account to get started
        </p>

        {/* Form */}
        <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="label p-2">
              <span className="label-text text-sm sm:text-base text-gray-300 font-medium">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-11 sm:h-12 md:h-13 
              backdrop-blur-xl bg-white/5 text-white text-sm sm:text-base
              placeholder:text-gray-500 border-gray-600/50 
              focus:border-blue-500/70 focus:bg-white/10 focus:outline-none 
              transition-all duration-200 rounded-lg"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
              required
            />
          </div>

          {/* Username */}
          <div>
            <label className="label p-2">
              <span className="label-text text-sm sm:text-base text-gray-300 font-medium">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-11 sm:h-12 md:h-13 
              backdrop-blur-xl bg-white/5 text-white text-sm sm:text-base
              placeholder:text-gray-500 border-gray-600/50 
              focus:border-blue-500/70 focus:bg-white/10 focus:outline-none 
              transition-all duration-200 rounded-lg"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="label p-2">
              <span className="label-text text-sm sm:text-base text-gray-300 font-medium">
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
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
              required
              minLength={6}
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="label p-2">
              <span className="label-text text-sm sm:text-base text-gray-300 font-medium">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full input input-bordered h-11 sm:h-12 md:h-13 
              backdrop-blur-xl bg-white/5 text-white text-sm sm:text-base
              placeholder:text-gray-500 border-gray-600/50 
              focus:border-blue-500/70 focus:bg-white/10 focus:outline-none 
              transition-all duration-200 rounded-lg"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
              required
              minLength={6}
            />
          </div>

          {/* Gender */}
          <GenderCheckBox
            onCheckBoxChange={handleCheckboxChange}
            selectedGender={inputs.gender}
          />

          {/* Login link */}
          <Link
            to="/login"
            className="text-sm sm:text-base text-gray-400 hover:text-blue-400 
            hover:underline transition-colors duration-200 inline-block"
          >
            Already have an account? <span className="font-semibold">Login</span>
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
                  <span className="hidden sm:inline">Creating account...</span>
                </span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;