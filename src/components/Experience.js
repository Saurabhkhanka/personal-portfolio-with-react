import '../css/Experience.css'
import SectionHeading from './SectionHeading'
function Experience() {
    return (
        <>
            <div className='experience-container'>
                <SectionHeading heading={'Experience'} />
                <div className="experience-discription-container">
                    <p><span className="s-span">Intern - ABC Company (2023) :</span>Worked on developing and maintaining front-end components and back-end services for a web application using JavaScript, Node.js, and MongoDB.</p>
                    <p><span className="s-span">Freelance Web Developer (2022-Present) :</span>Designed and implemented responsive websites and web applications for clients, focusing on performance, security, and scalability.</p>
                </div>
            </div>

        </>
    )
}
export default Experience