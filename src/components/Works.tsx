import { Tilt } from "react-tilt"
import { motion as Motion } from 'framer-motion'

import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../contants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {


  return (
    <Motion.div variants={fadeIn('up', 'sprint', index * 0.5, .75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(project.source_code_link, '_black')}
              className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
            >
              <img src={github} alt="github logo" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
          <p className="mt-2 text-secondary text-[24px]">{project.description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </Motion.div>
  )
}

const Works = () => {
  return (
    <>
      <Motion.div variants={textVariant()} className='mt-6'>
        <p className={styles.sectionSubText}>MY WORK</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </Motion.div>

      <div className="w-full flex">
        <Motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[16px] max-w-3xl leading-[30px]"
        >
          The following projects
        </Motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={project.image} project={project} index={index} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "works")
