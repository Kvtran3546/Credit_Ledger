import React, {useRef} from 'react'
import BodyContent from './BodyContent'
import styles from '../style'
import arrowleft from '../assets/arrowleft.svg'
import arrowleft_purple from '../assets/arrowleft_purple.svg'
import Button from './Button'
import {Fade} from 'react-awesome-reveal'
const Body = () => {
  const bodyRef = useRef(null);
  return (
    <div className='w-[100%] flex justify-center flex-col items-center'>
      <div className='w-[50%] flex flex-row justify-center mb-[100px]'>
        <Fade delay={2000} triggerOnce>
          <div className='mr-5'>
            <Button content="Learn more" imageSrc={arrowleft} borderColor="#FFDB00" down={true} targetRef={bodyRef}/>
          </div>
          <Button content="Survey" imageSrc={arrowleft_purple} borderColor="#cf6cfd" down={false} />
        </Fade>
      </div>
      <Fade triggerOnce>
        <div className='w-[100%] flex flex-col justify-center items-center'>
          <div className='border-b-[5px] w-[90%] rounded-full border-[#FFD600] mb-10'/>
          <h1
            style={{
              backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, #FFDB00 34.00%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text", // For Safari compatibility
              color: "transparent",
            }}
            className={`${styles.heading1} text-[72px] font-medium`}
            ref={bodyRef}>
            Why Choose Credit Ledger?
          </h1>
        </div>
      </Fade>
      <div className='w-[100%] mt-20 flex justify-center items-center'>
        <BodyContent/>
      </div>
    </div>
  )
}

export default Body