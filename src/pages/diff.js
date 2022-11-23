import React from "react";
import video1 from "../images/wallpaper.mp4";
import {Link} from 'react-router-dom';
import './diff.css';

class Diff extends React.Component
{
    render(){
        return(
            <>
            <video autoPlay muted loop id="myVideo">
        <source src={video1} type="video/mp4"/>
    </video>
    {/* <audio controls autoplay style="width: 0%;height:0%">
        <source src="audio.mpeg" type="audio/mpeg">
    </audio> */}
    {/* <h1 style="font-size: 70px;color:white;text-align:center">Select Difficulty</Select></h1><br><br> */}
    <center>
    <div class="button">
        <input type="button" id="easy" class="st" value="Easy" onclick="document.getElementById('choose').innerHTML='You have choosen easy';"/>
        <br/><br/>
        <input type="button" id="medium" class="st" value="Medium" onclick="document.getElementById('choose').innerHTML='  You have choosen   <br><br>medium';" /><br/><br/>
       <input type="button" id="hard" class="st"   value="Hard" onclick="document.getElementById('choose').innerHTML='You have choosen hard';"/><br/><br/>
       <pre id="choose" class="choose">Choose a Difficulty</pre><br/><br/>
       <Link to='/'><input type="button" id="diff2" class="diff2" value="Back" onclick="window.open('../home/home.html','_self')"/></Link>
   </div>
</center>
            </>
        )
    }
}

export default Diff;