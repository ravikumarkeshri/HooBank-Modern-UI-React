import React from 'react'
import { quotes } from '../assets'
import styles from '../style'

const Feedback = ({ content, name, title, img }) => {
  return (
    <div className='flex flex-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} alt="double-quotes" className='w-[42px] h-[27px] object-contain' />
      <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>
      <div className='flex flex-row'>
        <img src={img} alt="image" className='w-[48px] h-[48px] rounded-full'  />
        <div className='flex flex-col ml-4'>
          <h2 className="font-normal font-poppins text-[18px] leading-[32px] text-white ">{name}</h2>
          <p className="font-normal font-poppins text-[16px] leading-[24px] text-dimWhite ">{title}</p>

        </div>

      </div>
    </div>
  )
}

export default Feedback