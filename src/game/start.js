import { useState } from "react"
import Game from "./game"
function Start(){
    const[name,setname]=useState()
    const[name2,setname2]=useState()
    const[name3,setname3]=useState()
    const[name4,setname4]=useState()
    const[name5,setname5]=useState()
    const[name6,setname6]=useState()
    const[name7,setname7]=useState()
    const[name8,setname8]=useState()
    const[name9,setname9]=useState()

    const data = {name,name2,name3,name4,name5,name6,name7,name8,name9}
     
    console.log(data.name3);
    return(
        <div>
            <div>
                <form action="">
                <input type="text" onChange={(e)=>{setname(e.target.value)}} />
                <input type="text" onChange={(e)=>{setname2(e.target.value)}} />
                <input type="text" onChange={(e)=>{setname3(e.target.value)}} />
                <input type="text" onChange={(e)=>{setname4(e.target.value)}} />
                <input type="text" onChange={(e)=>{setname5(e.target.value)}} />
                <input type="text" onChange={(e)=>{setname6(e.target.value)}} />
                <input type="text" onChange={(e)=>{setname7(e.target.value)}} />
                <input type="text" onChange={(e)=>{setname8(e.target.value)}} />
                <input type="text" onChange={(e)=>{setname9(e.target.value)}} />
                
                <button type="submit">Lets Start</button>
                </form>
            </div>
<Game data={data}/>
        </div>
    )
}
export default Start