import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Artist from "./components/Artist";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div>
        <nav className="p-4 bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 transition-colors duration-1000 ease-in-out sticky top-0 z-50 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo Section */}
            <Link to="/" className="flex items-center">
              <img
                src="https://scontent.fluh1-3.fna.fbcdn.net/v/t39.30808-6/458314898_122095196720519520_2460456887190488047_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Zx8DBdmT__EQ7kNvgGwsWEb&_nc_ht=scontent.fluh1-3.fna&_nc_gid=A9GIGLzyGUYF825OwUJYK1g&oh=00_AYCEr2kBwjFfKnYzxTdBrFz_CxLSMK6B4dvKU7DXdO2axg&oe=6712DA60" // Logo image
                alt="Melos Sounds Logo"
                className="h-12 w-12 rounded-full border-2 border-white mr-2 transition-transform duration-300 transform hover:scale-110"
              />
              <span className="text-4xl font-extrabold text-white hover:text-gray-300 transition-all duration-300 ease-in-out">
                Melos
              </span>
              <span className="ml-1 text-indigo-200 text-2xl">Sounds</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-white text-lg hover:text-indigo-300 transition duration-300 transform hover:scale-105"
              >
                Sell Your Music
              </Link>
              <Link
                to="/about"
                className="text-white text-lg hover:text-indigo-300 transition duration-300 transform hover:scale-105"
              >
                Music Publishing
              </Link>
              <a
                href="#artist-services"
                className="text-white text-lg hover:text-indigo-300 transition duration-300 transform hover:scale-105"
              >
                Artist Services
              </a>
              <Link
                to="/contact"
                className="text-white text-lg hover:text-indigo-300 transition duration-300 transform hover:scale-105"
              >
                Pricing
              </Link>
              <a
                href="#login"
                className="text-white text-lg hover:text-indigo-300 transition duration-300 transform hover:scale-105"
              >
                Login
              </a>
              <button className="bg-white text-purple-600 px-6 py-2 rounded-full hover:bg-indigo-50 transition-colors duration-300 transform hover:scale-105">
                Sign Up
              </button>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 space-y-4 text-center">
              <Link
                to="/"
                className="block text-white text-lg hover:text-gray-300 transition-colors duration-300 transform hover:scale-105"
              >
                Sell Your Music
              </Link>
              <Link
                to="/about"
                className="block text-white text-lg hover:text-gray-300 transition-colors duration-300 transform hover:scale-105"
              >
                Music Publishing
              </Link>
              <a
                href="#artist-services"
                className="block text-white text-lg hover:text-gray-300 transition-colors duration-300 transform hover:scale-105"
              >
                Artist Services
              </a>
              <Link
                to="/contact"
                className="block text-white text-lg hover:text-gray-300 transition-colors duration-300 transform hover:scale-105"
              >
                Pricing
              </Link>
              <a
                href="#login"
                className="block text-white text-lg hover:text-gray-300 transition-colors duration-300 transform hover:scale-105"
              >
                Login
              </a>
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-3 px-8 rounded-lg w-full hover:bg-gradient-to-l hover:from-indigo-500 hover:to-blue-600 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
                Sign Up
              </button>
            </div>
          )}
        </nav>

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/artist" element={Artist} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
