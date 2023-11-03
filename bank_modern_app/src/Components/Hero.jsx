import React from 'react'
import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className={` ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient roudned-[10px] mb-2'>
          <img src={discount} alt="discountImg"
            className='w-[34px] h-[34px]' />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20%</span>
            <span> Discount For {" "}</span>
            <span className='text-white'>1 Month</span> Account
          </p>
        </div>
        <div className='flex flex-row justify-between items-center w-full '>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]' >
            The Next <br className='sm:block hidden' />{" "}
            <span className='text-gradient'>Generation</span>{" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'> Payment Method</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima necessitatibus repellendus voluptas placeat sit et quae eaque, sunt corrupti, assumenda magnam suscipit soluta facilis quidem minus delectus atque facere. Nemo?
        </p>
      </div>
      <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="robot"
          className='w-[100%] h-[100%] relative z-[5]' />
        <div className='w-[40%] h-[35%] absolute z-[0] top-0 pink__gradient' ></div>
        <div className='w-[80%] h-[80%] absolute z-[1] bottom-40 rounded-full  white__gradient' ></div>
        <div className='w-[50%] h-[50%] absolute z-[0] bottom-20 blue-gradient right-20 blue__gradient' ></div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>


    </section>
  )
}

export default Hero