import React from 'react'
import card from '../assets/card.png'
import styles from '../style'
import Button from './Button'
import arrowleft from '../assets/arrowleft.svg'
const LedgerCard = () => {
  return (
    <div className={`h-[575px] border-[2px] rounded-[48px] border-gray-200 border-opacity-30 flex justify-center items-center`}>
        <div className='w-[80%] flex flex-row justify-center'> 
            <img src={card} alt='card' className='mr-[150px] w-[388px] h-[244px]'/>
            <div className='flex flex-col justify-start items-start'>
                <h1
                    style={{
                        backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, #FFDB00 34.00%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text", // For Safari compatibility
                        color: "transparent",
                    }}
                    className={`${styles.heading1} text-[72px] font-medium `}>
                        Ledger Card
                </h1>
                <p className={`${styles.paragraph} text-left mt-10 mb-20`}>
                    After getting access to our platform, you are shipped a fully custom credit card linked to your account. And yes, it's metal.
                </p>
                <Button content="Apply" imageSrc={arrowleft} borderColor="#FFD600"/>
            </div>
        </div>
    </div>
  )
}

export default LedgerCard