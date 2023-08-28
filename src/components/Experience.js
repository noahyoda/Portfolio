import './Experience.css';
import React from "react";

function SingleExperience(props) {
    return (
        <div className="Exp-Column">
            <h3 className='Title'>{props.title}</h3>
            <h3 className='SubTitle'>{props.company}</h3>
            <p className='Description'>
                {props.description}
            </p>
            <h4 className='KeyAccomp SubTitle'><u>Key Accomplishments</u></h4>
            <li className='Accomplishment'>
                {props.accomplishments[0]}
            </li>
            <li className='Accomplishment'>
                {props.accomplishments[1]}
            </li>
        </div>
    )
}

export default function Experience() {

    let exp = [{
        title: "Software Engineer Intern",
        company: "General Atomics Aeronautical Systems, Inc.",
        time: "June 2023 - Aug 2023",
        description: "Developed Gitlab CI pipeline(s) to automate and expedite the process of creating new virtual machines from an in-house Linux distribution. Also developed an application to modernize internal and external device communications through an in-house network solution.",
        accomplishments: ["Created a Gitlab pipeline that replaced the need for experts to manually build operating systems and install it on virtual machines for developers increasing overall developer efficiency.",
            "Adapted existing closed network communication script to modern modular application for easier integration of new communication protocol/standards"]
    },
    {
        title: "Software Engineer Intern",
        company: "General Atomics Aeronautical Systems, Inc.",
        time: "June 2022 - Aug 2022",
        description: "Developed multiple inhouse software development tools with a team that involved languages such as C, C++, and Python. Implemented the use of low level data manipulation (endianness, signage, etc), multithreading, memory locks, networking (TCP, UDP, Multicast), GUI work in C++, and data visualization. More info available upon request.",
        accomplishments: ["Created an application that replaced legacy software to load software onto embedded devices with substantial speed and throughput increases.",
            "Added additional data analysis visualization capabilities to existing time keeping software"]
    }]

    return (
        <div className="ExperienceView">
            {exp.map((item) => {
                return (
                    <div className='ExperienceItem'>
                        <div className="Date-Column">
                            <h3 className='Date'>{item.time}</h3>
                        </div>
                        <SingleExperience title={item.title} company={item.company} time={item.time} description={item.description} accomplishments={item.accomplishments}/>
                    </div>
                )
            }
            )}
        </div>
    )
}