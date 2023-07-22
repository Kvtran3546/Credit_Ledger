import React, { useState } from 'react';
import styles from '../style';

const Button = ({ content, imageSrc, borderColor, down, targetRef }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyles = {
    borderColor: borderColor,
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    transition: 'transform 0.3s ease',
  };

  const handleButtonClick = () => {
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      type='submit'
      style={buttonStyles}
      className={`flex flex-row justify-center items-center h-[70px] px-[69px] border-2 rounded-[60px]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleButtonClick}
    >
      <h2 className={`${styles.button} mr-5 text-gray-200`}>{content}</h2>
      <img src={imageSrc} alt="" className={`${down ? "arrowDown" : ""}`} />
    </button>
  );
};

export default Button;