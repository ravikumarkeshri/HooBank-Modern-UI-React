import React from 'react'
import { features } from '../constants'
import styles, {layout} from '../style'
import Button from './Button'


const FeatureCard=({icon, title, content, index})=>(
  <div className={`text-white  flex flex-row p-6 rounded-[20px] ${index !==features.length-1 ? 'mb-6' : 'mb-0'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img  className='w-[50%] h-[50%] object-contain'
      src={icon}alt="icon" />
    </div>
    <div className={` flex flex-col flex-1  ml-3`}>
      <h3 className='font-poppins font-semibold text-[16px] leading-[24px]'>{title}</h3>
      <p className= 'font-poppins font-normal text-dimWhite text-[18px] leading-[24px]'>{content}</p>
      </div>
  </div>
)

const Business = () => {
  return (
    <section id='features' className={`${layout.section}`}>
      <div className={`${layout.sectionInfo} xl:px-0 sm:px-16   px-6 `}>
        <h2 className={styles.heading2}>You do the Business, <br className='sm:block hidden' /> We'll Handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit card in the market.
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={`${styles.sectionImg}   w-full  md:w-[45%] mr-4 flex-col `} >
        {
          features.map(({feature,index,icon ,id,title,content})=>(
            <FeatureCard key={id} icon={icon} title={title} content={content} {...feature} index={index}/>
          ))
        }

      </div>
     


    </section>
  )
}

export default Business