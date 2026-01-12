import { useNavigate } from 'react-router-dom';
import im from '../componet/572c31288bf28db1672258d493bfba8b.jpg'
import './cours.css'
export default function Cours(){
const path = useNavigate()
    return(<>
    <div>
        <center><h1>Basic Cours IT</h1></center>
        
        <div id="Box-cours">
            <img src={im} alt="" />
            <div id='info-cours'>
            <h3>C#</h3><small>6 Lissen</small><br />
            <button value={"c"} onClick={(e)=>{
                alert("لده مه كئ نيزيك")
                // path(`View/${e.target.value}`)
            }}>View Cors</button>   
            </div>
        </div>
        
    </div>
    </>)
}