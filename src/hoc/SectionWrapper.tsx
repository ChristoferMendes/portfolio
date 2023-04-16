import { motion as Motion } from 'framer-motion'

import { styles } from '../styles'
import { staggerContainer } from '../utils/motion'
import { ComponentType } from 'react'

const SectionWrapper = (Component: ComponentType, idName: string) =>
  function HOC() {
    return (
      <Motion.div
        className={`${styles.paddingX} max-w-7xl mx-auto relative z-0`}
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: .25 }}
        
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Component />
      </Motion.div>
    )
  }
export default SectionWrapper