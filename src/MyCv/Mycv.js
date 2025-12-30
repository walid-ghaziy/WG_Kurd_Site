import profilePic from "./photo_2025-12-30_18-30-37.jpg"; // adjust path
import './cvv.css'
const Mycv = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero">
        <img src={profilePic} alt="Walid Ghazi" className="profile-pic" />
        <div className="slash"></div>
        <h1>Walid Ghazi</h1>
        <p>Full-Stack Web Developer</p>
        <p>Cybersecurity EH</p>
        <p>IT Technical</p>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          • I am an IT Technical professional with 3 years of experience and
          currently studying in the Information Technology Department at DPU. I
          have strong hands-on experience in computer systems, networking, and IT
          administration, along with solid programming and development skills.
        </p>

        <p>
          • I am a Full-Stack Web Developer with experience in React, Node.js,
          PHP, and SQL databases. I have developed and managed web and
          mobile-related projects, and I am familiar with GitHub, Git, and Visual
          Studio Code.
        </p>

        <p>
          • I also have knowledge in Cybersecurity and Ethical Hacking, including
          website scanning, network scanning, OSINT, phishing analysis, and basic
          penetration testing techniques.
        </p>

        <p>
          • In addition, I have experience as an IT Administrator, managing
          systems, users, and technical support tasks. I am passionate about
          technology and continuous learning.
        </p>
      </section>

      {/* OS Skills */}
      <section id="os-skills" className="section">
        <h2>Operating System Skills</h2>

        <div className="os-container">
          <div className="os-card">
            <h2>Windows</h2>
            <ul>
              <p>Windows 10 / 11</p>
              <p>Microsoft Office</p>
              <p>Installation & Configuration</p>
              <p>Command Line & PowerShell</p>
              <p>System Troubleshooting</p>
              <p>Software Deployment</p>
              <p>Administrator</p>
            </ul>
          </div>

          <div className="os-card">
            <h2>Linux & Security</h2>
            <ul>
              <p>OSINT</p>
              <p>Web Security (OWASP Top 10)</p>
              <p>SQL Injection, XSS, CSRF</p>
              <p>Malware & Phishing Analysis</p>
              <p>Social Engineering</p>
              <p>TCP/IP, DNS, DHCP, HTTP/HTTPS</p>
              <p>Firewalls, Routers, VPN</p>
            </ul>
          </div>
        </div>
      </section>

      {/* Web Skills */}
      <section className="section">
        <h2>Web Development Skills</h2>
        <div className="skills-container">
          <span className="skill">React</span>
          <span className="skill">JavaScript</span>
          <span className="skill">HTML5</span>
          <span className="skill">CSS3</span>
          <span className="skill">Node.js</span>
          <span className="skill">PHP</span>
          <span className="skill">REST APIs</span>
        </div>
      </section>

      {/* Programming */}
      <section className="section">
        <h2>Programming Languages</h2>
        <div className="skills-container">
          <span className="skill">JavaScript</span>
          <span className="skill">C#</span>
          <span className="skill">Python</span>
        </div>
      </section>

      {/* Tools */}
      <section className="section">
        <h2>Tools & DevOps</h2>
        <div className="skills-container">
          <span className="skill">GitHub</span>
          <span className="skill">Git</span>
          <span className="skill">Vercel (Frontend)</span>
          <span className="skill">Railway (Backend)</span>
          <span className="skill">APIs</span>
          <span className="skill">SQL</span>
        </div>
      </section>

      {/* Network */}
      <section className="section">
        <h2>Networking</h2>
        <div className="skills-container">
            <span className="skill">LAN & WAN</span>
          <span className="skill">IP, DNS, DHCP</span>
          <span className="skill">Switches & Routers</span>
          <span className="skill">Fiber & Copper Cables</span>
          <span className="skill">Mikrotik / Cisco (Basic)</span>
        </div>
      </section>

      <section className="section">
        <h2>Editor</h2>
        <div className="skills-container">
            <span className="skill">Photograth</span>
          <span className="skill">Primer Pro</span>
          <span className="skill">Photoshop</span>
          <span className="skill">Ligthroom</span>
          <span className="skill">desginer</span>
        </div>
      </section>


      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects-container">
          <div className="project-card">
            <h3>Task Management System</h3>
            <p>
              A full-stack application to manage tasks with authentication.
            </p>
            <p>
              <strong>Tech:</strong> React, Node.js, PostgreSQL
            </p>
            <a
              href="https://github.com/yourusername/task-manager"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://your-demo-link.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>

          <div className="project-card">
            <h3>E-commerce Website</h3>
            <p>
              An online store with product management and payment integration.
            </p>
            <p>
              <strong>Tech:</strong> React, Node.js, SQL
            </p>
            <a
              href="https://github.com/yourusername/ecommerce"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://your-ecommerce-demo.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>

        <p>
          Instagram:{" "}
          <a href="https://www.instagram.com/walid_ghaziy/?hl=en">
           Instagram
          </a>
        </p>

        <p>
          GitHub:{" "}
          <a
            href="https://github.com/walid-ghaziy"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/yourusername
          </a>
        </p>

       
      </section>
    </>
  );
};

export default Mycv;