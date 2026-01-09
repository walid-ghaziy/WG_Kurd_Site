

import Enfo from './componet/Enfo';
import On from './componet/On';
import Aic from './componet/aic';
import { BrowserRouter,Routes,Route, useNavigate, Router } from "react-router-dom"
import { Navigate } from 'react-router-dom';
import Test from './componet/test1';
import { Link } from 'react-router-dom';
import Serch from './componet/serch';
import Sendcv from './CV/sendcv';
import Vewcv from './CV/vewcv';
import {  useState } from 'react';
import Start from './game/start'
import Foter from './componet/Foter';

import w from './componet/wlogo.png'
import QR from './QR/QR'
import Sozear from './project/sozear';
import Mycv from './MyCv/Mycv'
import Cours from './cours/Cours';
function App() {


const homee =useNavigate()


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
       <li onClick={()=>{homee('/WG_Kurd_Site')}}>Home</li>
       <li>About</li>
       <li>Setting</li>
     </ul>
  </div>

    
   

        <div id="heder">
    <img id="imm" src={w} alt="" onClick={()=>{homee('/WG_Kurd_Site')}}/>
    <div id="welcome" >
    <h2>WG Kurd WEBSITE</h2>  
    </div>
<div>
  <input type="serch" id='serch' placeholder='SERCH'/>
</div><br /><br />
<div id='div-heder-button'>
<button onClick={()=>{homee('/WG_Kurd_Site')}}>Home</button>
<button onClick={()=>{alert("دبارئ دروستكرنئ دايه")}}>My Cours</button>

</div>
</div>
<br /><br /><br />

<Routes >
  <Route path='/WG_Kurd_Site' element={<Enfo/>}/>
  <Route path='WG_Kurd_Site/yourinfo' element={<Serch/>}/>
  <Route path='WG_Kurd_Site/EysTest' element={<Aic/>}/>
  <Route path='WG_Kurd_Site/CV' element={<Sendcv/>}/>
  <Route path='WG_Kurd_Site/Game' element={<Start/>}/>
  <Route path='WG_Kurd_Site/QR' element={<QR/>}/>
  <Route path='WG_Kurd_Site/Sozear' element={<Sozear/>}/>
  <Route path='WG_Kurd_Site/Cours' element={<Cours/>}/>
 
 
</Routes>





    
    </div>
  );
}

export default App;