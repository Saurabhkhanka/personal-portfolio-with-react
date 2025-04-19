
import { Link } from 'react-router-dom'
import '../css/NavigationBar.css'
import { useState } from 'react'
function NavigationBar() {
  const[logo, setLogo] = useState("Saurabh")
  const [navData, setVavData] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1
    },
    {
      title: "About",
      link: "/about-page",
      id: 2
    },
    {
      title: "Project",
      link: "/projects",
      id: 3
    },
    {
      title: "Resume",
      id: 4
    }
  ])
  return (
    <>
      <div className="nav">
        <h1 className="navLogo">{logo}</h1>
        <ul className='list'>
          {navData.map((link)=>{return <li id={link.id}><Link to={link.link}>{link.title}</Link></li>})}
        </ul>
        <div className='listIcon'><i class="ri-menu-3-line"></i></div>
      </div>
    </>
  )
}
export default NavigationBar