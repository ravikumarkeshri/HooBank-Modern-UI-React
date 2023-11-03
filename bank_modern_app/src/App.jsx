import React from 'react'
import styles from './style'
import Navbar from './Components/Navbar'
import Billing from './Components/Billing'
import Business from './Components/Business'
// import Button from './Components/Button'
import CardDeal from './Components/CardDeal'
import Clients from './Components/Clients'
import CTA from './Components/CTA'
// import Feedback from './Components/Feedback'
// import GetStarted from './Components/GetStarted'
import Hero from './Components/Hero'
import Stats from './Components/Stats'
import Footer from './Components/Footer'
import Testimonials from './Components/Testimonials'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden '>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}  `} >
          <Hero />
        </div>

      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}  `} >
        <Stats />
        </div>

      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}  `} >
        <Business />
        </div>

      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}  `} >
        <Billing />
        </div>

      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}  `} >
        <CardDeal />
        </div>

      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}  `} >
        <Testimonials />
        </div>

      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}  `} >
        <Clients />
        </div>

      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}  `} >
        <CTA />
        </div>

      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}  `} >
        <Footer />
        </div>

      </div>
      


      
    </div>
  )
}

export default App
