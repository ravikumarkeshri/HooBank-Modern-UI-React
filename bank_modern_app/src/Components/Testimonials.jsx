import React from 'react'
import { feedback } from '../constants'
import styles ,{layout} from '../style'
import  Feedback  from './Feedback'

const Testimonials = () => {
  return (
   <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative ${layout.screenAdjust} mr-0`}>
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

   
    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
      <h1 className={styles.heading2}>What people are <br className='sm:block hidden' /> saying about us</h1>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} max-w-[450px] text-left `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, asperiores ipsam? Eius aperiam dolore, odio sed pariatu
        </p>
      </div>

    </div>
    <div className='  flex flex-wrap sm:flex-nowrap ss:flex-wrap sm:justify-start justify-center w-full feedback-contianer relative z- [1]'>
       {
        feedback.map((card)=>(
          <Feedback key={card.id} {...card}/>
        ))
      }

    </div>

   </section>
  )
}

export default Testimonials