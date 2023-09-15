// src/components/About.js
import './About.css'
import React from 'react'

export default function About() {

    return (
        <div className="AboutView">
            <div className="Head-Text">
            <h1 className="Title">Noah Jaussi</h1>
            <h3 className="SubHeader">Software Engineer</h3>
            <p className="SubText">I make cool stuff and things.</p>
            <div className="Socials">
            <a className="Link" href="https://github.com/noahyoda">
                <svg className="Socials Git" xmlns="http://www.w3.org/2000/svg" width="31" height="31" 
                    viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
            </a>
            <a className="Link" href="https://www.linkedin.com/in/noah-jaussi-678b121ba/">
            <svg className="Socials" xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                viewBox="0 0 24 24">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
            </a>
            <a className="Link" href="mailto:noahjaussi@gmail.com?subject=Portfolio%20Contact">
            <svg className="Socials Mail" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 50 50">
                <path d="M 4.5 3 C 2.5788117 3 1 4.5788117 1 6.5 L 1 18 C 1 19.64497 2.3550302 21 4 21 L 8 21 L 8 13.673828 L 12 16.798828 L 16 13.673828 L 16 21 L 20 21 C 21.64497 21 23 19.64497 23 18 L 23 6.5 C 23 4.5788117 21.421188 3 19.5 3 C 18.750123 3 17.982547 3.2422598 17.34375 3.7421875 L 12 7.9121094 L 6.65625 3.7421875 L 6.6542969 3.7421875 C 6.0158061 3.2430811 5.2492693 3 4.5 3 z M 4.5 5 C 4.8301235 5 5.1426247 5.098287 5.4238281 5.3183594 L 6 5.7675781 L 6 9.5742188 L 3 7.2324219 L 3 6.5 C 3 5.6591883 3.6591883 5 4.5 5 z M 19.5 5 C 20.340812 5 21 5.6591883 21 6.5 L 21 7.2324219 L 18 9.5742188 L 18 5.7675781 L 18.576172 5.3183594 C 18.857375 5.0982871 19.169877 5 19.5 5 z M 8 7.328125 L 12 10.449219 L 16 7.328125 L 16 11.136719 L 12 14.261719 L 8 11.136719 L 8 7.328125 z M 3 9.7695312 L 6 12.111328 L 6 19 L 4 19 C 3.4349698 19 3 18.56503 3 18 L 3 9.7695312 z M 21 9.7695312 L 21 18 C 21 18.56503 20.56503 19 20 19 L 18 19 L 18 12.111328 L 21 9.7695312 z"></path>
            </svg>

            </a>
            </div>
            <div className="Body About">
                <h4 className="SubHeader">About Me</h4>
                <p className="SubText">
                    I've always had an interest in how things work, and I've always been a problem solver. 
                    From teaching myself how computers work and joining my local Computer Repair club to going to school to become a Software Engineer I have relentlessly pursed my passion for understanding new technologies and building products for a better future.
                </p>
                <p className="SubText">
                    Now I am going to be graduating from the Univeristy of Utah with a Bachelors of Computer Science and dedicating myself to building the future of technology.
                    When I am not coding or working on school I am either out in the mountains or playing video games with my friends. 
                    I love to paraglide, go camping/backpacking, surf, paddleboard, road-trip, and explore national parks.
                </p>
                <p className="SubText">
                I hope this page allows you to get to know me better and hopefully I can inspire you to also change the world through technology.
                </p>
            </div>
            </div>

        </div>
    )
}