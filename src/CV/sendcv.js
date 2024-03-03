import { useState } from "react"
import { Link } from "react-router-dom"
import Vewcv from "./vewcv"
import { useRef } from "react"
import html2canvas from "html2canvas"
function Sendcv(){

const [vewcv , setvewcv]=useState(false)
const [skill,setskill]=useState([])
const [skill2,setskill2]=useState([])
const [skill3,setskill3]=useState([])
const [skill4,setskill4]=useState([])
const [skill5,setskill5]=useState([])
const [skill6,setskill6]=useState([])
const [name,setname]=useState()
const [lastname,setlastname]=useState()
const [reja,setreja]=useState()
const [berth,setberth]=useState()
const [from,setfrom]=useState()
const [aboutme,setaboutme]=useState()
const [tel,settel]=useState()
const [email,setemail]=useState()


const [more,setmore]=useState('')
const [don,setdon]=useState('')

const [more2,setmore2]=useState('')
const [don2,setdon2]=useState('')

const [more3,setmore3]=useState('')
const [don3,setdon3]=useState('')

const [more4,setmore4]=useState('')
const [don4,setdon4]=useState('')

const [more5,setmore5]=useState('')
const [don5,setdon5]=useState('')


const [skillsumer,setskillsummer]=useState()
const [expertise,setexpertise]=useState()
const [language,setlanguje]=useState()
const [knowlanguage,setknowlanguje]=useState()
const [shhada,setshhada]=useState()
const [shhadainfo,setshhadainfo]=useState()
const [photos,setphotos]=useState('')

const[erorr,seterorr]=useState('')


const[nameshol,setnameshol]=useState('')
const[shol,setshol]=useState('')

const [creat,setcreat]=useState('Create')
function vew(e){
        
if( skill == '' &&   skill2 == '' &&   skill3 == '' &&   skill4 == '' &&skill5 == '' ){
  seterorr('ج به شا نه هئله فالا')
}else{
 setcreat(<i class="gg-spinner"></i>)
    setTimeout(() => {
        setcreat('Done')
        window.scrollTo({
        top:5500,
        behavior:'smooth'
        })
          setskill([...skill,{
id:skill.length,
name:name,
lastname:lastname,
berth:berth,
from:from,
aboutme:aboutme,
tel:tel,
email:email,
language:language,
 photos:photos
        }])  
    }, 3000);}}

function cvskill(e){
    setskill2([...skill2,{
        id:skill2.length,
        skillsumer:skillsumer,
    }])
    document.getElementById('input8').value=''
    setmore('ته به هره يه ك دي هه بيت ديسا فرئكه فه')
    setdon(<i class="gg-check-o"></i>)
}
function cvkar(e){
   
    setskill3([...skill3,{
        id:skill3.length,
        expertise:expertise,
    }])
    document.getElementById('input9').value=''
    setmore2('تو كا ره كئ دي بزاني ديسا فرئكه فه')
    setdon2(<i class="gg-check-o"></i>)
}

function sendlanguje(){
setskill4([...skill4,{
id:skill4.length,
reja:reja,
knowlanguage:knowlanguage
}])
document.getElementById('input10').value=''
document.getElementById('input11').value=''
document.getElementById('input12').value=0
setmore3('تو زمانه كئ  دي بزاني ديسا فرئكه فه')
setdon3(<i class="gg-check-o"></i>)
}


function shhadaa(e){
   
    setskill5([...skill5,{
        id:skill5.length,
        shhada:shhada,
        shhadainfo:shhadainfo,
    }])
    document.getElementById('input9').value=''
    setmore4('ته شهاده ك دي هه بيت ديسا فرئكه فه')
    setdon4(<i class="gg-check-o"></i>)
document.getElementById('input14').value=''
document.getElementById('input15').value=''
}

function sendshil(e){
    setskill6([...skill6 ,{
        id:skill6.length,
        nameshol:nameshol,
        shol:shol
    }])
    setmore5('ته كاره كئ دي كربيت ديسا فرئكه فه')
    setdon5(<i class="gg-check-o"></i>)
    document.getElementById('inpu18shol').value=''
document.getElementById('input19').value=''
}



function fileimg(e){
setphotos(URL.createObjectURL(e.target.files[0]))

}




    return(
<div >

{/* <div id="alirt" ref={alirt} >
<button onClick={()=>{alirt.current.classList.add('displaynone')}}>AGREE</button>
</div> */}



<div className="datacv">

<input type="text" id="input" onChange={(e)=>{setname(e.target.value)}}  placeholder="ناف" required/>
<input type="text" id="input2" onChange={(e)=>{setlastname(e.target.value)}} placeholder="نافئ بابئ" required/>
<input type="date" id="input3" onChange={(e)=>{setberth(e.target.value)}}  required />
<label htmlFor="input3" id="bre">زدايك بووناته</label>


<input type="file" onChange={fileimg} id="inp" required />
<label htmlFor="inp" id="inplabel">import your photo</label>
<p id="infphoto">وئنه كئ ته دفئت به رئ ته ل كاميرئ بيت</p>

<input type="text" id="input4" onChange={(e)=>{setfrom(e.target.value)}} placeholder="ل كيفه دزي" required />
<input type="text" id="input5" onChange={(e)=>{setaboutme(e.target.value)}} placeholder=" بكورتي لسه ر خو باخفه" required />
<label id="label-aboutme" htmlFor="input4">نمونه: من شيانئن كاري هه نه و من دفئت لده ف وه كاربكه م</label><br />
<input type="number" maxLength={11} minLength={10} id="input6" onChange={(e)=>{settel(e.target.value)}} placeholder="زمارا موبايلئ" required/>
<input type="email" id="input7" onChange={(e)=>{setemail(e.target.value)}} placeholder="ايميل" required />



<div id="skillform">
    {skill2.map((data)=>{return(<span key={data.id}>.({data.skillsumer} ) </span>)})}
        <input type="text" id="input8"  onChange={(e)=>{setskillsummer(e.target.value)}} required  placeholder=" ته ج به هره هه يه  / ته ج مهنه هه يه" />
        <label  id="done" htmlFor="input8">{don}</label><br />
        <label htmlFor="input8">{more}</label>
        <input type="submit" id='input13' onClick={cvskill} value={'Send'} />
</div>

<div id="karform">
{skill3.map((data)=>{return(<span key={data.id}>.({data.expertise} ) </span>)})}
        <input type="text" id="input9"  onChange={(e)=>{setexpertise(e.target.value)}}  placeholder="  تو ج كاري دزاني يان ته ج كار كريه" />
        <label  id="done" htmlFor="input9">{don2} </label><br />
        <label  htmlFor="input9">{more2} </label>
        <input type="submit" id="input13" onClick={cvkar}  value={'Send'}/>
</div>

<div id="langujeform">
{skill4.map((data)=>{return(<span key={data.id}>.({data.knowlanguage} ) </span>)})}
<label id="ldaek" htmlFor="input10">زمانئ ته يئ دايكئ</label>
<select id="input10" onClick={(e)=>{setlanguje(e.target.value)}}>
        <option value=""></option>
        <option value="كوردي">كوردي</option>
        <option value="عربي">عربي</option>
        <option value="انكليزي">انكليزي</option>
        <option value="تركي">تركي</option>
        <option value="kurde">kurde</option>
        <option value="arabic">arabic</option>
        <option value="english">english</option>
        <option value="turki">turki</option>
    </select>

    <input type="text" id="input11"  onChange={(e)=>{setknowlanguje(e.target.value)}}  placeholder=" ج زمان دزاني"  />
    <label  id="done" htmlFor="input11">{don3}</label><br />
    <label htmlFor="input11">{more3}</label>

    <input type="range" id="input12" step={10} max={100} onChange={(e)=>{setreja(e.target.value)}}/>
    <label id="reja" htmlFor="input12">{reja}%</label>

    <input type="submit"  id="input13" value={'Send'} onClick={sendlanguje}/>
</div>

<div id="shhada">
<input type="text"  id="input14"  placeholder="نافئ باوه رناما (شهادا) ته" onChange={(e)=>{setshhada(e.target.value)}}/> <br /><br />
<label id="infoshhada" htmlFor="input15">لسه ر شهادا خو باخفه سالا جه ندئ ته دوماهيك ئينايه و ته ل كيفه خانديه هتد  </label>
<input  maxLength={100} type="text"  id="input15"  placeholder="" onChange={(e)=>{setshhadainfo(e.target.value)}}/> 
<label  id="done15" htmlFor="input14">{don4}</label><br /><br /><br />
<label htmlFor="input14">{more4}</label>
<input type="submit"  id="input13" value={'Send'} onClick={shhadaa}/>
</div>


<div id="shol">
   
<input type="text" id="inpu18shol" onChange={(e)=>{setnameshol(e.target.value)}} placeholder="نافئ واي شولئ ته كري" />
<input type="text" maxLength={200} id="input19" onChange={(e)=>{setshol(e.target.value)}} placeholder=" ب كورتي به حسئ وي شولي بكه ته ل كيفه كريه و جه وا بويه" />
<label  id="done15" htmlFor="input18">{don5}</label><br />
<label htmlFor="input18">{more5}</label>
<input type="submit"  id="input13" onClick={sendshil}  value={'Send'}/>
</div>




     <b id="eror">{erorr}</b><br />
    <button  id="create" onClick={vew} >{creat}</button>
    <hr />
</div>


{
 skill  != '' && skill2 != '' && skill3 != '' &&   skill4 != '' &&skill5 != '' &&skill6 != '' ?  <Vewcv skill={skill}skill2={skill2}skill3={skill3}skill4={skill4} skill5={skill5} skill6={skill6}  />: <></> }

        
        
        </div>
    )
}
export default Sendcv