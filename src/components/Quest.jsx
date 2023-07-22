import React from 'react'
import alienhead from '../assets/alienhead.png'
import styles from '../style'
import Button from './Button'
import arrowleft from '../assets/arrowleft.svg'
const Quest = () => {
  return (
    <div className={`h-[575px] border-[2px] rounded-[48px] border-gray-200 border-opacity-30 flex justify-center items-center`}>
        <div className='w-[80%] flex flex-row justify-center'> 
            <div className='flex flex-col justify-start items-start'>
                <h1
                    style={{
                        backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, #FFDB00 34.00%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text", // For Safari compatibility
                        color: "transparent",
                    }}
                    className={`${styles.heading1} text-[72px] font-medium `}>
                        Credit Q.U.E.S.T.
                </h1>
                <p className={`${styles.paragraph} text-left mt-10 mb-20`}>
                    By continuing on their Q.U.E.S.T., users will be able to unlock more benefits / credit limit depending on their performance with quizzes, good habits, and goal setting.
                </p>
                <Button content="Learn More" imageSrc={arrowleft} borderColor="#FFD600"/>
            </div>
            <img src={alienhead} alt='card' className='ml-[150px]'/>
        </div>
    </div>
  )
}

export default Quest