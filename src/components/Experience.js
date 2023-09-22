import './Experience.css';
import React from "react";

function SingleExperience(props) {
    return (
        <div className="Exp-Column">
            <h3 className='Title'>{props.title}</h3>
            <a className='Link' href={props.link}>
                <h3 className='Link-Text'>{props.company} <i className="fa fa-chain"></i></h3>
            </a>
            <h4 className='KeyAccomp SubTitle'><u>Key Accomplishments</u></h4>
            {props.accomplishments.map((item) => {
                return (
                    <li className='Accomplishment'>
                        {item}
                    </li>
                )
            })}
        </div>
    )
}

export default function Experience(props) {
    return (
        <div className="ExperienceView">
            <h2 className="SubHeader">{props.type} Experience</h2>
            {props.exp.map((item) => {
                return (
                    <div className='ExperienceItem'>
                        <div className="Date-Column">
                            <h3 className='Date'>{item.time}</h3>
                        </div>
                        <SingleExperience 
                            title={item.title} 
                            company={item.company} 
                            link={item.link} 
                            time={item.time} 
                            accomplishments={item.accomplishments}/>
                    </div>
                )
            }
            )}
        </div>
    )
}