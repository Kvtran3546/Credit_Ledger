import React from 'react'
import styles from '../style'
import LedgerCard from './LedgerCard'
import Pay_as_you_go from './Pay_as_you_go'
import Quest from './Quest'
import Button from './Button'

const Features = () => {
  return (
    <div className={`w-[100%] mt-20 flex flex-col justify-center items-center`}>
        <div className='mb-20'>
            <h1
            style={{
                backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, #FFDB00 34.00%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text", // For Safari compatibility
                color: "transparent",
            }}
            className={`${styles.heading1} text-[72px] font-medium`}>
                Our Features
            </h1>
        </div>
        <div className='w-[90%]'>
            <LedgerCard />
            <div className='my-20'>
                <Quest />
            </div>
            <Pay_as_you_go />
        </div>
    </div>
  )
}

export default Features