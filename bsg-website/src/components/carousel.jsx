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

    <div className='bg-stars'>
      <div data-aos="fade-up" className='xl:max-w-[70%] lg:max-w-[80%] xs:max-w-[100%] px-5 m-auto'>
        <Carousel autoplay style={carouselStyle}>
          <div style={roundedImageContainerStyle}>
            <img className='object-cover w-full' src="https://i.ibb.co/8csPS7z/Screenshot-32-High-Res.png" alt="" style={{ ...contentStyle, ...roundedImageContainerStyle }} />
          </div>
          <div style={roundedImageContainerStyle}>
            <img className='object-cover w-full' src="https://i.ibb.co/QJ1Dc0v/Screenshot-33-High-Res.png" alt="" style={{ ...contentStyle, ...roundedImageContainerStyle }} />
          </div>
          <div style={roundedImageContainerStyle}>
            <img className='object-cover w-full' src="https://i.ibb.co/YQcJgzk/Screenshot-37-High-Res.png" alt="" style={{ ...contentStyle, ...roundedImageContainerStyle }} />
          </div>
          <div style={roundedImageContainerStyle}>
            <img className='object-cover w-full' src="https://i.ibb.co/F0yf7Ht/Screenshot-44-High-Res.png" alt="" style={{ ...contentStyle, ...roundedImageContainerStyle }} />
          </div>
          <div style={roundedImageContainerStyle}>
            <img className='object-cover w-full' src="https://i.ibb.co/P6YzST7/Screenshot-90-High-Res.png" alt="" style={{ ...contentStyle, ...roundedImageContainerStyle }} />
          </div>
          <div style={roundedImageContainerStyle}>
            <img className='object-cover w-full' src="https://i.ibb.co/4ZZ06F6/Screenshot-101-High-Res.png" alt="" style={{ ...contentStyle, ...roundedImageContainerStyle }} />
          </div>
          <div style={roundedImageContainerStyle}>
            <img className='object-cover w-full' src="https://i.ibb.co/cgsLKXh/Screenshot-117-High-Res.png" alt="" style={{ ...contentStyle, ...roundedImageContainerStyle }} />
          </div>
          <div style={roundedImageContainerStyle}>
            <img className='object-cover w-full' src="https://i.ibb.co/CmCt23g/Screenshot-123-High-Res.png" alt="" style={{ ...contentStyle, ...roundedImageContainerStyle }} />
          </div>
          <div style={roundedImageContainerStyle}>
            <img className='object-cover w-full' src="https://i.ibb.co/Qr2qsT8/Screenshot-124-High-Res.png" alt="" style={{ ...contentStyle, ...roundedImageContainerStyle }} />
          </div>
        </Carousel>
      </div>
    </div>
    )
  }


export default CarouselComponent;
