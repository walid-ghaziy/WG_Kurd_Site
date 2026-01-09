import profilePic from "./photo_2025-12-30_18-30-37.jpg"; // adjust path
import './cvv.css'
import video from './work.mp4'
import movie from './movie.mp4'
import p1 from './Screenshot 2025-12-30 231725.png'
import p2 from './Screenshot 2025-12-30 231807.png'
import p3 from './Screenshot 2025-12-30 231904.png'
import p4 from './Screenshot 2025-12-30 232025.png'
import p5 from './Screenshot 2025-12-30 232109.png'
import minu from './meni.jpg'

import pr1 from './pr/admin.PNG'
import pr2 from './pr/login.PNG'
import pr3 from './pr/singin.PNG'
import pr4 from './pr/info.PNG'
import pr5 from './pr/listtable.PNG'
import pr6 from './pr/listtop.PNG'
import pr7 from './pr/table.PNG'
import pr8 from './pr/top.PNG'
import pr9 from './pr/massigeuser.PNG'
import pr10 from './pr/massigradmin.PNG'
const Mycv = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero">
        <img src={profilePic} alt="Walid Ghazi" className="profile-pic" />
        <div className="slash"></div>
        <h1 id="name">Walid Ghazi Ali</h1>
        <p>Full-Stack Web Developer</p>
        <p>Cybersecurity EH</p>
        <p>IT Technical</p>
      </header>
<section id="contact" className="section">
        <h2>Contact</h2>

        <p>
          Instagram:{" "}
          <a href="https://www.instagram.com/walid_ghaziy/?hl=en">
           Instagram
          </a>
        </p>

 <p>
          WhatsApp:{" "}
          <a
            href="https://api.whatsapp.com/send/?phone=9647515382906&text&type=phone_number&app_absent=0&wame_ctl=1"
            target="_blank"
            rel="noopener noreferrer"
          >
           WhatsApp
          </a>
        </p>


        <p>
          GitHub:{" "}
          <a
            href="https://github.com/walid-ghaziy"
            target="_blank"
            rel="noopener noreferrer"
          >
           GitHub
          </a>
        </p>



 
       
      </section>
      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          • <b style={{color:"green"}}>Im Walid My Birth (2000) Live In Mserek</b> 
          And I am an IT Technical professional with 3 years of experience and
          currently studying in the <b style={{color:"green"}}>Information Technology Department at DPU</b>. I
          have strong hands-on experience in computer systems, networking, and IT
          administration, along with solid programming and development skills.
        </p>
<br/>
        <p>
          • I am a Full-Stack Web Developer with experience in React, Node.js,
          PHP, and SQL databases. I have developed and managed web and
          mobile-related projects, and I am familiar with GitHub, Git, and Visual
          Studio Code.
        </p>
<br/>
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
             <span className="skill">PHP</span>
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
          <span className="skill">MySQL</span>
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
            <h3>WG Job</h3>
            <p>
              A full-stack application to manage tasks with authentication.
            </p>
            <p>
              بو به لاف كرن و ديتنا كاري ب شئوه كئ بساناهي
            </p>
            <p>

              <strong>Tech:</strong> React, Node.js, MySQL
            </p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/walid-ghaziy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
   <video style={{width:"100%",margin:"0px"}} height={200} src={video} controls loop></video>

          </div>


          <div className="project-card">
            <h3>Movie</h3>
            <p>
             For See Movie
            </p>
            <p>
              بو به لاف كرنا فلم و زنجيران
            </p>
            <p>

              <strong>Tech:</strong> HTML,CSS,Javascipt
            </p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/walid-ghaziy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a><br /><br />
   <video  height={200} style={{width:"100%",margin:"0px"}} src={movie} controls loop></video>

          </div>


           <div className="project-card">
            <h3>POS</h3>
            <p>
             For POS
            </p>
            <p>
              حسابات و روزئن كاركرنئ ئن معمه له كئ 
            </p>
            <p>

              <strong>Tech:</strong> HTML,CSS,PHP,MySQL
            </p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/walid-ghaziy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a><br /><br />
<div className="imcv">
              <img src={pr1} alt="" width={150} height={300}/>
              <img src={pr2} alt="" width={150} height={300}/>
              <img src={pr3} alt="" width={150} height={300}/>
              <img src={pr4} alt="" width={150} height={300}/>
              <img src={pr5} alt="" width={150} height={300}/>
              <img src={pr5} alt="" width={150} height={300}/>
              <img src={pr6} alt="" width={150} height={300}/>
              <img src={pr7} alt="" width={150} height={300}/>
              <img src={pr8} alt="" width={150} height={300}/>
              <img src={pr9} alt="" width={150} height={300}/>
              <img src={pr10} alt="" width={150} height={300}/>
            </div>
          </div>

          <div className="project-card">
            <h3>By & Sell (Home,Villa,Hotel .....)</h3>
            <p>
              An online store with product management and payment integration.
            </p>
            <p>
كرين و فروتن و كرئ كرنا خاني و هوتيل و فلان 
            </p>
            <p>
              <strong>Tech:</strong> React, Node.js, SQL
            </p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/walid-ghaziy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a><br /><br />
            <div className="imcv">
              <img src={p1} alt="" width={150}/>
              <img src={p2} alt="" width={150}/>
              <img src={p3} alt="" width={150}/>
              <img src={p4} alt="" width={150}/>
              <img src={p5} alt="" width={150}/>
            </div>
          </div>

          <div className="project-card">
            <h3>Minu</h3>
            <p>
              An online Minu For Restorant.
            </p>
            <p>
برئكا موبايلي لسه ر مئزئ خارنئ داخازبكه
            </p>
            <p>
              <strong>Tech:</strong> HTML , CSS و Nodejs
            </p>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/walid-ghaziy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a><br /><br />
            <div className="imcv">
              <img src={minu} alt="" style={{width:"100%",height:"auto",margin:"0px"}}/>

            </div>
          </div>




        </div>
      </section>





      {/* Contact Section */}
      
    </>
  );
};

export default Mycv;
