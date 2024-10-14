import React from "react";

const About = () => {
  const projects = [
    { title: "Fortnite", img: "fortnite.jpg" },
    { title: "Vikings", img: "vikings.jpg" },
    { title: "SpongeBob", img: "spongebob.jpg" },
    { title: "Rock Band", img: "rockband.jpg" },
    { title: "Finding Ohana", img: "finding_ohana.jpg" },
    { title: "Judas and the Black Messiah", img: "judas.jpg" },
    { title: "Zola", img: "zola.jpg" },
    { title: "Ramy", img: "ramy.jpg" },
  ];

  return (
    <div>
      <section class="py-24 text-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 transition-all duration-1000 ease-in-out">
        <h1 class="text-5xl md:text-7xl font-extrabold text-white">
          Melos Sounds: <span class="text-yellow-200">Publishing</span>
        </h1>
        <p class="mt-6 text-lg md:text-2xl text-white leading-relaxed px-6 md:px-40">
          If you’ve written songs, they may have already earned you money. Don’t
          leave royalties on the table. Collect what’s yours with Melos Sounds
          Publishing.
        </p>
        <button class="mt-10 bg-yellow-400 hover:bg-yellow-300 text-gray-900 text-xl font-semibold py-4 px-10 rounded-full shadow-lg transition-all duration-500 hover:scale-105">
          GET STARTED
        </button>
      </section>

      <section class="py-24 text-center bg-gray-50 relative overflow-hidden transition-all duration-1000 ease-in-out">
        <div class="absolute inset-0 bg-gradient-to-b from-purple-200 to-white opacity-75 transform rotate-45 scale-150"></div>

        <div class="relative z-10">
          <h1 class="text-5xl md:text-7xl font-extrabold text-gray-900">
            <span class="text-purple-600">What Is</span> Music Publishing?
          </h1>
          <p class="mt-6 text-lg md:text-2xl text-gray-700 leading-relaxed px-6 md:px-40">
            Music publishing is all about managing the royalties earned from the
            music you write.
          </p>
          <p class="mt-6 text-lg md:text-xl text-gray-600 px-4 md:px-20 leading-relaxed">
            When you write a song, and it’s used commercially, you’re owed
            royalties. That means your original songs generate revenue with
            every stream on Spotify, video creation on TikTok, YouTube views,
            radio spins, or live performances worldwide.
          </p>
          <p class="mt-6 text-lg md:text-xl text-gray-600 px-4 md:px-20 leading-relaxed">
            That’s a lot to keep track of. Melos Sounds Publishing can help you
            get the royalties you’re owed.
          </p>
        </div>
      </section>

      <div className="bg-gray-900 text-white py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Get Covered
            </span>{" "}
            with Melos Sounds Publishing
          </h1>
          <p className="text-gray-400 mt-4">
            Melos Sounds Publishing has direct memberships with pay sources for
            musicians worldwide. That means we get you paid faster than ever
            before.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {/* 1st Item */}
          <div className="text-center">
            <div className="text-pink-500 text-6xl mb-4">🎵</div>
            <h3 className="text-xl font-semibold">
              Keep 100% of Your Copyrights
            </h3>
            <p className="text-gray-400 mt-2">
              Collect your royalties without sacrificing ownership.
            </p>
          </div>

          {/* 2nd Item */}
          <div className="text-center">
            <div className="text-purple-500 text-6xl mb-4">🎶</div>
            <h3 className="text-xl font-semibold">
              Register Unlimited Songs Worldwide
            </h3>
            <p className="text-gray-400 mt-2">
              Melos Sounds Publishing collects from every paying territory.
            </p>
          </div>

          {/* 3rd Item */}
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">🎧</div>
            <h3 className="text-xl font-semibold">
              Collect Royalties from Spotify, Apple Music, & more
            </h3>
            <p className="text-gray-400 mt-2">
              Earn mechanical and performance royalties with each stream.
            </p>
          </div>

          {/* 4th Item */}
          <div className="text-center">
            <div className="text-green-500 text-6xl mb-4">✔️</div>
            <h3 className="text-xl font-semibold">Expert Support</h3>
            <p className="text-gray-400 mt-2">
              Navigate the music industry with experts by your side.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white py-16">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold">
            Collect All of Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
              Royalties
            </span>
          </h1>
          <p className="text-gray-400 mt-4">
            We work with thousands of pay sources worldwide to get you all the
            revenue you deserve. Spend more time making and releasing music, and
            let Melos Sounds collect your publishing royalties. Melos Sounds
            Publishing will collect:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {/* 1st Column */}
          <div className="text-center">
            <div className="text-pink-500 text-6xl mb-4">🎧</div>
            <h3 className="text-lg font-semibold">
              Streams on DSPs like Spotify and Apple Music
            </h3>
            <p className="text-gray-400 mt-2">
              Every stream on platforms like Spotify, Apple Music, Amazon Music,
              Tidal, and others generates mechanical royalties.
            </p>
          </div>

          {/* 2nd Column */}
          <div className="text-center">
            <div className="text-pink-500 text-6xl mb-4">📺</div>
            <h3 className="text-lg font-semibold">
              Broadcasts on TV, Radio, in Restaurants, Bars and More
            </h3>
            <p className="text-gray-400 mt-2">
              When your music is broadcast on radio, satellite radio, in bars,
              restaurants, concert venues, and more, it generates performance
              royalties – we help you collect them.
            </p>
          </div>

          {/* 3rd Column */}
          <div className="text-center">
            <div className="text-pink-500 text-6xl mb-4">📱</div>
            <h3 className="text-lg font-semibold">YouTube and Social Media</h3>
            <p className="text-gray-400 mt-2">
              TikTok videos and YouTube uploads generate both a performance and
              mechanical reproduction royalty.
            </p>
          </div>

          {/* 4th Column */}
          <div className="text-center">
            <div className="text-pink-500 text-6xl mb-4">🎶</div>
            <h3 className="text-lg font-semibold">Printed Music and Lyrics</h3>
            <p className="text-gray-400 mt-2">
              When your music or lyrics appear in sheet music or even appear
              online, your songs earn royalties – don't miss out on tons of
              global pay sources!
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-2 px-6 rounded-full text-lg font-bold">
            Collect Songwriter Royalties
          </button>
        </div>
      </div>
      <section className="py-20 text-center transition-colors duration-1000 ease-in-out">
        <h1 className="text-4xl md:text-5xl font-bold">
          The Publishing Dashboard
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          We’ve upgraded our publishing dashboard to make maximizing your
          publishing earnings easier than ever.
        </p>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-20">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Seamless Song Management</h3>
            <p>
              Connect your Spotify for Artists profile to register songs you’ve
              distributed. Seamlessly register all your distributed songs
              automatically.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Advanced Analytics</h3>
            <p>
              See how your songs are performing on various platforms and in each
              country.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Collect All Your Royalties
            </h3>
            <p>
              Access your publishing royalties and collect royalties for other
              songwriters you work with (See FAQ for further details).
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Quarterly Royalty Statements
            </h3>
            <p>
              The information you need in a timely fashion – right at your
              fingertips.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-black text-white min-h-screen">
        <header className="text-center p-10">
          <h1 className="text-4xl font-bold">Melos Sounds Sync</h1>
          <p className="text-lg mt-4">
            Get Your Music in TV, Movies, Games, & More
          </p>
          <p className="mt-2">
            We work with music supervisors every day &mdash; and Melos Sounds
            songwriters have been a part of every project you see below.
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-10 py-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-md overflow-hidden shadow-md"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <p className="p-4 text-center font-medium">{project.title}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            SIGN UP NOW
          </button>
        </div>
      </div>
      <div className="dark">
        {/* Outer div with background and text color switching */}
        <div className="bg-black text-white min-h-screen flex items-center justify-center">
          {/* Main Container */}
          <div className="container mx-auto px-4 py-10">
            {/* Header */}
            <header className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {/* <span className="text-red-500">Our </span>
                <span className="text-red-500">Music </span>
                <span className="text-purple-500">Publishing </span> */}

                <span className="text-purple-500">Free</span>
              </h1>
            </header>

            {/* Pricing Card */}
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg text-center transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl flex flex-col justify-center items-center mx-auto max-w-xs">
              <h2 className="text-5xl font-bold text-red-500">15%</h2>
              <p className="mt-2 font-semibold">Commission</p>
              <p className="text-sm">Unlimited Songs </p>
              <p className="text-white"> Artist and label </p>
            </div>

            {/* Call-to-action */}
            <div className="flex justify-center mt-10">
              <button className="bg-purple-600 hover:bg-purple-700 transition duration-300 ease-in-out text-white font-bold py-2 px-6 rounded-full transform hover:scale-105">
                GET STARTED
              </button>
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
                  <a href="www.google.com" class="hover:underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    X (Formerly Twitter)
                  </a>
                </li>
                <li>
                  <a href="www.google.com" class="hover:underline">
                    Instagram
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

export default About;
