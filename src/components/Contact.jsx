import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <div className="max-w-sm bg-gray-800 text-center p-8 rounded-lg shadow-2xl border border-gray-700 transition-transform transform hover:scale-105 duration-500 ease-in-out">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6">
          Choose the Right Plan for Your{" "}
          <span className="text-white">Music Distribution</span>
        </h1>
        <h2 className="text-3xl font-bold text-green-400 mb-2">NEW ARTIST</h2>
        <p className="text-5xl font-extrabold text-white mb-4">Free</p>
        <p className="text-gray-400 mb-6">
          Kick-start your career with unlimited releases to{" "}
          <span className="text-green-500">Social Platforms</span>.
        </p>
        <button className="bg-green-500 text-gray-900 text-xl font-semibold py-3 px-6 rounded-full hover:bg-green-400 transition-colors duration-300 ease-in-out shadow-md transform hover:scale-105">
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Contact;
