import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";


const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div
        className="w-full max-w-md p-8 rounded-lg
        bg-clip-padding backdrop-filter backdrop-blur-lg
        bg-opacity-10 border border-gray-700 shadow-2xl"
      >
        <h1 className="text-4xl font-bold text-center text-gray-100 mb-8">
          Sign Up on <span className="text-blue-500">ChatSync</span>
        </h1>

        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="label">
              <span className="label-text text-gray-300 font-medium">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-12 bg-transparent text-white
              placeholder-gray-500 border-gray-600 focus:border-blue-500
              focus:outline-none transition duration-200"
            />
          </div>

          {/* Username */}
          <div>
            <label className="label">
              <span className="label-text text-gray-300 font-medium">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-12 bg-transparent text-white
              placeholder-gray-500 border-gray-600 focus:border-blue-500
              focus:outline-none transition duration-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text text-gray-300 font-medium">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full input input-bordered h-12 bg-transparent text-white
              placeholder-gray-500 border-gray-600 focus:border-blue-500
              focus:outline-none transition duration-200"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="label">
              <span className="label-text text-gray-300 font-medium">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full input input-bordered h-12 bg-transparent text-white
              placeholder-gray-500 border-gray-600 focus:border-blue-500
              focus:outline-none transition duration-200"
            />
          </div>

          {/* Gender */}
          <GenderCheckBox />

          {/* Login link */}
          <Link to="/login"
            className="text-sm text-gray-400 hover:text-blue-500
            hover:underline transition duration-200 inline-block"
          >
            Already have an account?
          </Link>

          {/* Button */}
          <button
            type="submit"
            className="btn btn-block h-12 bg-blue-600 hover:bg-blue-700
            text-white font-semibold border-none transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
