import React from 'react'
import {apple,bill,google}  from '../assets'
import styles ,{layout} from '../style'

const Billing = () => {
  return (
    <section id='product' className={`${layout.sectionReverse} ${layout.screenAdjust}`} >
      <div className={`${layout.sectionImgReverse} `}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[13] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'></div>
        <div className='absolute z-[10] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient border-2'></div>
      </div>
      <div className={`${layout.sectionInfo} `}>
        <h2 className={styles.heading2}> Easy Control Your <br className='sm:block hidden' />Billing and Invoicing</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt praesentium dolor beatae itaque voluptate, hic eius, ea ex ad officiis quo rerum rem voluptas possimus voluptatum impedit similique earum cumque.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="google-apple" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt="google-apple" className='w-[128px] h-[42px] object-contain ml-10 cursor-pointer' />
        </div>

      </div>

    </section>
  )
}

export default Billing