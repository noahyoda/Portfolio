// src/components/Experience.js
import './Experience.css';

function ExperienceItem(props) {
    return (
        <div className="ExperienceItem">
            <div className="ExperienceItemColumn Date-Column">
                <h3 className='Left Date'>{props.time}</h3>
            </div>
            <div className="ExperienceItemColumn Exp-Column">
                <h3 className='Right Title'>{props.title}</h3>
                <h3 className='Right Company'>{props.company}</h3>
                <p className='Right Description'>{props.description}</p>
            </div>
        </div>
    )
}

export default function Experience() {
    let exp = {
        title: "Software Engineer",
        company: "Google",
        time: "2019 - Present",
        description: "I work on the Google Search team, where I help build the world's most popular search engine."
    }

    return (
        <div className="ExperienceView">
            <ExperienceItem time={exp.time} title={exp.title} company={exp.company} description={exp.description} />
        </div>
    )
}