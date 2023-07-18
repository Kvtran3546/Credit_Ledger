import React from 'react'
import styles from './style'
import { Navbar,Body,Footer} from './components'
const App = () => {
  return (
    <div className="">
      <div className={``}>
        <div className={``}>
          <Navbar />
        </div>
      </div>
      <div className={``}>
        <div className={``}>
          <Body />
        </div>
      </div>
      <div className={``}>
        <div className={``}>
          <About />
          <Footer  />
        </div>
      </div>
    </div>
  )
}

export default App