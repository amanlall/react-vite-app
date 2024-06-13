import { Row, Col } from 'antd';
import './Hero.css'
import { Reveal } from './Reveal';
import { motion } from 'framer-motion';
export function About() {
  return (
  
    <div className="about-section px-8 py-10 container flex-col">
         
      <Row>
        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
        <Reveal children={ <div className="text-[#fdfdfd] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] xl:text-3xl font-bold pb-1">ABOUT<span className='text-curtainColor'>.</span></div>} />
       <Reveal children={
          <div className="summary">
          I am a software engineer with a passion for building scalable and
          user-friendly software applications. With 5+ years of expertise, skilled in both backend (4 years) and frontend (2 years)
          development. Demonstrated expertise in database management, REST API integration, and agile methodology.
          Proficient in database management, Rest API integration, and agile methodology, I excel in designing efficient
          data flow structures.
        </div>
       } />

        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
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
<Reveal children={<div className="text-[#fdfdfd] sm:text-[1rem] md:text-[1rem] lg:text-[2rem] xl:text-3xl font-bold pb-1">SKILLS<span className='text-curtainColor'>.</span></div>} />


      <Row gutter={16}>
        {skills.map((skill, index) => (
          <Col key={index} span={6}>

<Reveal children={ 
            <div
              className="skill-card"
            >
              <div className="skill-card-content">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.01 }}
                >

                  <div className="skill-card-icon">{skill}</div>

                </motion.div>
                </div>
            </div>

          }/>

          </Col>
        ))}
      </Row>
    </div>
  );
}
