import React from 'react'
import card from '../assets/card.png'
import styles from '../style'
import Button from './Button'
import arrowleft from '../assets/arrowleft.svg'
const LedgerCard = () => {
  return (
    <div className={`lg:h-[575px] md:h-[400px] border-[2px] rounded-[48px] border-gray-200 border-opacity-30 flex justify-center items-center`}>
        <div className='w-[90%] flex flex-row justify-center lg:scale-[1] md:scale-[.8]'> 
            <img src={card} alt='card' className='lg:mr-[150px] md:mr-[75px] w-[388px] h-[244px] lg:scale-[1] md:scale-[0.8]'/>
            <div className='flex flex-col justify-center items-start'>
                <h1
                    style={{
                        backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, #FFDB00 34.00%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text", // For Safari compatibility
                        color: "transparent",
                    }}
                    className={`${styles.heading1} text-[72px] font-medium text-start`}>
                        Ledger Card
                </h1>
                <p className={`${styles.paragraph} text-left lg:mt-10 lg:mb-20 md:mt-5 md:mb-10`}>
                    After getting access to our platform, you are shipped a fully custom credit card linked to your account. And yes, it's metal.
                </p>
                <Button content="Apply" imageSrc={arrowleft} borderColor="#FFD600"/>
            </div>
        </div>
    </div>
  )
}

export default LedgerCard