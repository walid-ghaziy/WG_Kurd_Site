import { useEffect, useRef, useState } from "react"
import Test from "./test1"
import '../index.css'
import insta from "./Instagram_logo_2016.svg.webp"
import snap from "./snapchat-logo-icon-social-media-icon-free-png.webp"
import im from "./IMG_0427.PNG"
import loding from "./8ab21b1edaa6d6d3405af14cd018a91b.jpg"
import Serch from "./serch"
import On from "./On"
import w from './w2.png'
import { BrowserRouter,Routes,Route, Router, createRoutesFromElements, NavLink } from "react-router-dom"
import Aic from "./aic"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import eysphoto from './Screenshot 2024-02-01 193406.png'
import cvphoto from './cv-logo-design-initial-cv-letter-logo-design-monogram-design-pro-vector.jpg'
import gamephoto from './OIP.png'
import Mycv from "../MyCv/Mycv"
// import Foter from "./Foter"
// import p1 from './IMG_0427.PNG'
// import p2 from './cv.png'
// import p3 from './Screenshot 2024-02-01 193406.png'
import qrphoto from './qr.png'
// import sozear from "../project/sozear"
import Logosahat from './Project.png'

const Enfo=()=>{

const info = useNavigate()
const Eys = useNavigate()
const CV = useNavigate()
const Game = useNavigate()
const QR = useNavigate()
const sozear = useNavigate()
const Fm = useNavigate()

// const timereklam =[p1,p2,p3]
const[vewreklam,setvewreklam]=useState()

var point=0
// setInterval(() => {
// setTimeout(() => {
//   setvewreklam(p1)
// }, 1000);
// setTimeout(() => {
//   setvewreklam(p2)
// }, 2000);
// setTimeout(() => {
//   setvewreklam(p3)
// }, 4000);


// }, 4000);

    return(
    
      <div id="all" >
  

{/* <div className="reklam">
  <img src={vewreklam} alt="" />
</div> */}


<h1 id="nameoption">BODY</h1>
<div id="option">
    
   <div id="dd" className="div">
    <img src={im} alt="" />
    <p id="p">  دیارکرنا رێک و پێکیا بەژنێ و کەلەخی لديف ستانداردئ جيهاني</p>
    <button  id="oop" onClick={()=> info('yourinfo')}>Open</button> 
</div>
{/* ................................................................................ */}
<div id="dd" className="div">
    <img src={eysphoto} alt="" />
    <p id="p"> Eys Tist</p>
    <button  id="oop" onClick={()=> Eys('EysTest')}>Open</button> 
    </div>

</div>

{/* ..................................................2.................................... */}
<h1 id="nameoption">CREATE</h1>
<div id="option">

  {/* <div id="dd" className="div">
    <img src={qrphoto} alt="" />
    <p id="p"> Fake massige </p><br />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit saepe nihil a corrupti tempore, nesciunt dignissimos porro esse quia harum.</p>
    <button  id="oop" onClick={()=> Fm('Fakemassige')}>Open</button> 
  </div> */}
  
  <div id="dd" className="div">
    <img src={cvphoto} alt="" />
    <p id="p"> Create CV </p><br />
    <p> saepe nihil ant dignissimos porro esse quia harum.</p>
    <button  id="oop" onClick={()=> CV('cv')}>Open</button> 
  </div>


  
  <div id="dd" className="div">
    <img src={qrphoto} alt="" />
    <p id="p"> QR cod </p><br />
    <p>Lorem ipsum dolor sit  a corrro esse quia harum.</p>
    <button  id="oop" >Closed</button> 
  </div>
  


</div>

<h1 id="nameoption">GAME</h1>
<div id="option">
    <div id="dd" className="div">
    <img src={gamephoto} alt="" />
    <p id="p"> Challenge Game</p><br />
    <p>Lorem ! Sequi, magni repellenaerat necessitatibus non.</p>
    <button  id="oop" >Closed</button> 
  </div>


</div>

<h1 id="nameoption">Project</h1>
<div id="option">
    <div id="dd" className="div">
    <img src={Logosahat} alt="" />
    <p id="p"> bissnes project for sozear compane</p>
    <button  id="oop"  >Closed</button> 
  </div>


</div>




<div id="boton">

</div>

{/* 
 <Foter/> */}


</div>
    )
}
export default Enfo

