import { Row, Col } from 'antd';
import { motion } from 'framer-motion';
import './Hero.css'
import { BackgroundBeams } from '../ui/background-beams';
import { Reveal } from './Reveal';
export function About() {
  return (
    <div className="about-section px-8 py-10">
       <BackgroundBeams/>   
      <Row>
        <Col span={12}>
        <div className="text-[#fdfdfd]  sm:text-sm md:text-3xl lg:text-3xl xl:text-3xl font-bold pb-2 mb-4">
  About
</div>


          <div className="summary">
            I am a software engineer with a passion for building scalable and
            user-friendly software applications. I have a strong background in
            software development and have worked on various projects both in the
            academic and industry domains. I am proficient in a wide range of
            programming languages, frameworks, and technologies, and am
            constantly learning and expanding my skillset.
          </div>
        </Col>
        <Col span={12}>
          <Skills />
        </Col>
      </Row>
    </div>
  );
}

function Skills() {

  const skills = [
    "JavaScript","Python", "React", "Node.js", "Express", "MongoDB", "AWS", "Docker", "Git", "GitHub", "Figma","Tailwind","Django","HTML","CSS","SQL",
  ]
  return (
    <div className="skills-container align-center">

<div className="text-[#fdfdfd] text-3xl sm:text-xl md:text-xl lg:text-3xl xl:text-5xl font-bold border-[#fdfdfd] pb-2 mb-4">
  Skills
</div>
      <Row gutter={16}>
        {skills.map((skill, index) => (
          <Col key={index} span={6}>
            <motion.div
              className="skill-card"
              // whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            >
              
              <div className="skill-card-content"><Reveal children={<div className="skill-card-icon">{skill}</div>}/></div>
            </motion.div>
          </Col>
        ))}
      </Row>
      {/* Define the skills array */}
      {/* Define the grid layout for the skills */}
    </div>
  );
}
