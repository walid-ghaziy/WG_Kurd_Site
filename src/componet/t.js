
import { useEffect, useState } from "react";
import axios from "axios";


function T() {
 const [ d,setd]=useState([])
 const [ n,setn]=useState()
 const [ p,setp]=useState()
useEffect(()=>{
  axios.get("http://localhost:7000/user").then((e)=>setd(e.data)).catch((e)=>console.log(e))
},[])

function save(e){
 
  axios.post("http://localhost:7000/user",{name:n , password:p})
  .then((e)=>console.log(e))
  .catch((e)=>console.log(e))
}
  return (
    <div >
   <br /><br /><br />
<form >
  <input type="text" onChange={(e)=>{setn(e.target.value)}} />
  <input type="text" onChange={(e)=>{setp(e.target.value)}} />
<input type="submit" onClick={save} />
</form>


    </div>
    
  );
}

export default T;
