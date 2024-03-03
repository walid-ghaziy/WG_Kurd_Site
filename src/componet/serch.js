import On from "./On";
import Test from "./test1";
import React from 'react'
import { useState } from "react";

export default function Serch() {
  const [select1,setselect1]=useState(null)
  const [taman,setstaman]=useState(null)
  const [name,setname]=useState(null)
  const [eror,seteror]=useState(false)
 
 const serchinner=()=>{
    return(
<div id="box">
        
      <input type="username" placeholder="ناف" onChange={(e)=>{setname(e)}}/>
      <input id="datee" type="date" placeholder='ته مه ني ته جه نده' onChange={(e)=>{setstaman(e)}} /><br />
      <select name="" id="" onChange={(e)=>{setselect1(e)}}>
      <option value="">ره گه ز</option>
      <option value="">نئر</option>
      <option value="">مئ</option>
      </select>
      <b id="er">{eror}</b>
      <input type="submit" id="sub" value={'Log In'} onClick={displaytest}  />

</div>
    )
  }
  let serchinner2=serchinner()
  let testopenvar;
  const[testopen,settestopen]=useState(false)
  const[serchopen,setserchopen]=useState(true)
  
function displaytest(){
  if( select1 !=null && taman !=null && name!=null){
  settestopen(true)
  setserchopen(false)
}
else{

seteror('ج جها نه هيله فالا')
  return false
}
}
if(serchopen==false){
serchinner2=''
}
if(testopen==true ){
  testopenvar=<Test namee={name}/>
}
return(
  <div>
  {serchinner2}
  {testopenvar}
  </div>
)
  }
  