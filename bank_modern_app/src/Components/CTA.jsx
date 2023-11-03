import React from 'react'
import styles,{layout} from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${layout.screenAdjust} ${styles.marginY} ${styles.padding}  sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>
      <div>
        <h1 className= {`${styles.heading2} flex flex-1 flex-col`}>Let's Try Our Services Now!</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button/> 
      </div>

    </section>
  )
}

export default CTA