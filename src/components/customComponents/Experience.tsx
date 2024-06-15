
import { Reveal } from "./Reveal"
import './ExperienceCard.css'
import { Typography } from "antd"
import { useState } from "react";
export function Experience () {   

    return (
        <div>
            <Reveal children={<div className="px-10 mb-10 text-white text-3xl font-bold">EXPERIENCE<span className="text-curtainColor ">.</span></div>}/>
            <div className="ml-10">
                <OneEx/>
            </div>
        </div>
        
    )
}

function OneEx ()  {


  const [rows, setRows] = useState(2);
  console.log(setRows)
  const [expanded, setExpanded] = useState(false);
    const workExData = [
       {
        company: "Deloitte",
        role: "Full Stack Developer",
        FTE:"Full-Time",
        position: "Senior Analyst",
        duration: "Feb 2022 - Present",
        location:"Hyderabad, India",
        Work: "• Workforce Scheduling System Development: Collaborated as a crucial team member in developing an \
        innovative, web-based workforce scheduling application, significantly contributing to the initial design and \
        functionality. \
        • Co-developed a sophisticated calendar solution, comparable to Microsoft Outlook, enabling efficient meeting\
        scheduling with integrated email notifications, thereby enhancing user experience and operational workflow.\
        • Key contributor in the design and implementation of advanced quick-search algorithms for optimal resource\
        allocation, considering skill sets, availability, and time zone compatibility.\
        • Developed Auto-scheduling in collaboration with ServiceNow, enabling the automated scheduling of multiple\
        resources based on skills and availability, markedly improving project management efficiency and reducing\
        time of staffing by 30%\
        • Workforce Allocation Tool : Led the transition of a scheduling system from team-level to firm-wide use,\
        emphasizing adaptability and scalability. Implemented the system for 5+ teams, resulting in 60% cost savings\
        compared to a competitor's product (monday.com).\
        • Developed user-centric features, such as custom form creation for client-specific needs and flexible template\
        selection during the second year, effectively streamlining deployment processes and boosting client\
        autonomy and satisfaction.\
        • Received consecutive annual Spot Awards in recognition of outstanding performance and contributions to the\
        organization.",
       },
       {
        company: "Wipro-HSBC Bank",
        role: "Backend Developer",
        FTE:"Full-Time",
        position: "Senior Analyst",
        duration: "Feb 2022 - Present",
        location:"Bangalore, India",
        Work: "Worked in Anti Money Laundering team: detecting abnormal transactions.\
        • Cleared, Secure code Warrior White, Yellow, Orange Belt in Django Vulnerabilities",
       } ,
       {
        company: "Wipro-Holmes",
        role: "Backend Developer",
        FTE:"Full-Time",
        position: "Senior Analyst",
        duration: "Feb 2022 - Present",
        location:"Bangalore, India",
        Work: "Revised, modularized and updated old code bases to modern development standards, thereby improving\
        functionality. Developed and updated REST API based python bot to communicate with other bots and\
        validate, process, update, upload files to Redis database Created Tables and modified data in the table using\
        PostgreSQL",
       } ,

       {
        company: "Capital One (US), Wipro ",
        role: "Project Engineer",
        FTE:"Full-Time",
        position: "Senior Analyst",
        duration: "Feb 2022 - Present",
        location:"Bangalore, India",
        Work: "ETL Developer, Pipeline Migration Created a Data Mart model based on the lineage of Inbound & Outbound files\
        using Ab Initio graphs, Snowflake tables which was then loaded into RDS.\
        • Automated the Data extraction process using Python & Shell Scripting. Replacing the Teradata DB with\
        Snowflake DB and Migration of ETL projects from legacy to cloud-based servers. Managed onshore\
        (Bangalore) & offshore (US) team for Data-Mover Program."
       }
    ]
    return (    
<>

{workExData.map((data, index) => (

<div className="card" key={index}>
  <div className="flex justify-between">
    <div className="flex">
        <Reveal children={ <h1 className="font-bold">{data.company} |&nbsp;</h1>} />

      <Reveal children={ <h1 className="text-white font-sans font-bold">&nbsp;{data.role} |</h1>}/>
      <Reveal children={<h1 className="text-white font-sans font-bold ">&nbsp;{data.location} |</h1> }/>
      <Reveal children={<h1 className="text-white font-sans font-bold">&nbsp;{data.FTE}</h1> }/>
    </div>
    <h1 className="text-white font-sans font-bold">{data.duration}</h1>
  </div>
  <h1 className="text-white font-sans font-bold">{data.position}</h1>
  {/* <p className="text-white">{data.Work}</p> */}

  <Typography.Paragraph
        ellipsis={{
          rows,
          expandable: 'collapsible',
          expanded,
          onExpand: (_, info) => setExpanded(info.expanded),
        }}
        style={{ color: 'white' }}
      >
      {data.Work}
      </Typography.Paragraph>

</div>

))}

</>

)
}

