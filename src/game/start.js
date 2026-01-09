import { createContext, useRef, useState } from "react"
import Game from "./game"
import './game.css'
import Spen from "./spen"

function Start(){
    const[open,setopen]=useState(false)
    const[nameplyer,setnameplyer]=useState(true)
    const[start,setstart]=useState(true)



    const[name,setname]=useState()
    const[name2,setname2]=useState()
    const[name3,setname3]=useState()
    const[name4,setname4]=useState()
    const[name5,setname5]=useState()
    const[name6,setname6]=useState()
    const[name7,setname7]=useState()
    const[name8,setname8]=useState()
    const[name9,setname9]=useState()


  

    const[marj,setmarj]=useState([])
    const[infomarj,setifotmarj]=useState()
    const[id,setid]=useState()



    const[over6,setover6]=useState('')
  
const marjref=useRef(null)


    const data = {name,name2,name3,name4,name5,name6,name7,name8,name9}

    function sendname(e){
        e.preventDefault()
        data.name && data.name2 && data.name3 && data.name4  && data.name5 && data.name6 !='' ?setnameplyer(false):setover6('دفئت  بتري 6 ياريزانان نافئ خو توماربكه ن')
        
    }
     
    function opengame(e){
        e.preventDefault() 
        setnameplyer(false)
        document.querySelector('.div-namelist2').classList.add('div-namelist2-none')
       setopen(true)
       setstart(false)
    }
    function sendmarj(e){
        e.preventDefault() 
marjref.current.value != ''&& marj.length < 8   ?setmarj([...marj,{
        id:marj.length+1,
        infomarj:infomarj 
    }])
:<></>
marjref.current.value = ''
    }


    return(
 <div id="allgame0">
    {nameplyer == true ?    <div className="div-namelist" >
                <h1>ناف نفئسينا ياريكه ران</h1>
                <b id="over6">{over6}</b>
                <form  >
                <input type="text" placeholder="Set Name Player 1" onChange={(e)=>{setname(e.target.value)}} />              
                <input type="text" placeholder="Set Name Player 2" onChange={(e)=>{setname2(e.target.value)}} />
                <input type="text" placeholder="Set Name Player 3" onChange={(e)=>{setname3(e.target.value)}} />
                <input type="text" placeholder="Set Name Player 4" onChange={(e)=>{setname4(e.target.value)}} />             
                <input type="text" placeholder="Set Name Player 5" onChange={(e)=>{setname5(e.target.value)}} />            
                <input type="text" placeholder="Set Name Player 6" onChange={(e)=>{setname6(e.target.value)}} />
                <input type="text" placeholder="Set Name Player 7" onChange={(e)=>{setname7(e.target.value)}} />
                <input type="text" placeholder="Set Name Player 8" onChange={(e)=>{setname8(e.target.value)}} />
                <input type="text" placeholder="Set Name Player 9" onChange={(e)=>{setname9(e.target.value)}} />
                <button className="button-sendname2" type="submit" onClick={sendname}>Send</button>
                </form>
    </div>
    // .........................................................true........................
:<>
    <div className="div-namelist2" >
  

                <h1>نفيسانا مه رجا</h1>
                <span id="sexmarj">دفئت مه رجئن ته ز 6 كئمتر نه بن و ز 8 بتر نه بن</span>
                <form onSubmit={sendmarj} >
                    {marj.map((e)=>{
                        return(<>
                        <ul key={e.id}>
                            <li>({e.infomarj})</li>
                        </ul>
                        </>)
                    })}
                <input type="text" ref={marjref} maxLength={50} onChange={(e)=>{setifotmarj(e.target.value)}} placeholder="مه رجئن خو بنفيسه" /> 
                 <b>ل فئرئ دئ مه رجئ خو نفئسي و فرئكه ي و مه رجئن ديفدا زي دئ هه ر ل فئرئ نفئسي و ديسا فرئكه يه فه</b>
                 <button className="button-sendname0" type="submit">Send</button>
                </form>
                         {marj.length >= 5 && start == true ?   <button className="button-sendname" type="submit" onClick={opengame}>Lets Start</button>:<></>}
 
 
    </div>
</>}




<div className="div-game">
  {open == true ?<Game data={data} marj={marj} />:<></>}  
</div>



        </div>
    )
}
export default Start