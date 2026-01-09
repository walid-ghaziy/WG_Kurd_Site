import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import './cv.css'

function Vewcv({skill,skill2,skill3,skill4,skill5,skill6}){
 const imgref = useRef(null)
const[downlods,setdownlods]=useState(<i class="gg-arrow-down-o"></i>)
 function downlod(){
setdownlods(<i class="gg-spinner"></i>)
setTimeout(() => {
setdownlods(<i class="gg-arrow-down-o"></i>)
  html2canvas(imgref.current).then((canvas)=>{
    const linkk = document.createElement('a')
    linkk.href = canvas.toDataURL('image/png')
   linkk.download = 'CV-Free-WG Site'
   linkk.click()
  })}, 4000);}

if (downlods == 'save') {
  setTimeout(() => {
    setdownlods('DOWENLOD')
  }, 3000);}
    return(
<div className='al'>
<div className="contener" ref={imgref}>

 <div className="top-taser"></div>  
   <div className="div-img">
    {skill.map((data)=>{return(<><img  className='photo'  alt=""  src={data.photos}/></>)})}
     <label  htmlFor="inp"></label>
  </div>
    
  
    
  {skill.map((data)=>{return(
    <>
    <div className='ab' key={data.id}>
    <h4>About Me</h4> 
    <button key={data.id} className='aboutme'>{data.aboutme}</button>
    </div>
    </>
  )})}
  <div className='call'>
   <ul>
   {skill.map((data)=>{return(  
   <>
<span>PHONE</span><li key={data.id} >  <span id='telcv'>{data.tel}</span></li><br />
 <span>EMAIL</span><li key={data.id}><span id='emalcv'>{data.email}</span></li>
   </> 
 )})}

   </ul>
  </div>
    

 


    <div className='div-name'>
      {skill.map((e)=>{
        return(
          <>
<h1 className='first-name-h1'>{e.name}</h1> <h1 className='last-name-h1'>{e.lastname}</h1>
          </>
        )
      })}
        <span className='berth'>Berth: {
          skill.map((e)=>{
            return(
              <span>{e.berth}</span>
            )
          })
        }  </span>
        <br />

       {skill.map((data)=>{return(<>
       <span className='berth'>from <span>{data.from}</span></span>
       </>)})} 
    </div> 







<ul id='allrf'>
  
  <li id='r'>

<div className='language'>
      <button>LANGUAGE</button><br />
    {/* {skill.map((data)=>{return(
    <>
     <span id='la' key={data.id}>زمانئ دايكئ : {data.language}</span>
    </>
   )})} */}
      <ul>
       {skill4.map((data)=>{
        return(
          <>
          <li>{data.knowlanguage} : 
          <span id='jsade'>{data.reja} </span>
          <span id='esharat'>%</span>
          </li> 
          </>
        )
       })}
    
      </ul>
    </div>
    <div className='Expe'>
      <button>EXPERIENCE</button>
      <ul>
        {skill3.map((data)=>{return(<>
        <li key={data.id}><span>{data.expertise}</span></li> 
        
        </>)})}
        
      </ul>
    </div>
  </li>











  <li id='l'>
    
  <div className='skill'>
      <button>EXPERTIS</button>
      {skill6.map((data)=>{return(<>
       <ul key={data.id}>
          <li>
            {data.nameshol} 
          </li>  
           <span>{data.shol}</span>
      </ul>
      </>)})}
     
    </div>



    <div className='scholl'>
    <button>EDUATION</button>
      <ul>
        {skill5.map((data)=>{return(
          <>
        <li key={data.id}><b>{data.shhada}</b> </li>
        <span  id='bin'>{data.shhadainfo}</span>
        
          </>
        )})}
      
      </ul>
    </div>



    <div className='work'>
    <button>SKILL SUMMARY</button>
      <ul>
        {skill2.map((data)=>{return(<>
         <li key={data.id}><span>{data.skillsumer}</span></li>
          
        </>)})}
       
      </ul>
    </div> 


  </li>
</ul>




</div>
<button className='dawenlod' onClick={downlod}>{downlods}</button>
</div>
    )
}
export default Vewcv