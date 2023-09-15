import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Experience from "../components/Experience";

function Home() {
  let projs = [
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

  let work = [{
    title: "Software Engineer Intern",
    company: "General Atomics Aeronautical Systems, Inc.",
    link: "https://www.ga-asi.com/",
    time: "June 2023 - Aug 2023",
    accomplishments: ["Created a Gitlab pipeline that replaced the need for experts to manually build linux based operating systems and install it on virtual machines for developers increasing overall developer efficiency and productivity.",
    "Adapted existing closed network communication script to modern modular application for easier integration of new communication protocol/standards.",
    "Created a script to automate documenting changes to specific config files for department(s) not using version control software."]
},
{
    title: "Software Engineer Intern",
    company: "General Atomics Aeronautical Systems, Inc.",
    link: "https://www.ga-asi.com/",
    time: "June 2022 - Aug 2022",
    accomplishments: ["Developed an application that replaced legacy software to load software onto embedded devices with substantial speed and throughput increases. Accomplished using C++, QT, UDP Multicast networking, multithreading, byte manipulation (endianness, signage, etc.), and more.",
    "Added additional data analysis visualization capabilities to existing time keeping software",
    "Initiated a project to connect Matlab simulation to existing robotic arms."]
},
{
    title: "I.T. Intern",
    company: "Kahuku Medical Center",
    link: "https://www.kmc-hi.org/",
    time: "April 2020 - May 2020",
    accomplishments: ["Lead and implemented a project to upgrade the company computer backlog from Windows 7 to Windows 10.",
    "Administered tech support to employees through device maintenance and technical consultation during the beginning of the pandemic."]
}]

  let volunteer = [{
    title: "Computer Repair Club President",
    company: "Kahuku Computer Repair Club",
    link: "",
    time: "Sept 2016 - Jul 2020",
    accomplishments: ["Diagnosed and repaired phones, computers, and other misc. electronic devices for Kahuku High School and local community for free",
    "Refurbished computer donations to be given to students who couldn't afford a home computer"]
  },
  {
    title: "Co-Founder/Advisor",
    company: "Kahuku Public Library Robotics Club",
    link: "",
    time: "Aug 2014 - May 2016",
    accomplishments: ["Co-Founded a robotics club throught local public library and acted as active advisor for the club",
    "Taught kids basic coding and robotic assembly process along with technical problem solving skills"]
  },
  {
    title: "Fundraiser Head",
    company: "Ronald McDonald House (Non-Affiliate)",
    link: "https://www.rmhcseattle.org/donate-today-2/",
    time: "Jan 2014 - July 2015",
    accomplishments: ["Organized and lead a fundraising run for the Ronald McDonald House",
    "Raised over $3500 for the Ronald McDonald House"]
  },
  {
    title: "Sophomore Historian",
    company: "Kahuku Student Body Government",
    link: "https://www.kahukuhigh.org/",
    time: "Aug 2017 - June 2018",
    accomplishments: ["Acted as record keeper, assistant activity planner, and head communicator between Student Body Government and general student body",
    "Helped organize, choreagraph, and advertise multiple class events and spirit competitions"]
  },
  {
    title: "Freshmen Treasurer",
    company: "Kahuku Student Body Government",
    link: "https://www.kahukuhigh.org/",
    time: "Aug 2016 - June 2017",
    accomplishments: ["Acted as financial record keeper and assistant activity planner/communicator between Student Body Government and general student body",
    "Helped organize, choreagraph, and advertise multiple class spirit competitions and events"]
  }]

  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <main className="MainSection">
        <Navbar />
        <About />
        <Experience type={"Work"} exp={work}/>
        <Projects proj={projs}/>
        <Experience type={"Volunteer"} exp={volunteer}/>
      </main>
    </div>
  );
}

export default Home;
