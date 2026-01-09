import { useContext, useState } from "react"


function Spen(props){
const[stylespin,setstylespin]=useState(-50)
const[stop,setstop]=useState()
const[startbutton,setstartbutton]=useState(true)
const[stoptbutton,setsstoptbutton]=useState(true)

const[dat,setdat]=useState(['a','b','c','d'])



function startspin(){
      setstop(true)
      setstartbutton(false)
}

if (stop == true) {
//   setTimeout(() => {
//     document.querySelector('.start-spen').click()
//  }, 205)

 setTimeout(() => {
   setstylespin(Math.floor(Math.random()* 295))
 }, 20)
 }


function stopp(){
 setstop(false)
 setstartbutton(true)
    }


    return(
        <div className="spen-div">

      <div className="spen-div2" >
      <div className="spen-div3"><h1>ئه و مه رجئن ته نفئسين ب كليكه كئ دئ ئئك هئته هه لبزارتن</h1></div>
{props.listmarj.map((e)=>{

  return(
    <div key={e.id}>
    
      <div className="button-info"  style={{
        top:`${stylespin}px`
        }}>{e.infomarj}</div>
     
    </div>
  )
})}
          <div className="spen-div4"></div>

       
      </div>

     {startbutton == true ?
     <button className="start-spen"  onClick={startspin}>Start Span</button>:
     <div>
      <button id="stopp" className="stop-spen" onClick={stopp}>stop</button>
          <label id="labelstopp" htmlFor="stopp">كليك بكه</label>
     </div>}     
     
     <br />
        </div>
    )
}
export default Spen