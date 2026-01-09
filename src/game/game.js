import { useEffect, useRef, useState } from 'react'
import './game.css'
import html2canvas from 'html2canvas'
import axios from 'axios'
import { useSpring , animated } from 'react-spring'
import { Form } from 'react-router-dom'
import Spen from './spen'
import { top } from 'scroll'
import { scroller } from 'react-scroll'

function Game(props){
const [num,setnum]=useState(Math.floor(Math.random() * 9))
const [tr,settr]=useState(['a','b','c','d','e','f','g','h','i'])
const [Start,setstart]=useState('Start')
const [naameloser,setnameloser]=useState()
const [naameloser0,setnameloser0]=useState()
const [s,sets]=useState(false)
const [spin,setspin]=useState(false)
const [buttomspin,setbuttomspin]=useState(false)

const r = useRef(null)
const viocref = useRef()
const viocref2 = useRef()

// function clickvoic(){
//   const voicc2 = new SpeechSynthesisUtterance(document.querySelector('.bnameloser').innerHTML)
//   window.speechSynthesis.speak(voicc2)
//   }
//   function clickvoic2(){
//   const voicc3 = new SpeechSynthesisUtterance('you can now set challenge click to botton buttum')
//   window.speechSynthesis.speak(voicc3)
//   }
  


 function si(e){
  e.preventDefault() 
  sets(false)
  setTimeout(() => {
    document.querySelector('.tshtok1').classList.add('tshtok')
    document.querySelector('.si').classList.add('display')
    setbuttomspin(false)
  }, 0);
  setTimeout(() => {
    document.querySelector('.tshtok1').classList.remove('tshtok')
    
    
  }, 5000);
  setTimeout(() => {
      setnum(Math.floor(Math.random() * 9))
      document.querySelector(`.${tr[num]}`).classList.add('red')
     
  },5000);



  setTimeout(() => {
    document.querySelector(`.${tr[num]}`).classList.remove('red')
    document.querySelector(`.${tr[num]}`).classList.remove('show')
document.querySelector('.si').classList.remove('display')
setstart('Try Again')
setspin(true)
setbuttomspin(true)
setnameloser( `${document.querySelector(`.${tr[num]}`).innerHTML}`);
sets(true)
setnameloser0('مه رجه كئ ب دانه به ر')

}, 10000);

setTimeout(() => {
  const voicc2 = new SpeechSynthesisUtterance(naameloser)
  window.speechSynthesis.speak(voicc2)
  }, 10100);
setTimeout(() => {
  const voicc3 = new SpeechSynthesisUtterance('you can now set challenge click to botton buttum')
  window.speechSynthesis.speak(voicc3)
  }, 11100);

}

function openspin(){
spin == true ? document.querySelector(".dis2").classList.add('spin'):setstart('erorr')
window.scrollBy({
  top:650,
  behavior:'smooth'
})
}







return(
<div id='allgame'>
<fieldset className="name-plyer">
        <legend>ياريزانئن به شداربو ين</legend>
       <span>{props.data.name}</span> <span>{props.data.name2}</span>  <span>{props.data.name3}</span>
       <span>{props.data.name4}</span> <span>{props.data.name5}</span>  <span>{props.data.name6}</span>
       <span>{props.data.name7}</span> <span>{props.data.name8}</span> <span>{props.data.name9}</span>
   </fieldset>


 <div className='contener-spin'>
  <div className='tshtok1'></div>
  <form onSubmit={si}>
   <table>
     <tr>
      <th ref={r} className='a'>{props.data.name}</th>
      <th className='b'>{props.data.name2}</th>
      <th className='c'>{props.data.name3}</th>
     </tr>
     <tr>
      <th className='d' >{props.data.name4}</th>
      <th className='e'>{props.data.name5}</th>
      <th className='f'>{props.data.name6}</th>
     </tr>
     <tr>
      <th className='g' >{props.data.name7}</th>
      <th className='h'>{props.data.name8}</th>
      <th className='i'>{props.data.name9}</th>
     </tr>
   </table> 
   <button className='si' >{Start}</button>
   </form>
   <br />
   <div className='nameloser'>
    <b>{s==true?naameloser0:null}</b> <br />
   <b className='bnameloser'>{s==true?naameloser:null}</b>
  </div>
  {buttomspin == true ?<button className='buttonspin' onClick={openspin}>Challenge</button>:<></>} 
 </div>
 {/* <input ref={viocref} type='submit'  className='voc' onClick={clickvoic}/>
 <input  ref={viocref2} type='submit' className='voc2' onClick={clickvoic2}/> */}

   <div  className='dis2'>
  <Spen listmarj={props.marj}/>

   </div>
</div>  
    )
 
  }
export default Game