import React from 'react'
import { stats } from '../constants'
import styles from '../style'


const Stats = () => {
  return (
   <section className={`${styles.flexCenter} w-full flex-row flex-wrap sm:mb-20 mb-6 xl:px-0 sm:px-16 px-6`}>
    {
      stats.map((stat)=>(
        <div  key={stat.id} className={`flex-1 flex justify-start items-center flex-row mr-3`}>
          <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
          {stat.value}
          </h4>
          <p className='font-poppins font-semibold xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-white text-gradient uppercase ml-3'>{stat.title}</p>

        </div>
      ))
    }
   </section>
  )
}

export default Stats