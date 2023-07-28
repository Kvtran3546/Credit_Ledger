import React from 'react'
import styles from '../style'
import { Fade } from 'react-awesome-reveal'
const Intro_vid = () => {
  return (
    <div className='w-[100%] flex flex-col items-center mt-[200px]'>
        <Fade duration={1500} direction='up' triggerOnce>
          <h1
              style={{
                  backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, #FFDB00 34.00%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text", // For Safari compatibility
                  color: "transparent",
              }}
              className={`${styles.heading1} text-[72px] font-medium mb-20`}>
                  What are we About?
              </h1>
          <iframe title="vimeo-player" src="https://player.vimeo.com/video/815187902?h=8c11f2a31d" width="960" height="540" frameborder="0"    allowfullscreen></iframe>
        </Fade>
    </div>
  )
}

export default Intro_vid