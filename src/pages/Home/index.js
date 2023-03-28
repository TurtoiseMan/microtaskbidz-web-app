import React from "react";
import { Navbar } from "../../components";
import Footer from "../../components/Footer/Footer";
import { authenticate } from "../../utilities/authenticate";
const Home = () => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Navbar authenticated={authenticate()} />
      <h1 className="my-6 text-center text-3xl font-bold">Welcome to React</h1>
      <Footer />
    </div>
  );
};

export default Home;
