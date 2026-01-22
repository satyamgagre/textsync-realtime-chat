const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md p-8 rounded-lg bg-clip-padding 
      backdrop-filter backdrop-blur-lg bg-opacity-10 border border-transparent shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-100 mb-8">
          Login to{' '}
          <span className="text-blue-500">ChatSync</span>
        </h1>
        
        <form className="space-y-6">
          <div>
            <label className="label p-2">
              <span className="text-base text-gray-300 font-medium">Username</span>
            </label>
            <input 
              type="text" 
              placeholder="Enter your username" 
              className="w-full input input-bordered h-12 bg-transparent text-white
              placeholder-black-500 border-gray-600 focus:border-blue-500 focus:outline-none 
              transition duration-200"
            />
          </div>
          
          <div>
            <label className="label p-2">
              <span className="text-base text-gray-300 font-medium">Password</span>
            </label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="w-full input input-bordered h-12 bg-transparent text-white 
              placeholder-black-500 border-gray-600 focus:border-blue-500 focus:outline-none 
              transition duration-200"
            />
          </div>
          
          <a 
            href="#" 
            className="text-sm text-gray-400 hover:text-blue-500 hover:underline 
            transition duration-200 inline-block"
          >
            Don't have an account?
          </a>

          <div>
            <button 
              className="btn btn-block h-12 bg-blue-600 hover:bg-blue-700 
              text-white font-semibold border-none transition duration-200 text-base"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;