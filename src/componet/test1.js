import React, { useState } from 'react'
import On from './On'
import zaef from './IMG_0439.PNG'
import normal from './IMG_0440.PNG'
import galakbash from './IMG_0441.PNG'
import qalaw1 from './IMG_0442.PNG'
import qalaw2 from './IMG_0443.PNG'
import qalaw3 from './IMG_0444.PNG'


const Test = (props)=>{
const [dreje,setdreje]=useState(0);
const [kesh,setkesh]=useState(30);
const [all,setall]=useState();
const [show2,setshow2]=useState('');

function inputrange(e){
 
  setdreje(e.target.value);
  setall(kesh / ( dreje*dreje ));
}
function inputrange2(e){
  setkesh(e.target.value);
  setall(kesh / ( dreje*dreje ));
}

const [saneus,setsane]=useState(false);
let sane;
let s=0;

function show(){
 setsane(true);
 setTimeout(()=>{
    document.getElementById('closinfo').style.display='block'
    if(all <= 18.5){
      setshow2(<div id='div1'>
       
      <h1>زه عيفه</h1><hr />
      <button> <button id='neasen'><b>{props.namee.target.value}</b><b >  به رئز</b><br /></button>
      <button>لسه ر ته بيتفيه تو كيشا له شي خو بلند بكه ي  ب كيمي بو 10 كيلويان به لئ ئه گه ر درئزياته لسه ر  175 دابيت و تو ره گه ز نئر بي دفئت هه تا 15-20 كيلويان زئده بكي بو ره گه ز مئ هه تا 8 كيلويان   </button> 
      </button>
      
      </div>)
      }else if(  all >=18.5 && all <=22.9){
      setshow2(<div id='div1'>
      <h1>نورماله</h1> <hr />
      <button> <button id='neasen'><b>{props.namee.target.value}</b><b >  به رئز</b><br /></button>
      <button>ته جسمه كي نورمال يي هه ي به لي ئەگەر تو 3-5 كيلويان ل خو زيده بكي دي گه له ك جانتربيت</button>
      </button>
      
      </div>)
      }else if(23.0 <= all && all <=25.9  ){
        setshow2(<div id='div1'>
      <h1>  گەلەک باشە </h1><hr />
      <button> <button id='neasen'><b>{props.namee.target.value}</b><b >  به رئز</b><br /></button>
      <button>قياسي جمسي ته ل ديف دريزيا ته باشترين قياسه ل ديف ستانداردي جيهاني</button>
      </button>
      
      </div>);
   
      }else if(26.0 <= all && all <=34.9  ){
        setshow2(<div id='div1'>
     <h1>قه له وي يا ل ده ف ته هه ي</h1><hr />
     <button> <button id='neasen'><b>{props.namee.target.value}</b><b >  به رئز</b><br /></button>
     <button> ل ديف ستانداردي جيهاني ته قه له ويا بله 1 يا هه ي هشياربه نه هيله بيته بله 3 و بيتفيه هه تا 10-15 كيليوان ب كيمي بينيه خار </button>
     </button>
     
     </div>)
    
      }else if(35.0 <= all && all <=39.0  ){
        setshow2(<div id='div1'>
      <h1> گەلەک قەلەوی</h1><hr />
      <button> <button id='neasen'><b>{props.namee.target.value}</b><b >  به رئز</b><br /></button>
      <button>تو كه له ك يي قه له وي بلا قه له ويا ته د كه هيته بله 2 هشياربه به ري بيه بله 3 دفيت 30-25 كيلويان بينيه خار</button>
      </button>
     
      </div>)
    
      }else if(all > 40.0 ){
        setshow2(<div id='div1'> 
        <h1>||| رێژا قەلەویێ </h1><br /><hr />
        <button> <button id='neasen'><b>{props.namee.target.value}</b><b >  به رئز</b><br /></button>
        <button>هشیاربە تو یێ گەهشتیە بلندترین رێژا قەلەویێ دڤێت 40-50 کیلویان بینیە خوار  </button>
        </button>
        
        </div>)
    
      }
      setsane(false)
      
  },3000)
  

}



if(saneus==true){
  sane =  <button id='icc' > <i style={{color:'white'}} class="gg-time"><h2 style={{marginLeft:'10px',width:"50px" }}>3s</h2></i></button>
}

  return(
<div id='all2'>
     <br /><br />
     
      <br />
      <b id='tebene'>تئبيني : دفيت ل ده سبئكئ درئزيا خو ده ست نيشان بكه ي دا ئه نجام درست بيت</b><br /><br />
      <br /><br /><br />
      <button id='dreje'> {dreje}cm</button><br /><br />
<div id='divrange'>
  <button id='d'>درێژی</button>
  <input className='range1' type="range"   max={3.0} min={1.0} step={0.01} onInput={inputrange}/>
</div>
      <br /><br /> <hr />
      
      <button id='kesh'>{kesh}kg</button><br /><br />
<div id='divrange'>
  <button id='d'>كيلو</button>
<input className='range2' type="range"  max={200}  step={1} min={30} onInput={inputrange2} />
 </div>
    
    <input type="submit"  id='sub' value={'Click Here'} onClick={show}/>
   {sane}
     <br />
    <br /><br /><br /><br />
<div id='show'>
  <button id='closinfo' style={{color:'white'}} onClick={()=>{
    setshow2('')
    setkesh(30)
    setdreje(0)
    document.getElementById('closinfo').style.display='none'
    }}><i class="gg-close"></i></button>
  {show2}
</div>
</div>
  )
}

export default Test