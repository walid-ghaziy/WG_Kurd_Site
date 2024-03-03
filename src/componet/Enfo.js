import { useEffect, useRef, useState } from "react"
import Test from "./test1"
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
import cvphoto from './cv.png'
const Enfo=()=>{

const info = useNavigate()
const Eys = useNavigate()
const CV = useNavigate()
const fifa = useNavigate()



    return(
    
<div id="all" >


<div id="option">
    
   <div id="dd" className="div">
    <img src={im} alt="" />
    <p id="p"> دیارکرنا رێک و پێکیا بەژنێ و کەلەخی </p>
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
<div id="option">

  <div id="dd" className="div">
    <img src={cvphoto} alt="" />
    <p id="p"> CREATE CV</p>
    <button  id="oop" onClick={()=> CV('cv')}>Open</button> 
  </div>

  <div id="dd" className="div">
    <img  alt="" />
    <p id="p"> CREATE CV</p>
    <button  id="oop" onClick={()=> fifa('fifa')}>Open</button> 
  </div>


</div>


<div id="boton">

</div>
{/* <Link to={'/T'}>test</Link> */}

</div>
    )
}
export default Enfo

