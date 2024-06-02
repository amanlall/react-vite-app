
export function Experience () {   
    return (
        <div>
        <div className="px-10 mb-10 text-white text-3xl font-bold">EXPERIENCE<span className="text-[#f9b17a] ">.</span></div>
        <div className="ml-10">

        <OneEx/>

        </div>
        </div>
        
    )
}

function OneEx ()  {
    const workExData = [
       {
        company: "Deloitte",
        role: "Full Stack Developer",
        FTE:"Full-Time",
        position: "Senior Analyst",
        duration: "Feb 2022 - Present",
        location:"Hyderabad, India",
        Work: "Worked on various projects including a web app, a CRM, and a web scraper. I have experience in a variety of technologies and frameworks.",
       },
       {
        company: "Wipro-HSBC Bank",
        role: "Backend Developer",
        FTE:"Full-Time",
        position: "Senior Analyst",
        duration: "Feb 2022 - Present",
        location:"Bangalore, India",
        Work: "Worked on various projects including a web app, a CRM, and a web scraper. I have experience in a variety of technologies and frameworks.",
       } 
    ]
    return (    
<>

{workExData.map((data, index) => (
    <div className="mb-10" key={index}>
        <div className="flex justify-between">
            <div className="flex">
            <h1 className="text-[#f9b17a] font-bold">{data.company} </h1>
            <h1 className="text-white ml-2 ">{data.role} | </h1>
            <h1 className="text-white ml-2">{data.location} | </h1>
            <h1 className="text-white  ml-2">{data.FTE}</h1>
            </div>
        <h1 className="text-white">{data.duration}</h1>
        </div>       
        <h1 className="text-white">{data.position}</h1>
        <p className="text-white">{data.Work}</p>
    </div>
))}

</>



    )
}

