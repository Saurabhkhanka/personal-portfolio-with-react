import { useState } from 'react'
import '../css/Home.css'
import AboutMe from './AboutMe'
import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
function Home() {
    const [name, setName] = useState([
        {
            content: "Saurabh",
            id: "firstName"
        },
        {
            content: "Singh",
            id: "middleName"
        },
        {
            content: "Khanka",
            id: "lastName"
        }
    ])
    const [about, setAbout] = useState([
        {
            occ:"Full Stack Developer",
            divider:"|",
            id:1
        },
        {
            occ:"Web Development Enthusiast",
            id:2
        }
    ])
    return (
        <>
            <div className='homeContainer'>
                <div className='blurrDiv'>
                    <div className='content'>
                        <h1>{name.map((name) => { return <span id={name.id}>{name.content}</span> })}</h1>
                        <h3>{about.map((about)=>{return <span key={about.id}>{about.occ} {about.divider}</span>})}</h3>
                        <button>Download Resume</button>
                        <div className='linkTag'>
                            <span>GitHub</span>
                            <span>Gmail</span>
                        </div>
                    </div>

                </div>
            </div>
            <AboutMe />
            <Education />
            <Skills />
            <Experience />
            <Contact />

        </>
    )
}
export default Home