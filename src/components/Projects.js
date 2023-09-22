import './Projects.css'
import React from 'react'

function Project(props){
    if (props.link === ""){
        return (
            <div className="ProjectItem">
                <h3 className="ProjectInfo">{props.title}</h3>
                <p className="Description">{props.description}</p>
            </div>
        )
    } else {
        // link element is for chain symbol
        return (
            <div className="ProjectItem">
                <a className="Link" href={props.link}>
                    <h3 className="ProjectInfo">{props.title} <i className="fa fa-chain"></i></h3>
                </a>
                <p className="Description">{props.description}</p>
            </div>
        )
    }
}

export default function Projects(props) {
    return (
        <div className="ProjectView">
            <h3 className="Project-Title">Projects (work in progress)</h3>
            <div className="Project-List">
                {props.proj.map((item) => {
                    return (
                        <div className='Project-Grid'>
                            <div className="Project-Image">
                                <img className={item.tag} src={item.img}></img>
                            </div>
                            <Project
                                title={item.title} 
                                description={item.description}
                                link={item.link}
                            />
                        </div>
                    )
                }
                )}
            </div>
            {/*
            <h3 className="Project-Title">Hackathons</h3>
            */}
        </div>
    )
}
