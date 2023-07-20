import React from 'react'
import Features from './Features'
import styles from '../style'

const Body = () => {
  return (
    <div className='w-[100%]'>
      <div className='flex flex-col justify-center items-center'>
        <div className='border-b-[5px] w-[90%] rounded-full border-[#FFD600] mb-10'/>
        <h1
          style={{
            backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, #FFDB00 34.00%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text", // For Safari compatibility
            color: "transparent",
          }}
          className={`${styles.heading1} text-[72px] font-medium`}
        >
          Why Choose Credit Ledger?
        </h1>
      </div>
      <div className='w-[100%] mt-20 flex justify-center items-center'>
        <Features/>
      </div>
    </div>
  )
}

export default Body