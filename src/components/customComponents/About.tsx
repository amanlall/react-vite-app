import { Typography, Row, Col } from 'antd';
import { motion } from 'framer-motion';
const { Title } = Typography;
import './Hero.css'
import { BackgroundBeams } from '../ui/background-beams';
export function About() {
  return (
    <div className="about-section px-8 py-10">
          <BackgroundBeams/>
      <Row>
        <Col span={12}>
          <Title style={{ color: '#fdfdfd' , fontWeight:"10px"}}>About</Title>
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

      <Title style={{ color: '#fdfdfd' , fontWeight:"10px"}}>Skills</Title>
      <Row gutter={16}>
        {skills.map((skill, index) => (
          <Col key={index} span={6}>
            <motion.div
              className="skill-card"
              // whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
            >
              <div className="skill-card-content">{skill}</div>
            </motion.div>
          </Col>
        ))}
      </Row>
      {/* Define the skills array */}
      {/* Define the grid layout for the skills */}
    </div>
  );
}
