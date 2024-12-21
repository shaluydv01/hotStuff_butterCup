import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-sans flex justify-center items-center flex-col gap-8 bg-gradient-to-tr from-orange-700 to-blue-700 w-full min-h-screen py-4 px-8">
      <p className="font-bold text-8xl text-white">You & Me</p>
      <div className="flex justify-center items-center gap-8">
        <button className="bg-blue-700 py-2 px-4 font-bold border-2 rounded-xl text-white hover:scale-110 hover:text-orange-700 hover:bg-black">
          <Link to="/hotstuff">HotStuff</Link>
        </button>
        <button className="bg-blue-700 py-2 px-4 font-bold border-2 rounded-xl text-white hover:scale-110  hover:text-orange-700 hover:bg-black">
          ButterCup
        </button>
      </div>
    </div>
  );
};

export default Home;
