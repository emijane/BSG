import PropTypes from 'prop-types';

const MobileImageComponent = ({ title, description, imageUrl, order, showButton, buttonText, titleColor }) => {
  return (
    <div className={`flex gap-12 items-center ${order === 'last' ? 'xs:flex-col-reverse lg:flex-row' : 'xs:flex-col lg:flex-row'}`}>
      <div className={`flex-1 ${order === 'last' ? 'order-first' : 'order-last'}`}>
        <h2 className={`text-white xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl sm:text-center lg:text-left ${titleColor ? titleColor : ''}`}>
          {title}
        </h2>
        <p className="text-white leading-9 mt-3 sm:text-center lg:text-left">{description}</p>
        {showButton && <button className="bg-orange-500 hover:bg-orange-600 hover:-translate-y-1 transition ease-in-out delay-50 duration-300 font-semibold text-white py-3 px-5 rounded-full mt-3">{buttonText}</button>}
      </div>
      <div className="flex-1">
        <img className="h-auto rounded-3xl" src={imageUrl} alt="Gameplay" />
      </div>
    </div>
  );
};

MobileImageComponent.propTypes = {
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  order: PropTypes.oneOf(['first', 'last']),
  showButton: PropTypes.bool,
  buttonText: PropTypes.string,
};

MobileImageComponent.defaultProps = {
  showButton: false,
  buttonText: 'Default Button Text',
};

export default MobileImageComponent;