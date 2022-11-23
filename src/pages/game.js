import React from "react";
import './game.css';
import video1 from '../images/wallpaper.mp4';
import {Link} from 'react-router-dom';
import wallpaper from './wallpaper.mp4';
// import audio1 from './images/audio.mpeg';

var inte;
var deinte;
var dej;
var rand;
var arr=[];
var count=0;
var j=0;
var noft=1;
var timeing=1000;
function kickstart()
{
    inte=setInterval(generate,timeing);
}
function generate()
{
    rand=Math.floor((Math.random()*9)+1);
    arr[j]=rand;
    j++;
    document.getElementById(rand).style.backgroundColor="purple";
    deinte=setInterval(boxclose,500);
    count++;
    if(count==noft)
    {
        clearInterval(inte);
        dej=setInterval(resetj,500);
        count=0;
    }
}
function boxclose()
{
    document.getElementById(arr[j-1]).style.backgroundColor=" white";
    clearInterval(deinte);
}
function resetj()
{
    j=0;
    clearInterval(dej);
    document.getElementById('onof').style.backgroundColor="green";
}
var index=0;
var dic={1:'one',2:'two',3:'three',4:'four',5:'five',6:'six',7:'seven',8:'eight',9:'nine'};
function cl(l)
{
    document.getElementById(dic[l]).style.backgroundColor="purple";
    deinte=setInterval(deg,350,dic[l]);
    if(l==arr[index])
    {
        index++;
    }
    else
    {
        // setTimeout(open,500,'../winlose/lose.html','_self');
        // alert('lose');
        window.location.href='/lose';
        index=0;
    }
    if(index==noft)
    {
        noft++;
        document.getElementById('onof').style.backgroundColor="red";
        kickstart();
        index=0;
    }
    if(noft==6)
    {
        // setTimeout(open,500,'../winlose/win.html','_self');
        // alert('win');
        window.location.href='/win';
        index=0;
    }
}
function deg(m)
{
    document.getElementById(m).style.backgroundColor=" white";
    clearInterval(deinte);
}

class Game extends React.Component
{
    render()
    {
        return(
            <>

            <video id="myvideo" autoPlay loop muted>
    <source src={wallpaper} type='video/mp4' />
</video>
    {/* <audio controls autoplay style="width: 0%;height:0%">
        <source src={audio1} type="audio/mpeg"/>
    </audio> */}
        <center>
    <div class="out"><br/><br/><br/><br/>
        <div class="outer">
            <button id="1" class="inner" ></button>
            <button id="2" class="inner" ></button>
            <button id="3" class="inner" ></button>
            <button id="4" class="inner" ></button>
            <button id="5" class="inner" ></button>
            <button id="6" class="inner" ></button>
            <button id="7" class="inner" ></button>
            <button id="8" class="inner" ></button>
            <button id="9" class="inner" ></button>
        </div>
        <br/>
        <div id="onof"></div>
        <br/>
        <div class="outer">
            <button id="one" class="inner" onClick={()=>cl(1)} value="1"></button>
            <button id="two" class="inner" onClick={()=>cl(2)} value="2"></button>
            <button id="three" class="inner" onClick={()=>cl(3)} value="3"></button>
            <button id="four" class="inner" onClick={()=>cl(4)} value="4"></button>
            <button id="five" class="inner" onClick={()=>cl(5)} value="5"></button>
            <button id="six" class="inner" onClick={()=>cl(6)} value="6"></button>
            <button id="seven" class="inner" onClick={()=>cl(7)} value="7"></button>
            <button id="eight" class="inner" onClick={()=>cl(8)} value="8"></button>
            <button id="nine" class="inner" onClick={()=>cl(9)} value="9"></button>
        </div>
        <br/>
        <button onClick={kickstart} class="start">start</button><br/><br/>
        <Link to='/main'><button type="button" class="temp1" onclick="window.open('../home/home.html','_self')">Back</button></Link>
        <br/><br/>
        <br/><br/>
    </div>
    </center>
        </>
            );
    }
}

export default Game;