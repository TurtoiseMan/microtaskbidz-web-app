import { useState } from "react";
import { publicPost } from "../../utilities/apiCaller";
import { Navbar } from "../../components";
import Footer from "../../components/Footer/Footer"
import { useNavigate } from "react-router-dom";
// import style from "./styles";
var response
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email: email, password: password };
    response = await publicPost("/user/signin", JSON.stringify(user));
    console.log(response);
    if(response.status === "success")
    {
        sessionStorage.setItem("token", response.token)
        navigate("/")

    }
  };
  return (
    <div className="flex h-screen flex-col items-center justify-between">
      <Navbar />

      <form
        class=" flex w-full flex-col justify-center rounded-lg border-2 border-gray-100 p-6 sm:mx-auto sm:max-w-sm sm:p-8"
        onSubmit={handleSubmit}
      >
        <h1 className="text-xl font-bold text-gray-700">Sign in</h1>

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

        <button
          class="focus:shadow-outline mx-24 rounded bg-blue-500 p-2 font-bold text-white shadow hover:bg-blue-400 focus:outline-none"
          type="submit"
        >
          Sign in
        </button>
        <p className="mt-2 text-center">don't have an account? <a href="/signup" className=" text-gray-500 hover:text-cyan-500 focus:text-white focus:outline-none">Sign Up</a></p>
      </form>
      {/* </div> */}
      <Footer />
    </div>
  );
};
export default Signin;
