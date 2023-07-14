import React from 'react'
import {apple, bill,google} from '../assets'
import styles, {layout} from '../style'

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
            <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'></div>
            <div className='absolute z-[3] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'></div>
        </div>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden"/> billing & invoicing.</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Welcome to the ultimate course, where you will learn how to take Figma designs, turn them into four modern, responsive, beautifully-designed applications, and get hired as a front-end developer. All the way from design, over development, to deployment on your own web development portfolio!
            </p>
            <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
                <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
                <img src={google} alt="google_play" className='w-[128px] h-[42px] object-contain cursor-pointer'/>
            </div>
        </div>
    </section>
  )
}

export default Billing;