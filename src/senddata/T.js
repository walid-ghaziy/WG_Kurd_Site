import axios from "axios"
import { useState } from "react"
import { createContext } from "react"

function TT(){

    const[info,setinfo]=useState([])
    const[n,setn]=useState([])
      
    axios.get("http://localhost:8000/user")
    .then((res)=>setinfo(res.data))
    .catch((er)=>console.log(er))

function post(e){
    axios.post("http://localhost:8000/user",{name:n})
    .then((res)=>console.log(res))
    .catch((res)=>console.log(res))
}

    return(<>
<input type="text"  onChange={(e)=>{setn(e.target.value)}} />
<input type="submit" onClick={post} />


    {info.map((data)=>{
        return(<>
        <h1>{data.name}</h1>
        </>)
    })}
    
    </>)
}
export default TT