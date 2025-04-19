
import '../css/Education.css'
import SectionHeading from './SectionHeading'
function Education() {
    return (
        <>
            <div className='education-container'>
                <SectionHeading heading={'Education'} />
                <div className="eDiscription-container">
                    <p><span className="e-span">MCA</span>-Amity University</p>
                    <p><span className="e-span">B.com</span>-Laxman Singh Mahar Government P.G College</p>
                    <p><span className="e-span">12th Grade</span>-Soar Valley Public School</p>
                    <p><span className="e-span">10th Grade</span>-Soar Valley Public School</p>  
                </div>
            </div>

        </>
    )
}
export default Education