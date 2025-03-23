import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>
      <section className="container">
        <div className="profile-picture">
          <img src="img/profilePicture.jpg" alt="Profile Picture" width="150" height="150"/>
        </div>
        
        <div className="column">
          <div className="about-intro">
            <h1 className="name">My Brindesjö</h1>
            <h3 className="username">@mybrindesjo</h3>
            <p>💡 ⎸ UX-designer</p>
            <p>🎨 ⎸ UI-designer</p>
            <p>👩🏼‍💻 ⎸ Frontendutvecklare</p>
            <p>🛠️ ⎸ Figma och VS code</p>
            <p>🎓 ⎸ Chas Academy</p>
            <p>📍 ⎸ Stockholm, Sverige</p>
          </div>
          <div className="social-links">
            <a href="mailto:my.brindesjo@gmail.com">
              <img src="img/gmail.png" alt="Figma" class="social-img" width="50" height="50" />
            </a>
            <a href="https://github.com/mybrindesjo?tab=repositories" target="_blank">
              <img src="img/github.png" alt="Github" class="social-img" width="50" height="50"/>
            </a>
            <a href="https://www.linkedin.com/in/mybrindesjo/" target="_blank">
              <img src="img/linkedin.png" alt="LinkedIn" class="social-img" width="50" height="50"/>
            </a>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header