const Login = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

      <input
        type="text"
        placeholder="Username"
        className="w-full mb-3 px-3 py-2 border rounded"
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 px-3 py-2 border rounded"
      />

      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Login
      </button>
    </div>
  );
};

export default Login;
