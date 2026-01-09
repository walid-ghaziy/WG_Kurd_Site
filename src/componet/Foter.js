import insta from "./Instagram_logo_2016.svg.webp"
import snap from "./snapchat-logo-icon-social-media-icon-free-png.webp"

function Foter(){
    return(
        <div id="foter">
<p>CopyRite@social</p> 
 <div id="soc">
    <a className="insta" href="https://www.instagram.com/walid_ghaziy/"><img src={insta} alt="" /></a>
    <a className="snap" href="https://t.snapchat.com/BRx0w2xB"><img src={snap} alt="" /></a> 
    </div>
    
        </div>
    )
    
}
export default Foter