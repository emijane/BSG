{/* Hero Component */}

function Hero () {
    return (
      <div>
        <div className="relative">
          {/* Transparent Navbar */}
          <nav className="absolute top-0 left-0 right-0 z-10 bg-transparent py-4 px-8 flex justify-between items-center">
            {/* Logo on the left */}
            <div className="text-white flex items-center">
              <img src="https://i.ibb.co/F5x2RMd/logo.webp" alt="Logo" className="h-24 w-28 object-contain" />
            </div>
            {/* Menu items on the right */}
            <ul className="flex space-x-5">
              <li className="text-white hover:text-orange-500 hover:-translate-y-1 transition ease-in-out delay-50 duration-300"><a href="https://store.steampowered.com/app/1998310/Max_Twist/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-steam text-2xl"></i></a></li>
              <li className="text-white hover:text-orange-500 hover:-translate-y-1 transition ease-in-out delay-50 duration-300"><a href="https://twitter.com/Black_Sun_Games" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter text-2xl"></i></a></li>
              <li className="text-white hover:text-orange-500 hover:-translate-y-1 transition ease-in-out delay-50 duration-300"><a href="https://www.patreon.com/blacksungames" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-patreon text-2xl"></i></a></li>
            </ul>
          </nav>

          {/* Hero Section */}
          <div className="bg-[url('https://i.ibb.co/yX8Z1vZ/hero.png')] bg-cover bg-center h-screen flex items-center justify-center relative z-0">
            <div className="text-white text-center max-w-2xl px-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-orange-200 inline-block text-transparent bg-clip-text">Black Sun Games</h1>
              <p className="text-base md:text-lg lg:text-base opacity-90">Reach Beyond Reality!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default Hero;