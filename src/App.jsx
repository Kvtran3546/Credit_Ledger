import React from 'react'
import styles from './style'
import { Navbar,Billing,Body,Business,Button,CardDeal,Clients,CTA,FeedbackCard,Footer,GetStarted,Stats,Testimonials} from './components'
const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Body />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business />
          <Billing />
          <CardDeal />
          <Stats />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer  />
        </div>
      </div>
    </div>
  )
}

export default App