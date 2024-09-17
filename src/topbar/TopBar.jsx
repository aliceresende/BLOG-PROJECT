import { Link } from "react-router-dom"
import "./topbar.css"

export default function TopBar({activeSection}) {
  return (
    <div className='top'>
     <div className='topLeft'><b>Portfolio</b></div>
      <div className='topCenter'>
      <ul className="topList"> 
      <li className={`topListItem ${activeSection === 'home' ? 'active' : ''}`}>
            <a href="#home" className="topLink">Home</a>
          </li>
          <li className={`topListItem ${activeSection === 'about' ? 'active' : ''}`}>
            <a href="#about" className="topLink">About me</a>
          </li>
          <li className={`topListItem ${activeSection === 'skills' ? 'active' : ''}`}>
            <a href="#skills" className="topLink">Skills</a>
          </li>
          <li className={`topListItem ${activeSection === 'projects' ? 'active' : ''}`}>
            <a href="#projects" className="topLink">Projects</a>
          </li>
          <li className="topListItem">
            <a href="#contact" className="topLink">Contact</a>
          </li>
        </ul>
      </div>

    </div>
  )
}
