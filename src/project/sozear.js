import { matchPath } from 'react-router-dom'
import m1 from '../componet/Instagram_logo_2016.svg.webp'
import '../project/sozear.css'
import { useState } from 'react'
import login from './img/login.PNG'
import singin from './img/singin.PNG'
import admin from './img/admin.PNG'
import listtop from './img/listtop.PNG'
import table from './img/table.PNG'
import top from './img/top.PNG'
import massigradmin from './img/massigradmin.PNG'
import massigeuser from './img/massigeuser.PNG'
import listtable from './img/listtable.PNG'
import info from './img/info.PNG'



















export default function sozear(){
    const infosozear =[
        {
        page:1,
        name:"Login Page",
        img:login,
        name2:' aodio debitis autem illum harum quas eos quam voluptate distinctio nulla explicabo non dolor voluptatibus, nobis, perspiciatis quaerat quidem!',
        discrption:"ل فئرئ تو دئ داخلي حسابا خو بي لديف ناف و زمارا نهئني يا ته بخو داناي و هه مي داتايئن ته يئن تئدا هه ين بئ كو كه س بشئت ده ست كاريئ تئدا بكه ت و باراستينه"
        },
        {
        page:2,
        name:"Sing In Create Accont",
        img:singin,
        name2:' aodio debitis autem illum harum quas eos quam voluptate distinctio nulla explicabo non dolor voluptatibus, nobis, perspiciatis quaerat quidem!',

        discrption:"به شئ دروستكرنا حسابئ ل بوكسا سه ري دا يا دياره دوكما شين دئ كليك كه ي بو هاتنا في به شي   ل فئره ئه و تشتئن زته هاتينه داخازكرن دئ هه ميا داخل كه ي و دكه ل وئنه كئ خو  به لئ هه مي كه س نه شئن بخو حسابئ جئكه ن ل فئره مه دوو كود يئن هه ين بو ادميني و كرئكاري هه ر ئيك يئ جودايه ز يئ دي ئه ف كوده بتنئ يئ ل ده ف خودانئ كاركه هئ هه ي"
        },
        {
        page:3,
        name:"Page Admin For Set Data",
        img:admin,
        name2:' aodio debitis autem illum harum quas eos quam voluptate distinctio nulla explicabo non dolor voluptatibus, nobis, perspiciatis quaerat quidem!',

        discrption:`
        ئەدمین (مراقب) دشێت ل ڤێ بەرپەری دا هەمی زانیاریان فرێکەت کا هەر کارمەندەکێ چ کار کریە لدیف لیستا سەرێ بەرپەری ۆو ناڤێ هەمی کرێکاران یێن تێدا هەین .  دێ هەمی پێزانینێن وی داخل کرن ل خشتێ خارێ دیاربن بتنێ یێن وێ روژێ یا ئەو تێدا نەشێت یێن روژین بەرێ ببینیت ئەڤەژی ژ بو پاراستنا زانیاریانە و دا چ گهورین تێدا نە هێنە کرن

        `
        },
        {
        page:4,
        name:"Table User Seen All Information",
        img:table,
        name2:' aodio debitis autem illum harum quas eos quam voluptate distinctio nulla explicabo non dolor voluptatibus, nobis, perspiciatis quaerat quidem!',

        discrption:`ێەڤ بەرپەرە بو کرێکاری یە پشتی ژمارا خو و پاسوردێ خو داخل کری دێ ئەف لاپەرە ڤەبیت لدەف انکو دبیتە پروفایلێ وی و هەمی زانیاریێن وی د دیارن
`
        },
        {
        page:5,
        name:"Change List Order Desc",
        img:listtable,
        name2:' aodio debitis autem illum harum quas eos quam voluptate distinctio nulla explicabo non dolor voluptatibus, nobis, perspiciatis quaerat quidem!',

        discrption:`کرێکار لڤێرێ دشێت هەمی زانیاریێن خو ببینیت لدیڤ تارخا وی بڤێت و دشێت لیستێ رێزبەندیێ بدەتێ. بو نمونە رێزبەندیێ بدەتێ ل دیف پارەی کا کیش روژێ پتر شول کریە هەتا کێمترینێ
`
        },
        {
        page:6,
        name:"Seen Profele All User",
        img:top,
        name2:' aodio debitis autem illum harum quas eos quam voluptate distinctio nulla explicabo non dolor voluptatibus, nobis, perspiciatis quaerat quidem!',

        discrption:` لڤێرە دشێ  پروفایلێ هەمی کرێکاران ببینی`

        },
        {
        page:7,
        name:"Top User ",
        img:listtop,
        name2:' aodio debitis autem illum harum quas eos quam voluptate distinctio nulla explicabo non dolor voluptatibus, nobis, perspiciatis quaerat quidem!',

        discrption:` بەشێ رێزبەندیا هەمی کرێکاران
`

        },
        {
        page:8,
        name:"Information Bessnis",
        img:info,
        name2:' aodio debitis autem illum harum quas eos quam voluptate distinctio nulla explicabo non dolor voluptatibus, nobis, perspiciatis quaerat quidem!',
        discrption:` هەمی پێزانینێن کارکرنێ  دێ ل ڤی بەشی هێنە دیارکرن
`

        },
        {
        page:9,
        name:"Admin Send And Seen Massige",
        img:massigradmin,
        name2:' aodio debitis autem illum harum quas eos quam voluptate distinctio nulla explicabo non dolor voluptatibus, nobis, perspiciatis quaerat quidem!',

        discrption:` بەشێ فرێکرنا نامان بو ادمینی ل ڤێرە دشێ ناما بو کرێکاران فرێکەت ل دی هەلبژارتنا وی و نامێن کرێکاران ژی ژ بو وی هاتین دێ ل فێرێ بینیت
`        },
        {
        page:10,
        name:"User Send And Seen Massige",
        img:massigeuser,
        name2:' aodio debitis autem illum harum quas eos quam voluptate distinctio nulla explicabo non dolor voluptatibus, nobis, perspiciatis quaerat quidem!',

        discrption:` بەشێ فرێکرنا نامان ژ کرێکاری بو ادمینی. کرێکار دشێت نامەکێ (گازندەکێ) بگەهینیتە ادمینی بێ کو ادمین بزانیت ژ لایێ کێ ڤە هاتیە فرێرن. ئەڤە ژبوهندێ یا باشە کرێکار بێ ترس گاخندا خو بگەهینیت
`        },
      
        ]
    return(
        <>
        <div>
            <center>
                <h1>Sozear compani</h1>
                <p>ئه ف كاركه هه بو دروستكرنا باقشكه را يه ب تايبه تي فاسئ ب نيزيكي 40 كارمه ند لفئره كاردكه ن وهه مي هه زمارئن وان هئشتا ب وه ره قه ي و قه له مي دهئنه كرن ئه فجا ئه ف ويبسايته زبو ب ساناهيكرنا كائن وان هاتيه دروست كرن</p>
            </center> 
        </div>
        <br />
        <div className='moreinfo'>
            <h2>More</h2>
            <p>هنده ك بيزانين لسه ر سايتي</p>
           <p> php My Sql هاتيه دروستكرن ب زمانئ </p>
            <br />
            <ul>
                <li>Login / Sing In</li>
                <li>profele</li>
                <li>total information mony date ....</li>
                <li>Admin / User</li>
                <li>Massige</li>
                <li>Top</li>
            </ul>
            
        </div>

{infosozear.map((e)=>{
return(
    <>
     <div className='info'>
            <p className='page'>Page{e.page}</p>
            <h2 className='name'>{e.name}</h2>
            <img src={e.img} alt="" />
            <p className='dis'>{e.discrption}</p>
           
        </div>


    </>
)
})}
<a className='viss' href="http://sahat.wuaze.com/index.php">Click To Viset Websity</a>
       <br /><br /><br /><br /><br /><br />
      
        </>
    )
}