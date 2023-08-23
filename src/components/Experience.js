// src/components/Experience.js
import './Experience.css';

export default function Experience() {
    let exp = {
        title: "Software Engineer Intern",
        company: "General Atomics Aeronautical Systems, Inc.",
        time: "June 2023 - Aug 2023",
        description: "Developed multiple inhouse software development tools with a team that involved languages such as C, C++, and Python. Implemented the use of low level data manipulation (endianness, signage, etc), multithreading, memory locks, networking (TCP, UDP, Multicast), GUI work in C++, and data visualization. More info available upon request."
    }

    return (
        <div className="ExperienceItem">
            <div className="Date-Column">
                <h3 className='Date'>{exp.time}</h3>
            </div>
            <div className="Exp-Column">
                <h3 className='Title'>{exp.title}</h3>
                <h3 className='Company'>{exp.company}</h3>
                <p className='Description'>
                    {exp.description}
                </p>
                <h4 className='Right SubHeader'>Technologies Used</h4>
            </div>
        </div>
    )
}