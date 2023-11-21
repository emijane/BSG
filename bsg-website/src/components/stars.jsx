{/* import ImageComponent from "./image-content";*/}
import ImageComponent from "./image-content";
import Video from "./video";
import Carousel from "./carousel";
import Projects from "./projects";
import MobileImageComponent from "./mobile-image-content";
import Developers from "./developers";

import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from 'react';
function Stars() {
  useEffect(() => {
    AOS.init({
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, []);

    return (
        <div className="relative mt-[-1px]">
            {/* Stars background */}
            <div className="bg-[url('https://i.ibb.co/DgwTDWZ/stars.png')] bg-cover bg-center relative z-0 bg-repeat flex flex-col justify-center gap-20 items-center min-h-screen pb-20"> {/* Updated this line */}
                <div data-aos="fade-up" className="max-w-2xl mx-auto text-center px-4">
                    <h2 className='text-orange-300 xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-10'>Featured Game: Max Twist</h2>
                    <p className='text-white md:text-lg lg:text-base opacity-80 mt-4'>Release Date: 4th Quarter 2023</p>
                    <button className="bg-orange-500 hover:bg-orange-600 hover:-translate-y-1 transition ease-in-out delay-50 duration-300 font-semibold text-white py-3 px-5 rounded-full mt-4">Check us out on Steam!</button>
                </div>
                <Video />
                <div className='flex flex-col gap-20 xl:max-w-[75%] lg:max-w-[100%] sm:max-w-[100%] px-10'>
                    <ImageComponent
                        title="Far in the future Space Age"
                        description="Twist Boarders mount hover boards and spiral down a tube in space trying to avoid obstacles, and beat their best times!"
                        imageUrl="https://i.ibb.co/MhjHCTg/gameplay1.png"
                        order="first" // or order="first"
                    />
                    <ImageComponent
                        title="Start Off By Boosting Down the Track"                        
                        description="Use boost to increase your speed by using both triggers one on each hand. Try not to hit the rocks!"
                        imageUrl="https://i.ibb.co/r3ymwdY/gameplay2.png"
                        order="last" // or order="first"
                    />
                    <ImageComponent
                        title="Show Off Your Skills"
                        description="Set new Max Twists to an exhilarating soundtrack. Inspired by other sports vr games, this game is unlike any in the genre! "
                        imageUrl="https://i.ibb.co/bKHC2Gt/gameplay3.png"
                        order="first" // or order="first"
                    />
                </div>
                <Carousel/>
                <Projects/>
                <div data-aos="fade-up" className='flex flex-col gap-20 xl:max-w-[60%] lg:max-w-[100%] sm:max-w-[100%] px-10'>
                    <MobileImageComponent
                        title="Our Mission"
                        titleColor="text-orange-300" // Customize the title color
                        description="We as designers, developers, and friends intend to create the best games possible, and strive to build upon an environment of strength and encouragement. We will do our best to create games that we enjoy playing, and hope to create masterpieces that others will love and enjoy using the best technology and people available to us in the process. Our only real mission is to create visions of our imagination, and have fun doing it. Feel free to support our creativity Via Patreon."
                        imageUrl="https://i.ibb.co/T2f8Rc7/poster.png"
                        order="first" // or order="last"
                        showButton={true} // Set to true to show the button
                        buttonText="Find us on Patreon" // Customize the button text
                        />
                </div>
                <Developers/>
            </div>
        </div>
    )
  }

export default Stars;