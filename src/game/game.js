import { useEffect, useRef, useState } from 'react'
import './game.css'
import html2canvas from 'html2canvas'
import axios from 'axios'
import { useSpring , animated } from 'react-spring'
import { Form } from 'react-router-dom'

function Game(props){
const [num,setnum]=useState(1)
const [tr,settr]=useState(['a','b','c','d','e','f','g','h','i'])
const [Start,setstart]=useState('Start')
const [h,seth]=useState()
const [s,sets]=useState('a')

const r = useRef(null)



 function si(e){
  e.preventDefault() 

  setTimeout(() => {
    document.querySelector('.tshtok1').classList.add('tshtok')
    document.querySelector('.si').classList.add('display')
  }, 0);
  setTimeout(() => {
    document.querySelector('.tshtok1').classList.remove('tshtok')
    document.querySelector('.si').classList.remove('display')
    setstart('Try Again')
    
    
  }, 5000);
  setTimeout(() => {
      setnum(Math.floor(Math.random() * 9))
      document.querySelector(`.${tr[num]}`).classList.add('red')
      
  },5000);
  setTimeout(() => {
    document.querySelector(`.${tr[num]}`).classList.remove('red')
setnum(1)
  }, 10000);


  setTimeout(() => {
    window.scrollBy(0,150)
  }, 6000);


}



return(
<div>
 <div className='contener'>
  <div className='tshtok1'></div>
  <form onSubmit={si}>
   <table>
     <tr>
      <th className='a'>{props.data.name}</th>
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
   
 </div>

   <div ref={r} id='dawn'>

   </div>
  
</div>  
    )
 
  }
export default Game