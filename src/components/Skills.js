import '../css/Skills.css'
import SectionHeading from './SectionHeading'
function Skills() {
    return (
        <>
            <div className='skills-container'>
                <SectionHeading heading={'Skills'} />
                <div className="skills-discription-container">
                    <p><span className="s-span">Frontend:</span>HTML, CSS, JavaScript, React, Bootstrap</p>
                    <p><span className="s-span">Backend:</span>Node.js, Express.js, MongoDB</p>
                    <p><span className="s-span">Version Control:</span>Git, GitHub</p>
                    <p><span className="s-span">Tools & Technologies:</span>Postman, Visual Studio Code, REST APIs, AJAX</p>  
                </div>
            </div>

        </>
    )
}
export default Skills