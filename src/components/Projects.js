import './Projects.css'

function Project(props){
    if (props.link === ""){
        return (
            <div classname="ProjectItem">
                <h3 className="ProjectInfo">{props.title}</h3>
                <p className="Description">{props.description}</p>
            </div>
        )
    } else {
        // link element is for chain symbol
        return (
            <div classname="ProjectItem">
                <a className="Link" href={props.link}>
                    <h3 className="ProjectInfo">{props.title} <i class="fa fa-chain"></i></h3>
                </a>
                <p className="Description">{props.description}</p>
            </div>
        )
    }
}

export default function Projects() {
    let proj = [
        {
            title: "Portfolio Website",
            description: "Designed, developed, and deployed this portfolio website using React.js, CSS, and Netlify.",
            img: "https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png",
            link: "https://github.com/noahyoda/Portfolio/blob/main/src/resources/ray_tracing.png?raw=true",
            tag: "Image Portfolio"
        },
        {
            title: "WebGL Raytracer",
            description: "Designed and developed a raytracing scene using WebGL and Javascript for a computer graphics course.",
            img: "https://github.com/noahyoda/Portfolio/blob/main/src/resources/ray_tracing.png?raw=true",
            link: "",
            tag: "Image Raytracer"
        },
        {
            title: "3D Print Visualization",
            description: "Designed and developed a 3D print file visualization tool that allows users to view their 3D print files before printing to check for points of failure or weakness. Extended information available upon request.",
            img: "https://github.com/noahyoda/gcode_viz/blob/master/overhang.png?raw=true",
            link: "https://github.com/noahyoda/gcode_viz/tree/master",
            tag: "Image GcodeViz"
        },
        {
            title: "Lifestyle App",
            description: "Designed and developed an Android app that utilized kotlin coroutines, sql/room database access, and more. Extended information available upon request.",
            img: "https://developer.android.com/static/studio/images/new-studio-logo-1.png",
            link: "",
            tag: "Image Android"
        },
        {
            title: "Chopduino",
            description: "Designed, programmed, and 3D printed an assistive eating device using arduino and recycled electronics.",
            img: "https://camo.githubusercontent.com/6ed6ee9389ee16462b7c6813be61d4f76a18f8988635837145881c695f0439e4/68747470733a2f2f6c68362e676f6f676c6575736572636f6e74656e742e636f6d2f77626f3154446f3076364669633830555a33314e6a3150305766304861393665716b61576e7074785749473649474f7645487a4b4b625437664c336c43724f316c536465756975653655426b45495041725631524f696c74636f5159516c4279685f2d727a416b514d306b4437645679583742374d4553396d5734584871776d6446775472343930",
            link: "https://github.com/noahyoda/Chop-duino/tree/main",
            tag: "Image Arduino"
        }
    ]
    return (
        <div className="ProjectView">
            <h3 className="Project-Title">Projects (work in progress)</h3>
            <div className="Project-List">
                {proj.map((item) => {
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
        </div>
    )
}

/*
{exp.map((item) => {
    return (
        <div className='ExperienceItem'>
            <div className="Date-Column">
                <h3 className='Date'>{item.time}</h3>
            </div>
            <SingleExperience title={item.title} company={item.company} link={item.link} time={item.time} description={item.description} accomplishments={item.accomplishments}/>
        </div>
    )
}
)}
*/