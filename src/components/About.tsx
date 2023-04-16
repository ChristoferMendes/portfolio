import React from 'react'
import { Tilt } from 'react-tilt'
import { motion as Motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../contants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }: { index: number; title: string; icon: any }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}>
      <Motion.div
        variants={fadeIn('right', 'sprint', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >

        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt="title" className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </Motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <Motion.div variants={textVariant(2)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </Motion.div>
      <Motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I am a full-stack developer with a passion for creating web and native applications. I have been working with web development and native development for 1 year. I have experience with React, React Native, Node.js, Typescript, Express, NestJS, Prisma, Docker, and a lot more!. I am currently working as a developer at MM Tecnologia.
      </Motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>

        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')