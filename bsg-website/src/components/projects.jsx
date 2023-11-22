{/* Projects Component */}

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';

function Projects () {
  useEffect(() => {
    AOS.init({
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, []);

    return (
      <div data-aos="fade-up" className='mt-20 flex flex-col justify-center items-center'>
        <div className="max-w-2xl mx-auto text-center px-4">
            <h2 className='text-orange-300 xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-10'>Upcoming VR Projects</h2>
            <p className='text-white md:text-lg lg:text-base opacity-80 mt-5'>Release Date: 4th Quarter 2023</p>
            <a href="https://store.steampowered.com/app/1998310/Max_Twist/" target="_blank" rel="noopener noreferrer">
              <button className="bg-orange-500 hover:bg-orange-600 hover:-translate-y-1 transition ease-in-out delay-50 duration-300 font-semibold text-white py-3 px-5 rounded-full mt-3">Check us out on Steam!</button>
            </a>
        </div>
        <div className='flex gap-12 xl:max-w-[60%] lg:max-w-[80%] md:max-w-[80%] sm:max-w-[90%] sm:flex-row sm:px-5 xs:flex-col xs:px-10 mt-10'>
            <div className='text-white outline flex-1 p-8 rounded-2xl'>
                <h3 className='text-2xl'>Cat Defenders in Space</h3>
                <p className='mt-3'>Cats have powered up to defend the Earth against an alien invasion, just as they did 6000 years ago. Fly through space while swiping your paws to destroy alien ships and defend the human space station. Will the aliens succeed against these massive cat defenders this time?</p>
            </div>
            <div className='text-white outline flex-1 p-8 rounded-2xl'>
                <h3 className='text-2xl'>The Vault: Alien Coliseum</h3>
                <p className='mt-3'>You have been captured and forced to fight various kinds of robots and aliens in a massive arena. Survive gladiatorial combat while an apex alien species watches for entertainment.</p>
            </div>
        </div>
      </div>
    )
  }

  export default Projects;