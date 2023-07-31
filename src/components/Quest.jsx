import React from 'react'
import alienhead from '../assets/alienhead.png'
import styles from '../style'
import Button from './Button'
import arrowleft from '../assets/arrowleft.svg'
const Quest = () => {
  return (
    <div className={`lg:h-[575px] md:h-[400px] border-[2px] rounded-[48px] border-gray-200 border-opacity-30 flex justify-center items-center`}>
        <div className='lg:w-[90%] md:w-[100%] flex flex-row justify-center lg:scale-[1] md:scale-[.8]'> 
            <div className='flex flex-col justify-center items-start'>
                <h1
                    style={{
                        backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, #FFDB00 34.00%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text", // For Safari compatibility
                        color: "transparent",
                    }}
                    className={`${styles.heading1} text-[72px] font-medium text-start`}>
                        Credit Q.U.E.S.T.
                </h1>
                <p className={`${styles.paragraph} text-left lg:mt-10 lg:mb-20 md:mt-5 md:mb-5`}>
                    By continuing on their Q.U.E.S.T., users will be able to unlock more benefits / credit limit depending on their performance with quizzes, good habits, and goal setting.
                </p>
                <Button content="Learn More" imageSrc={arrowleft} borderColor="#FFD600"/>
            </div>
            <img src={alienhead} alt='card' className='lg:ml-[150px] md:ml-[50px] lg:scale-[1] md:scale-[0.7]'/>
        </div>
    </div>
  )
}

export default Quest