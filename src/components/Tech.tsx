import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../contants"
import { styles } from "../styles"

import { motion as Motion } from "framer-motion"
import { textVariant } from "../utils/motion"


const Tech = () => {
  return (
    <>
      <Motion.div variants={textVariant()} className='my-6'>
        <p className={styles.sectionSubText}>Technologies that I know</p>
        <h2 className={styles.sectionHeadText}>Hard Skills.</h2>
      </Motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map(item => (
          <div className="w-28 h-20" key={item.name}>
            <BallCanvas icon={item.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, 'tech')