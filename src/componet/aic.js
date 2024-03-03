import { useState,useEffect, useRef } from "react";

import { Routes,Route, json, Link } from "react-router-dom";
import { data } from "./data";
function Aic(){
 
  let t=0
  const[point,setpint]=useState(0)
  const[total,settotal]=useState(0)
  const[stop,setstop]=useState(false)
  const[anjamt,setanjamt]=useState(false)
  const[shado,setshado]=useState(false)
  const[res,setres]=useState(false)
  const [dataAll,setdataAll]=useState(data[point])
//.............................................
let aa = useRef(null)
let bb = useRef(null)
let cc = useRef(null)
let allef=[aa,bb,cc]
//................................................
function anjam(e,ans){
if(shado == false){
  e.target.classList.add('active')
  setstop(true)
}
setshado(true)
if(stop == false){
if(dataAll.answer==ans){
settotal(total+10)
}else{

}}
}
//..........................................................
  function next(){
    if(stop == true){
  setpint(point+1)
  setdataAll(data[point+1])
  console.log(point);
}
setstop(false)
setshado(false)
allef.map((ref)=>{
  ref.current.classList.remove('active')
})

if(point == 7){
 
 setres(true)

}
 }

    return(
<div>

  {res?
  // setres(true)...............................................................
  <>

<div id='anjam'>
  <h4>ئه نجامئن خو ببينه</h4>
  <button onClick={(e)=>{
    setanjamt(true)
    e.target.classList.add('vew')
   document.getElementById('anjam').classList.add('vew')
    }}>Vew</button>
</div>
  </>
  // setres(false)............................................................
  :<>
<div id="div11">
  <img id="imgeys" src={dataAll.img} alt="" />
  <button id="psear">{dataAll.psear}</button>
   <div>
      <button ref={aa} id="buttona" onClick={(e)=>{anjam(e,'A')}}>{dataAll.A}</button>
      <button ref={bb} id="buttona" onClick={(e)=>{anjam(e,'B')}}>{dataAll.B}</button>
      <button ref={cc} id="buttona" onClick={(e)=>{anjam(e,'C')}}>{dataAll.C}</button>
   </div>
      <button id="next" onClick={next}>NEXT </button>
      <div id="for"><span>{point+1}</span> for <span>{data.length}</span></div>
      </div>

      </>}

  
{anjamt ? 
<>
<div id="infoanjam">
<b id="gshte">ئه نجامئ كشتي {total} ز 80</b><br /><br /><hr />
<div  id="jsadediv1" ><div id="jsadediv" style={{width:`${total+20}%`}}></div></div><button id="jsadebutton">{total+20} %</button>
{total >= 80 ? <><h1 id="h1reja">6/6</h1></> :<></>}
{total <= 75 && total >= 55  ? <><h1 id="h1reja"><strong >هئزا جافئن ته </strong>5/6</h1></> :<></>}
{total < 55  && total >= 40 ?  <><h1 id="h1reja"><strong >هئزا جافئن ته </strong>4/6</h1></> :<></>}
{total < 40  && total >= 30 ?  <><h1 id="h1reja"><strong >هئزا جافئن ته </strong>3/6</h1></> :<></>}
{total < 30  && total >= 20 ?  <><h1 id="h1reja"><strong >هئزا جافئن ته </strong>2/6</h1></> :<></>}
{total <= 10  && total >= 0 ?  <><h1 id="h1reja">تو كوره يي</h1></> :<></>}

 <button id="closanjam" > <Link id="link" to='/' >Back</Link></button>
</div>
</>
  
  :<></>}

</div>
          )
}
export default Aic



