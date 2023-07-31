import React from 'react'
import decentralized from '../assets/decentralized.png'
import styles from '../style'
import Button from './Button'
import arrowleft from '../assets/arrowleft.svg'

const Pay_as_you_go = () => {
  return (
    <div className={`lg:h-[575px] md:h-[400px] border-[2px] rounded-[48px] border-gray-200 border-opacity-30 flex justify-center items-center`}>
        <div className='w-[90%] flex flex-row justify-center lg:scale-[1] md:scale-[.9]'>
          <img src={decentralized} alt='card' className='lg:mr-[150px] md:mr-[50px] w-[388px] h-[244px] lg:scale-[1] md:scale-[0.8]'/> 
            <div className='flex flex-col justify-center items-start'>
                <h1
                    style={{
                        backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, #FFDB00 34.00%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text", // For Safari compatibility
                        color: "transparent",
                    }}
                    className={`${styles.heading1} text-[72px] font-medium text-start`}>
                        Pay-as-you-go
                </h1>
                <p className={`${styles.paragraph} text-left lg:mt-10 lg:mb-20 md:mt-2 md:mb-5`}>
                  We keep up with the times. The Pay-as-you-go uses decentralized finance and is available to all users who want to pay off their credit card the moment they purchase goods. Build credit, without having to worry about a statement at the end of the month.
                </p>
                <Button content="Learn More" imageSrc={arrowleft} borderColor="#FFD600"/>
            </div>
        </div>
    </div>
  )
}

export default Pay_as_you_go