
import { useRef, useState } from "react"
import QRCode from "react-qr-code"
import '../QR/QR.css'
import { Button } from "react-scroll"
import html2canvas from "html2canvas"
import { type } from "@testing-library/user-event/dist/type"
export default function QR(){
    const [p , setp]=useState()
    const [urll , seturl]=useState()
    const [val , setval]=useState()
    const [icon , seticon]=useState('dow')
    const [textdow , settextdow]=useState('')
    const inner = useRef(null)
    const qrdowenlod = useRef(null)
  
  function handlqr(e){
    e.preventDefault()
if(inner.current.value !=''){
setp('Loding...') 
inner.current.value=''

setTimeout(() => {
seturl(true) 
setp('')    
}, 3000);
}else {
alert('ببوره ته ج لينك نه فرئكرينه سيسته مي')
setTimeout(() => {
    
    setp('This is not URL ')
    return false
}, 1000);
}

}


function dowenload(){
settextdow('Dowenloding img...')
seticon('lod')
    setTimeout(() => {
settextdow('Dowenload')
seticon('dow')
html2canvas(qrdowenlod.current).then((canvas)=>{
const qrd =  document.createElement('a')
qrd.href=canvas.toDataURL('image/png')
qrd.download='QR WG'
qrd.click()
})   
    }, 3000);
    
}

    return(
        <>
        
            <div className="boxqr">
            <h1 id="h1qr">QR Code</h1>
            <p id="p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus repudiandae consequatur dolores deleniti, mollitia consectetur.</p>
            <p id="p">تو دشئ هه ر لينكه كئ ته هه بيت ل فئرئ بكهوري بو وئنه يئ كودي  هه ر جارا بهئته سكان كرن دئ ئه و سايت فه بيت يئ ته لينكئ وي كريه د فئ به شي دا </p>
            <br /><b id="p">بو نمونه تو دشئ فان اكوانتئن خو بكيه كود  </b>
           <h3>Instagram</h3><h3>Snapchat</h3><h3>YouTobe</h3><h3>Tik Tok</h3><h3>www.example.com</h3><h3>هه تا دوماهيئ</h3>
          <br /> <hr />
            <form  onSubmit={(e)=>{handlqr(e)}}>
                
                <input type="URL" ref={inner} className="urlinput" placeholder="Set URL"   onChange={(e)=>{setval(e.target.value)
                    seturl(false)
                }} />
                   <p className="loding">{p}</p>
                    <button type="submit" className="qrsubmit">QR</button>
            </form>  

            <div className="photoqr" >
                {urll == true?<> <div className="qrdiv" ref={qrdowenlod} ><QRCode  className="qrim" size={200}  value={val}/></div> <p className="dowim">{textdow}</p>{icon == 'dow'? <button className="dow" onClick={()=>{dowenload()}} >|</button>: icon =='lod'?<button className="lodingicon"></button>:<></>}</>:<></>}
                
            </div>


            </div>

           
     
     
        </>
    )
}