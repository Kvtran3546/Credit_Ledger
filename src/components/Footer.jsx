import React from 'react'
import {Fade} from 'react-awesome-reveal'
import {BsTwitter,BsInstagram,BsFillEnvelopeFill} from 'react-icons/bs'
import {BiCopyright} from 'react-icons/Bi'
import styles from '../style'
const Footer = () => {
  return (
    <Fade className='w-[100%] flex justify-center'>
      <div className='flex flex-row justify-between lg:w-[15%] md:w-[30%] mt-20'>
        <BsTwitter className='w-[70px] h-[70px] opacity-[.60] hover:scale-[1.1] transition-all' />
        <BsInstagram className='w-[70px] h-[70px] opacity-[.60] hover:scale-[1.1] transition-all '/>
        <BsFillEnvelopeFill className='w-[70px] h-[70px] opacity-[.60] hover:scale-[1.1] transition-all'/>
      </div>
      <h1 className={`${styles.heading1} flex flex-row justify-center items-center text-[20px] font-normal text-gray-50 opacity-[.5] mt-8 mb-[150px]`}><BiCopyright/> Credit Ledger. All rights reserved.</h1>
    </Fade>
  )
}

export default Footer