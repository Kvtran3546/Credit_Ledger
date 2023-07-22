import React from 'react'
import decentralized from '../assets/decentralized.png'
import styles from '../style'
import Button from './Button'
import arrowleft from '../assets/arrowleft.svg'

const Pay_as_you_go = () => {
  return (
    <div className={`h-[575px] border-[2px] rounded-[48px] border-gray-200 border-opacity-30 flex justify-center items-center`}>
        <div className='w-[80%] flex flex-row justify-center'>
          <img src={decentralized} alt='card' className='mr-[150px]'/> 
            <div className='flex flex-col justify-start items-start'>
                <h1
                    style={{
                        backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, #FFDB00 34.00%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text", // For Safari compatibility
                        color: "transparent",
                    }}
                    className={`${styles.heading1} text-[72px] font-medium `}>
                        Pay-as-you-go
                </h1>
                <p className={`${styles.paragraph} text-left mt-10 mb-20`}>
                  We keep up with the times. The Pay-as-you-go uses decentralized finance and is available to all users who want to pay off their credit card the moment they purchase goods. Build credit, without having to worry about a statement at the end of the month.
                </p>
                <Button content="Learn More" imageSrc={arrowleft} borderColor="#FFD600"/>
            </div>
        </div>
    </div>
  )
}

export default Pay_as_you_go