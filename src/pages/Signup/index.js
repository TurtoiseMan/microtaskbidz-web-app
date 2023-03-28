import { useState } from "react";
import { publicPost } from "../../utilities/apiCaller";
import { Navbar } from "../../components";
import Footer from "../../components/Footer/Footer";
import style from "./styles";
import { NavLink, useNavigate } from "react-router-dom";
const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate=  useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
    }
    if (password != confirmPassword) {
      setError("Passwords do not match");
    }
    const user = { name: name, email: email, password: password };
    const response = await publicPost("/user", JSON.stringify(user))
    console.log(response)
    if(response.message==="Success")
    {
      navigate("/signin")
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-between">
      <Navbar />
      {/* <div className="flex w-full flex-col items-start justify-center rounded-lg"> */}
      {/* <form class="flex flex-col justify-between" onSubmit={handleSubmit}> */}
      <form
        class=" flex w-full flex-col justify-center rounded-lg border-2 border-gray-100 p-6 sm:mx-auto sm:max-w-sm sm:p-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-bold text-gray-700">Create an Account</h1>
        <label class="mb-1 block font-bold text-gray-500" for="name">
          Name:
        </label>
        <input
          class="w-full rounded border-2 border-gray-200 bg-gray-100 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
          id="name"
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label class="mb-1 block pr-4 font-bold text-gray-500" for="email">
          Email:
        </label>
        <input
          class="block w-full appearance-none rounded border-2 border-gray-200 bg-gray-100 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
          id="email"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label class="mb-1 block pr-4 font-bold text-gray-500 " for="password">
          Password:
        </label>
        <input
          class="mb-4 w-full appearance-none rounded border-2 border-gray-200 bg-gray-100 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
          id="password"
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <label class="mb-1 block pr-4 font-bold text-gray-500 " for="password">
          Confirm Password:
        </label>
        <input
          class="mb-4 w-full appearance-none rounded border-2 border-gray-200 bg-gray-100 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
          id="password"
          type="password"
          value={confirmPassword}
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && (
          <span class="text-xs italic text-red-500">
            {error}
          </span>
        )}

        <button
          class="focus:shadow-outline mx-24 rounded bg-blue-500 p-2 font-bold text-white shadow hover:bg-blue-400 focus:outline-none"
          type="submit"
        >
          Sign up
        </button>
        <p className="mt-2 text-center">don't have an account? <NavLink to="/signin" className=" text-gray-500 hover:text-cyan-500 focus:text-white focus:outline-none">Sign  In</NavLink></p>
      </form>
      {/* </div> */}
      <Footer />
    </div>
  );
};
export default Signup;
