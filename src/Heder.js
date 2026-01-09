import { useState } from "react"
import { useNavigate } from "react-router-dom"
import w from './componet/wlogo.png'

export default function Heder(){
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
    return(<>
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
<button>Home</button>
<button onClick={()=>{
    homee('WG_Kurd_Site/Cours')
}}>My Cours</button>

</div>
</div>
    </>)
}