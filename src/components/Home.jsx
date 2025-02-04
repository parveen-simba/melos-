import React, { useState } from "react";
// import TestimonialCard from "./test.jsx";

const Home = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  // const [currentPage, setCurrentPage] = useState(1);
  // const testimonialsPerPage = 2;

  // const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  // const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  // const currentTestimonials = testimonials.slice(
  //   indexOfFirstTestimonial,
  //   indexOfLastTestimonial
  // );

  // // const gta =()=>{
  // //   document.getElementById("#id").demo=
  // // }
  // const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  // const nextPage = () => {
  //   setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  // };

  // const prevPage = () => {
  //   setCurrentPage((prev) => Math.max(prev - 1, 1));
  // };

  const [showStores, setShowStores] = useState(false);

  const handleButtonClick = () => {
    setShowStores(!showStores); // Toggle the visibility of the store box
  };
  return (
    <div>
      <section
        className={`py-20 text-center transition-colors duration-1000 ease-in-out ${
          isDarkMode
            ? "bg-gray-900 text-gray-100"
            : "bg-gradient-to-r from-blue-400 to-blue-100 text-white"
        }`}
      >
        <h1
          className={`text-4xl md:text-6xl font-bold ${
            isDarkMode ? "text-purple-400" : "text-gradient-purple"
          } transition-colors duration-1000 ease-in-out`}
        >
          Melos Sounds:
          <span className="text-white"> Sell Your Music Worldwide</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Get your music on Spotify, Apple Music, TikTok, YouTube,
          Instagram,Facebook, and more. Keep 100% ownership of your music and
          stay in control of your career.
        </p>
        <button className="mt-8 bg-purple-600 hover:bg-purple-500 px-8 py-3 rounded-full text-lg md:text-xl font-semibold transition-colors duration-1000 ease-in-out">
          Sign Up Now
        </button>

        {/* Icons Section */}
        <div className="flex justify-center mt-8 space-x-6">
          <i className="fa-brands fa-apple text-4xl md:text-5xl transition-transform duration-300 hover:scale-110"></i>
          <i className="fa-brands fa-spotify text-4xl md:text-5xl transition-transform duration-300 hover:scale-110"></i>
          <i className="fa-brands fa-youtube text-4xl md:text-5xl transition-transform duration-300 hover:scale-110"></i>
          <i className="fa-brands fa-tiktok text-4xl md:text-5xl transition-transform duration-300 hover:scale-110"></i>
          <i class="fa-brands fa-instagram text-4xl md:text-5xl transition-transform duration-300 hover:scale-110"></i>
          <i class="fa-brands fa-facebook text-4xl md:text-5xl transition-transform duration-300 hover:scale-110"></i>
        </div>
        <p className="mt-4 text-lg md:text-xl">Provided by dashboard</p>
      </section>

      {/* Section 2 */}
      <section
        className={`py-20 px-4 md:px-20 transition-colors duration-1000 ease-in-out ${
          isDarkMode
            ? "bg-gray-800 text-gray-100"
            : "bg-gradient-to-r from-white to-gray-100 text-gray-700"
        }`}
      >
        <div className="grid md:grid-cols-2 items-center gap-8">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1
              className={`text-4xl md:text-6xl font-bold ${
                isDarkMode ? "text-purple-300" : "text-gradient-purple"
              } transition-colors duration-1000 ease-in-out`}
            >
              <span className={isDarkMode ? "text-gray-200" : "text-black"}>
                Unlimited Distribution
              </span>{" "}
              Starting Free
            </h1>
            <p
              className={`mt-4 text-lg md:text-xl ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Increase the reach of your music across the most popular stores &
              platforms like Spotify, Apple Music, TikTok, YouTube, and more.
            </p>
            <p
              className={`mt-4 text-lg md:text-xl ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Keep 100% ownership of your music, maintaining creative control
              and authority in your music career.
            </p>
            <button
              onClick={handleButtonClick}
              className={`mt-8 bg-purple-600 hover:bg-purple-500 px-8 py-3 rounded-full text-lg md:text-xl font-semibold transition-colors duration-1000 ease-in-out ${
                isDarkMode ? "text-white" : "text-white"
              }`}
            >
              View All 150+ Stores
            </button>
          </div>

          {/* Right YouTube Video */}
          <div className="flex justify-center">
            <iframe
              className="w-full max-w-md h-64 md:h-80 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/0YutWEaGOs4"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Stores List (White Box) */}
        {showStores && (
          <div className="mt-8 p-8 bg-white rounded-lg shadow-lg text-gray-800 transition-all duration-700 ease-in-out transform scale-100">
            <h2 className="text-2xl font-semibold mb-4">Available Stores:</h2>
            <ul className="grid grid-cols-2 gap-6 md:grid-cols-3 text-lg">
              {[
                "7 Digital",
                "AWA",
                "Amazon Music",
                "Anghami",
                "Audible Magic Fingerprinting",
                "BMAT",
                "Boomplay",
                "Claro musica",
                "Deezer",
                "Facebook Rights Manager",
                "Gaana",
                "Gracenote",
                "Hungama",
                "iHeart",
                "iTunes/Apple Music",
                "JOOX",
                "Jaxsta",
                "JioSaavn",
                "KDigital Media",
                "Kanjian",
                "Kkbox",
                "Lickd",
                "MixCloud",
                "NetEase Cloud Music",
                "Pandora",
                "Peloton",
                "Resso",
                "Rhapsody/Napster",
                "SoundCloud",
                "Spotify",
                "Tencent",
                "Tidal",
                "TikTok",
                "Twitch",
                "Wynk",
                "YouTube Audio Content ID",
                "YouTube Music",
              ].map((store, index) => (
                <li
                  key={index}
                  className="font-bold p-2 transition duration-300 ease-in-out transform hover:scale-105 hover:text-purple-600"
                >
                  {store}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section
        className={`py-20 text-center transition-colors duration-1000 ease-in-out ${
          isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
        }`}
      >
        <h1
          className={`text-4xl md:text-6xl font-bold transition-colors duration-1000 ease-in-out ${
            isDarkMode ? "text-purple-300" : "text-purple-600"
          }`}
        >
          What is Melos Sounds?
        </h1>
        <p
          className={`mt-4 text-lg md:text-xl transition-colors duration-1000 ease-in-out ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Melos Sounds, a part of Believe, is the global platform for
          independent musicians to build audiences and careers - with technology
          and services across distribution, publishing administration and a
          range of promotional services.
        </p>
        <button
          className={`mt-8 px-8 py-3 rounded-full text-lg md:text-xl font-semibold transition-colors duration-1000 ease-in-out ${
            isDarkMode
              ? "bg-purple-600 text-white hover:bg-purple-700"
              : "bg-purple-500 text-white hover:bg-purple-600"
          }`}
        >
          Sell Your Music Now
        </button>
      </section>
      <section
        className={`py-20 flex flex-col md:flex-row items-center transition-colors duration-1000 ease-in-out ${
          isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
        }`}
      >
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="https://scontent.fixc1-2.fna.fbcdn.net/v/t39.30808-6/462703515_122116293752512725_6351772820447665758_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=CDhNUnl1CjYQ7kNvgHxyOXK&_nc_zt=23&_nc_ht=scontent.fixc1-2.fna&_nc_gid=A5XOfaQNDVMtuJ8kgob-cdx&oh=00_AYBkcbWHhe__ToV7L86bVBJ-HvY-kxuekjQlczyHAoQnqQ&oe=67131476" // Replace with your image URL
            alt="Why Choose Melos Sounds"
            className="rounded-lg shadow-lg w-full max-w-md transform -translate-x-10 opacity-0 transition-transform duration-700 ease-in-out" // Initial hidden state
            style={{ animation: "slideIn 0.7s forwards" }} // Custom animation
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left px-4 md:px-6">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-1000 ease-in-out ${
              isDarkMode ? "text-purple-300" : "text-purple-600"
            }`}
          >
            Why Choose Melos Sounds
          </h2>
          <ul
            className={`list-disc list-inside text-lg mb-6 ${
              isDarkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            <li>Unlimited music distribution worldwide.</li>
            <li>
              Direct access to 150+ digital stores and streaming services.
            </li>
            <li>No annual fee for releases on social platforms.</li>
            <li>Detailed sales data to guide your music strategy.</li>
          </ul>
          <button
            className={`bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-1000 ease-in-out ${
              isDarkMode ? "text-white" : "text-white"
            }`}
          >
            Join Melos Sounds
          </button>
        </div>

        {/* Add a style tag for the custom animation */}
        <style jsx>{`
          @keyframes slideIn {
            from {
              transform: translateX(-30px);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}</style>
      </section>

      <div className="bg-gray-900 text-white h-auto flex flex-col items-center justify-center py-10">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto p-4 space-y-6 md:space-y-0 md:space-x-8">
          {/* Left section with text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
              Be Your Own{" "}
              <span className="text-gradient bg-gradient-to-r from-blue-500 to-purple-500">
                Graphic Designer
              </span>
            </h1>
            <p className="text-sm md:text-md mb-3">
              Create your Cover Art with Layouts, Images, Presets, Filters,
              Fonts, and Overlays.
            </p>
            <p className="text-gray-400 text-xs mb-4">
              Customize your Melos Sounds Cover Art during the upload process.
            </p>

            {/* Buttons */}
            <div className="flex justify-center md:justify-start space-x-2">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-md font-semibold text-xs md:text-sm hover:from-blue-600 hover:to-purple-600 transition duration-300">
                SIGN UP NOW
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold text-xs md:text-sm hover:bg-blue-700 transition duration-300">
                WATCH VIDEO
              </button>
            </div>
          </div>

          {/* Right section with image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm">
              <img
                src="https://deeplor.s3.us-west-2.amazonaws.com/matting_original/2024/10/14/02cf30dda7db40d29a2ca08b82175d9a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241014T172321Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10800&X-Amz-Credential=AKIAROYXHKZUSZONTWIG%2F20241014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=94ef52922b524f5873705bd7d43f0e83bcb19c6114c3fd0cf478fce5e61a23e4"
                alt="Album cover"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
      <section
        className={`py-16 px-4 md:px-8 lg:px-16 xl:px-32 text-center transition-colors duration-1000 ease-in-out ${
          isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-extrabold mb-8 transition-colors duration-1000 ease-in-out ${
              isDarkMode ? "text-purple-400" : "text-purple-700"
            }`}
          >
            How to Sell Your Music Online
          </h2>
          <p
            className={`text-lg md:text-xl mb-8 leading-relaxed transition-colors duration-1000 ease-in-out ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Before Melos Sounds, artists needed a label to get their music sold
            online. In 2006, we disrupted the industry by partnering directly
            with Digital Stores to allow any musician to sell their songs
            worldwide. Today, Melos Sounds is the world's leading digital music
            aggregator. Choose an unlimited distribution plan, upload your
            music, and we'll do the rest. Your music will hit top digital
            stores, like Spotify and Apple Music, in no time.
          </p>
          <button
            className={`bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-300 ease-in-out ${
              isDarkMode ? "text-white" : "text-white"
            }`}
          >
            Melos Sounds Pricing
          </button>
        </div>
      </section>
      <div
        className={`flex flex-col md:flex-row justify-center items-center p-8 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
        }`}
      >
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Be Your Own Graphic Designer
          </h1>
          <p className="text-lg md:text-xl mb-6 leading-relaxed">
            Create your Cover Art with Layouts, Images, Presets, Filters, Fonts,
            and Overlays
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-4 mb-6">
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded shadow-md transition-colors duration-300 ease-in-out">
              SIGN UP NOW
            </button>
            <button className="bg-transparent border-2 border-black hover:bg-black hover:text-white text-black font-semibold py-2 px-6 rounded shadow-md transition-colors duration-300 ease-in-out">
              WATCH VIDEO
            </button>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:ml-12 relative w-full md:w-1/2">
          {/* Image container */}
          <div className="relative overflow-hidden rounded-lg border border-gray-300 bg-gray-200">
            {/* Replace src with your image path */}
            <img
              src="https://www.billboard.com/wp-content/uploads/2023/08/Best-Album-Covers-of-All-Time-billboard-1548.jpg?w=875&h=583&crop=1"
              alt="Album Cover Example"
              className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full text-white">
              <p className="font-bold text-lg">ALBUM NAME</p>
              <p className="text-gray-300 text-sm">Artist Name</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white p-10">
        <h1 className="text-3xl font-bold text-center mb-10">
          What Are <span className="text-blue-500">Artists</span> Saying About
          Melos Sounds?
        </h1>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              img={testimonial.img}
              review={testimonial.review}
            />
          ))}
        </div> */}
        {/* 
        <div className="flex justify-center mt-8">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="mr-4 px-4 py-2 bg-gray-700 hover:bg-gray-600"
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600"
          >
            Next
          </button>
        </div> */}
      </div>
      <section className="bg-gray-900 text-white py-16 px-8 md:px-24 lg:px-32 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Want to Reach More Fans <br /> and Boost Your Streams?
          </h1>
          <p className="text-xl font-medium mb-4">
            Melos Sounds Accelerator empowers independent artists to grow their
            audience and increase streams.
          </p>
          <p className="text-lg mb-6">
            Over <span className="font-semibold">80,000 artists</span> have
            joined, with nearly
            <span className="font-semibold"> 10,000</span> seeing an average
            stream increase of
            <span className="font-semibold"> +143%</span> compared to the
            previous quarter.
            <br />
            <br />
            The Accelerator program enhances visibility and expands global
            reach.
            <br />
            <br />
            See the results for yourself.
          </p>
          <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-500 transition">
            Learn More
          </button>
        </div>

        {/* Right Section - Graphic Content */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="flex items-center justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4nWd2FlFwmKvwuRlsM2vzHJ-d0qPOqdilQw&s"
              alt="Growth Graph"
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>
      <div className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                Upload Music and Get Money
              </h2>
              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                Whether you're an established artist or just getting started,
                Melos Sounds can help you take your career into your own hands
                and start selling your music on Spotify and iTunes.
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Create an account, upload your music, send your release to
                stores, and that's it. We'll send your music to the stores and
                streaming services where you want to be available, and put every
                penny of your sales earnings right into your Melos Sounds
                account. It's never been easier to get your music out there.
              </p>
              <div className="mt-8">
                <a
                  href="https://www.google.com" // Replace with your sign-up link
                  className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 transition duration-300"
                >
                  Sign Up Now
                </a>
              </div>
            </div>
            <div>
              <img
                src="https://deeplor.s3.us-west-2.amazonaws.com/matting_original/2024/10/14/41e241154bd94ce280ca4e1d0c9df455.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20241014T172551Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10800&X-Amz-Credential=AKIAROYXHKZUSZONTWIG%2F20241014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=5f230a4c26f10acceb734429491103c41fecedda1f6c12d21947950f8fb985f9" // Replace with your image URL
                alt="Music Upload"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h5 class="text-lg font-semibold mb-4">About Melos Sounds</h5>
              <ul>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    About Melos Sounds
                  </a>
                </li>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Leadership
                  </a>
                </li>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 class="text-lg font-semibold mb-4">
                Make Money With Melos Sounds
              </h5>
              <ul>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Create Your Account
                  </a>
                </li>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Sell Your Music
                  </a>
                </li>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Artist Services
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 class="text-lg font-semibold mb-4">Melos Sounds Community</h5>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/people/Melos-Sounds/61565381763765/?mibextid=LQQJ4d"
                    class="hover:underline"
                    target="blank"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/melossounds/profilecard/?igsh=MWVwcWFwZnY5eThpZw%3D%3D"
                    class="hover:underline"
                    target="blank"
                  >
                    X (Formerly Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/melossounds/profilecard/?igsh=MWVwcWFwZnY5eThpZw%3D%3D"
                    class="hover:underline"
                    target="blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=0YutWEaGOs4"
                    class="hover:underline"
                    target="blank"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 class="text-lg font-semibold mb-4">Account Services</h5>
              <ul>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Login
                  </a>
                </li>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Create Your Account
                  </a>
                </li>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="text-center mt-8 border-t border-gray-700 pt-4">
            <p class="text-sm">
              &copy; 2024 Melos Sounds. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
