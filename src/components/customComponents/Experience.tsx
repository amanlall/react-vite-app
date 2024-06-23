import { Reveal } from './Reveal';
import './ExperienceCard.css';
import { Space, Typography} from 'antd';
import { useState } from 'react';


// import { brandColours } from '../../utils/cn';
export function Experience() {
  return (
    <div>
      <Reveal
        children={
          <div className="px-10 mb-4 mt-20 py-5 text-white text-3xl font-bold">
            EXPERIENCE<span className="text-curtainColor ">.</span>
          </div>
        }
      />
      <div className="ml-10">
        <OneEx />
      </div>
    </div>
  );
}


function OneEx() {
  const [rows, setRows] = useState(2);
  console.log(setRows);
  const [expandedStates, setExpandedStates] = useState<{
    [key: number]: boolean;
  }>({});

  const handleExpand = (index: number, expanded: boolean) => {
    setExpandedStates((prevStates) => {
      const newStates = { ...prevStates };
      Object.keys(newStates).forEach((key) => {
        if (Number(key) !== index) {
          newStates[Number(key)] = false;
        }
      });
      newStates[index] = expanded;
      return newStates;
    });
  };

  const workExData = [
    {
      company: 'Deloitte-USI',
      role: 'Full Stack Developer',

      duration: 'Feb 2022 - Present',
      location: 'Hyderabad, India',
      Work: 'Workforce Scheduling System Development: Collaborated as a crucial team member in developing an \
        innovative, web-based workforce scheduling application, significantly contributing to the initial design and \
        functionality. Co-developed a sophisticated calendar solution, comparable to Microsoft Outlook, enabling efficient meeting\
        scheduling with integrated email notifications, thereby enhancing user experience and operational workflow.',
    },
    {
      company: 'Wipro-HSBC Bank',
      role: 'Backend Developer',

      duration: 'Sep 2021 - Jan 2022',
      location: 'Bangalore, India',
      Work: 'Worked in Anti Money Laundering team: detecting abnormal transactions.\
        Cleared, Secure code Warrior White, Yellow, Orange Belt in Django Vulnerabilities',
    },
    {
      company: 'Wipro-Holmes',
      role: 'Backend Developer',

      duration: 'Mar 2020 - Aug 2021',
      location: 'Bangalore, India',
      Work: 'Revised, modularized and updated old code bases to modern development standards, thereby improving\
        functionality. Developed and updated REST API based python bot to communicate with other bots and\
        validate, process, update, upload files to Redis database Created Tables and modified data in the table using\
        PostgreSQL',
    },

    {
      company: 'Capital One (US), Wipro ',
      role: 'Project Engineer',

      duration: 'Jul 2018 - Dec 2019',
      location: 'Bangalore, India',
      Work: 'ETL Developer, Pipeline Migration Created a Data Mart model based on the lineage of Inbound & Outbound files\
        using Ab Initio graphs, Snowflake tables which was then loaded into RDS.\
        • Automated the Data extraction process using Python & Shell Scripting. Replacing the Teradata DB with\
        Snowflake DB and Migration of ETL projects from legacy to cloud-based servers. Managed onshore\
        (Bangalore) & offshore (US) team for Data-Mover Program.',
    },
  ];
  return (
    <div>
      <div>
        {workExData.map((data, index) => (
          <div className="card" key={index}>
            <div className="flex justify-between">
              <div className="flex flex-wrap md:flex-nowrap">
                <Space wrap>
                  <Reveal
                    children={<h1 className="info-company">{data.company}</h1>}
                  />
                  <Reveal
                    children={<h1 className="info-text">{data.role}</h1>}
                  />
                  <Reveal
                    children={<h1 className="info-text">{data.location}</h1>}
                  />
                </Space>
              </div>
              <Reveal
                children={<h1 className="duration-text">{data.duration}</h1>}
              />
            </div>
            <Typography.Paragraph
              ellipsis={{
                rows,
                expandable: 'collapsible',
                expanded: expandedStates[index] || false,
                onExpand: (_, info) => handleExpand(index, info.expanded),
              }}
              style={{ color: 'white', fontSize: '12px' }}
            >
              {data.Work}
            </Typography.Paragraph>
          </div>
        ))}
      </div>
      <div>
   
      </div>
    </div>
  );
}
