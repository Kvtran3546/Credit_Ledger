import React from 'react'
import logo from '../assets/logo.png'
import styles from '../style'
const About = () => {
  return (
    <div className='w-[960px] h-[700px] flex justify-center flex-col items-center mt-[100px]'>
      <img src={logo} alt='logo' className='w-[165px] h-[161px] border-none'/>
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
        <p className={`${styles.paragraph} text-center mt-[10px]`}>Your Credit, Your Key to More Benefits. Learn How to Build It Better!</p>
      </div>
    </div>
  )
}

export default About