import { Carousel } from 'antd';
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const contentStyle = {
  height: '660px',
};

const carouselStyle = {
  margin: '0 auto',
};

const roundedImageContainerStyle = {
  borderRadius: '15px', // Set the desired border radius
  overflow: 'hidden', // Ensure that the border-radius is applied
};

function CarouselComponent () {
  useEffect(() => {
    AOS.init({
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/DgwTDWZ/stars.png')]">
        <div data-aos="fade-up" className='xl:max-w-[70%] lg:max-w-[80%] xs:max-w-[100%] px-5 m-auto'>
          <Carousel autoplay style={carouselStyle}>
            <div style={roundedImageContainerStyle}>
              <img className='object-cover w-full' src="https://i.ibb.co/3hmhq4p/Screenshot-32-High-Res.png" alt="" style={{ ...contentStyle, ...roundedImageContainerStyle }} />
            </div>
            <div style={roundedImageContainerStyle}>
              <img className='object-cover w-full' src="https://i.ibb.co/7Gm34ZH/Screenshot-33-High-Res.png" alt="" style={{ ...contentStyle, ...roundedImageContainerStyle }} />
            </div>
            <div style={roundedImageContainerStyle}>
              <img className='object-cover w-full' src="https://i.ibb.co/wB8m1zx/Screenshot-37-High-Res.png" alt="" style={{ ...contentStyle, ...roundedImageContainerStyle }} />
            </div>
            <div style={roundedImageContainerStyle}>
              <img className='object-cover w-full' src="https://i.ibb.co/0B3WQZK/Screenshot-44-High-Res.png" alt="" style={{ ...contentStyle, ...roundedImageContainerStyle }} />
            </div>
            <div style={roundedImageContainerStyle}>
              <img className='object-cover w-full' src="https://i.ibb.co/DW2rLkr/Screenshot-90-High-Res.png" alt="" style={{ ...contentStyle, ...roundedImageContainerStyle }} />
            </div>
            <div style={roundedImageContainerStyle}>
              <img className='object-cover w-full' src="https://i.ibb.co/X4GN195/Screenshot-101-High-Res.png" alt="" style={{ ...contentStyle, ...roundedImageContainerStyle }} />
            </div>
            <div style={roundedImageContainerStyle}>
              <img className='object-cover w-full' src="https://i.ibb.co/WP6yrtT/Screenshot-117-High-Res.png" alt="" style={{ ...contentStyle, ...roundedImageContainerStyle }} />
            </div>
            <div style={roundedImageContainerStyle}>
              <img className='object-cover w-full' src="https://i.ibb.co/109C1tG/Screenshot-123-High-Res.png" alt="" style={{ ...contentStyle, ...roundedImageContainerStyle }} />
            </div>
            <div style={roundedImageContainerStyle}>
              <img className='object-cover w-full' src="https://i.ibb.co/Yfcd0Sd/Screenshot-124-High-Res.png" alt="" style={{ ...contentStyle, ...roundedImageContainerStyle }} />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
    )
  }


export default CarouselComponent;
