import React from 'react'
import logo from '../assets/logo.svg'
import styles from '../style'
import arrowleft from '../assets/arrowleft.svg'
import Button from './Button'
const About = () => {
  return (
    <div className='w-[960px] h-[773px] flex justify-center flex-col items-center'>
      <img src={logo} alt='logo' className='w-[165px] h-[161px]'/>
      <h1
        className={`${styles.heading1} text-[102px] bg-clip-text text-transparent mt-10`}
        style={{
          backgroundClip: "text",
          backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.79) 0%, rgba(247, 242, 4, 0.79) 100%)",
        }}>
        Credit Ledger
      </h1>
      <div className='flex justify-center items-center flex-col w-[60%]'>
        <h1 className={`${styles.heading1} mt-[50px] bg-clip-text text-transparent bg-white bg-opacity-[.90]`}>Credit Education with a Purpose</h1>
        <p className={`${styles.paragraph} mt-[10px]`}>Your Credit, Your Key to More Benefits. Learn How to Build It Better!</p>
      </div>
      <div className='w-[65%] mt-10 flex flex-row justify-between'>
        <Button content="Learn more" imageSrc={arrowleft} borderColor="Yellow"/>
        <Button content="Survey" imageSrc={arrowleft} borderColor="Yellow"/>
      </div>
    </div>
  )
}

export default About