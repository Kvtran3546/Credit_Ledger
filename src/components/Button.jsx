import React from 'react';
import styles from '../style';

// Define the enum for border color options
const BorderColorOptions = {
  Yellow: "#FFDB00",
  Purple: "#431F54",
  Blue: "#007BFF",
};

const Button = ({ content, imageSrc, borderColor }) => {
  // Validate if the borderColor is a valid option from the enum
  const validBorderColor = BorderColorOptions[borderColor] || BorderColorOptions.Yellow;

  return (
    <button
      type='submit'
      className={`flex flex-row justify-center items-center h-[70px] px-[69px] border-2 rounded-[60px] border-[${validBorderColor}]`}
    >
      <h2 className={`${styles.button} mr-5 text-gray-200`}>{content}</h2>
      <img src={imageSrc} alt="" className="" />
    </button>
  );
};

export default Button;