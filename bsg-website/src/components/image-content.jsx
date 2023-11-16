import PropTypes from 'prop-types';

const ImageComponent = ({ title, description, imageUrl, order }) => {
  return (
    <div className={`flex gap-12 items-center ${order === 'last' ? 'xs:flex-col-reverse lg:flex-row' : 'xs:flex-col lg:flex-row'}`}>
      <div className={`max-w-2xl ${order === 'last' ? 'order-first' : 'order-last'}`}>
        <h2 className="text-white xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl sm:text-center lg:text-left">{title}</h2>
        <p className="text-white leading-9 mt-3 sm:text-center sm:text-center lg:text-left">{description}</p>
      </div>
      <div>
        <img className="max-w-full h-auto rounded-3xl" src={imageUrl} alt="Gameplay" />
      </div>
    </div>
  );
};

ImageComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  order: PropTypes.oneOf(['first', 'last']),
};

export default ImageComponent;





{/*
    <ImageComponent
        title="Lorem Ipsum Dolor Amet"
        description="In this futuristic Xtreme Sport, players mount hover boards and spiral down a tube in space full of obstacles. Smoke speed records and set new max twists to a heart-pumping soundtrack. Inspired by games like 1080° Snowboarding, Max Twist takes the concept to the space age."
        imageUrl="./src/images/gameplay-1.png"
    />
*/}