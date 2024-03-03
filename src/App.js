

import Enfo from './componet/Enfo';
import On from './componet/On';
import Aic from './componet/aic';
import { BrowserRouter,Routes,Route, useNavigate, Router } from "react-router-dom"
import { Navigate } from 'react-router-dom';
import Test from './componet/test1';
import { Link } from 'react-router-dom';
import insta from "./componet/Instagram_logo_2016.svg.webp"
import snap from "./componet/snapchat-logo-icon-social-media-icon-free-png.webp"
import w from './componet/wlogo.jpg'
import Serch from './componet/serch';
import T from './componet/t';
import Sendcv from './CV/sendcv';
import Vewcv from './CV/vewcv';
import TT from './senddata/T';
import { useRef, useState } from 'react';
import Start from './game/start'
function App() {



const [clas,setclas]=useState('menunone')
const [clasul,setclasul]=useState('mwnuul')
const [open,setopen]=useState('gg-menu-boxed')
const [numberenu,setnumberenu]=useState(1)
function displaymenuclick(){
setclas('menu')
setnumberenu(numberenu+1)
if(numberenu % 2 == 0){
  setclas('dis')
  setclasul('mwnuuldis')
  setclas('menunone')
}else{
  setclasul('mwnuul')
}
}

  return (
<div id='alll' >

<i id='optionmenu' className={open} onClick={displaymenuclick}></i>
  <div className={clas}  >
      <br />
      <ul className={clasul}>
       <li>Home</li>
       <li>About</li>
       <li>Setting</li>
     </ul>
  </div>

    <div id='bacheser'>
      <div id='bacheser2'></div>
      <div id='bacheser3'></div>
    </div>

        <div id="heder">
    {/* <img id="imm" src={w} alt="" /> */}
    <div id="welcome">
    <h1>Welcome </h1><h2> To  WG Kurd Site</h2>  
    <p>this is my first webseti pleas support me for more</p><br />
    <div id="soc">
    <a className="insta" href="https://www.instagram.com/walid_ghaziy/"><img src={insta} alt="" /></a>
    <a className="snap" href="https://t.snapchat.com/BRx0w2xB"><img src={snap} alt="" /></a> 
    </div>
    </div>
</div>
<br />
<Routes >
  <Route path='/WG_Kurd_Site' element={<Enfo/>}/>
  <Route path='WG_Kurd_Site/yourinfo' element={<Serch/>}/>
  <Route path='WG_Kurd_Site/EysTest' element={<Aic/>}/>
  <Route path='WG_Kurd_Site/CV' element={<Sendcv/>}/>
  <Route path='WG_Kurd_Site/fifa' element={<Start/>}/>
  <Route path='T' element={<TT/>}/>
</Routes>
   
 
    </div>
  );
}

export default App;
