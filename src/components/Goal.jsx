import React from 'react'
import styles from '../style'
import Button from './Button'
import arrowleft_purple from '../assets/arrowleft_purple.svg'

const Goal = () => {
  return (
    <div className='w-[960px] flex flex-col items-center mt-[200px]'>
        <h1
            style={{
                backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, #FFDB00 34.00%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text", // For Safari compatibility
                color: "transparent",
            }}
            className={`${styles.heading1} text-[72px] font-medium mb-10`}>
                Our Goal is Simple ...
        </h1>
        <p className={`${styles.paragraph} text-[36px] text-center`}>
            To help every day credit card users better understand what credit is, as well as build it.
        </p>
        <div className='mt-[50px]'>
            <Button content="Get Started" imageSrc={arrowleft_purple} borderColor="#cf6cfd"/>
        </div>
    </div>
  )
}

export default Goal