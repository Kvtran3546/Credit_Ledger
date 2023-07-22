import React from 'react'
import { handemoji, schoolemoji, stockemoji } from '../assets'
import styles from '../style'
import arrowleft from '../assets/arrowleft.svg'
import arrowleft_purple from '../assets/arrowleft_purple.svg'
import Button from './Button'
const BodyContent = () => {
  return (
    <div className='w-[85%] flex flex-row justify-between justify items-center'>
        <div className='w-[1/3] flex flex-1 flex-col justify-center items-center'>
            <img src={schoolemoji} alt="schoolemoji" className='w-[160px] mt-5'/>
            <h1
                className={`${styles.heading1} text-[48px] bg-clip-text text-transparent my-[60px]`}
                style={{
                backgroundClip: "text",
                backgroundImage: "linear-gradient(90deg, gray 0%, white 100%)",
                }}>
                Education
            </h1>
            <p className={`${styles.paragraph} text-center text-[20px] mx-10 mb-20`} style={{
                backgroundClip: "text",
                backgroundImage: "linear-gradient(45deg, gray 0%, #E0E0E0 100%)"}}>
                We believe that education is the key to financial success. That's why we offer a Personal Education Platform tailored to your needs. Additionally, we have tools to help you learn about credit, budgeting, goal setting, and more.</p>
            <Button content="Learn" imageSrc={arrowleft} borderColor="#FFD600"/>
        </div>
        <div className='w-[1/3] h-[900px] flex flex-1 flex-col justify-center items-center border-x-2 border-gray-300'>
            <img src={stockemoji} alt="stockemoji" className='w-[160px] mt-5'/>
            <h1
                className={`${styles.heading1} text-[48px] bg-clip-text text-transparent my-[60px]`}
                style={{
                backgroundClip: "text",
                backgroundImage: "linear-gradient(90deg, gray 0%, white 100%)",
                }}>
                Build Credit
            </h1>
            <p className={`${styles.paragraph} text-center text-[20px] mx-10 mb-20`} style={{
                backgroundClip: "text",
                backgroundImage: "linear-gradient(45deg, gray 0%, #E0E0E0 100%)"}}>
                We are committed to helping you build and improve your credit. We offer credit-building tools and resources, such as credit monitoring, Instant-Pay, and limited credit-limit based on your habits.</p>
            <Button content="Start Building" imageSrc={arrowleft} borderColor="#FFD600"/>
        </div>
        <div className='w-[1/3] flex flex-1 flex-col justify-center items-center'>
            <img src={handemoji} alt="handemoji" className='w-[160px] mt-5'/>
            <h1
                className={`${styles.heading1} text-[48px] bg-clip-text text-transparent my-[60px]`}
                style={{
                backgroundClip: "text",
                backgroundImage: "linear-gradient(90deg, gray 0%, white 100%)",
                }}>
                Trust
            </h1>
            <p className={`${styles.paragraph} text-center text-[20px] mx-10 mb-20`} style={{
                backgroundClip: "text",
                backgroundImage: "linear-gradient(45deg, gray 0%, #E0E0E0 100%)"}}>
                We prioritize transparency, security, and customer satisfaction and work hard to earn and maintain your trust. You can rest assured that your financial well-being is in good hands. That's why you're here, isn't it?</p>
            <Button content="Meet Us" imageSrc={arrowleft} borderColor="#FFD600"/>
        </div>
    </div>
  )
}

export default BodyContent