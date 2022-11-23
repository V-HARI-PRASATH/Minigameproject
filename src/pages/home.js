import React from "react";
import wallpaper from "./wallpaper.mp4";
import './home.css';
import {Link} from 'react-router-dom';


class Home extends React.Component
{
    render()
    {
        return(
            <> 

        <video id="myvideo" autoPlay loop muted>
    <source src={wallpaper} type='video/mp4' />
</video>
    
        <center>
        <h1 class="hs">Amigos</h1>
        </center>
        <div class="a1">
            <div class="buttons">
                <Link to='/main'><input type="button" id="start" class="start" value="Start" onclick="window.open('../start/index.html','_self')"/></Link>
                <br/><br/>
                <Link to='/diff'><input type="button" id="diff" class="diff" value="Difficulty" onclick="window.open('diff.html','_self')"/></Link><br/><br/>
               <Link to='/rule'><input type="button" id="rule" class="rule"   value="Rules" onclick="window.open('../rules/among us.html','_self')"/></Link>
           </div><br/><br/>
           {/* <p style="margin-top: 700px;color:white">v1.0.0</p> */}
        </div>
        {/* <div class="cs" onclick="window.open('cs.html','_self')">
            <img src="cs.gif" style="width: 100%;float: left;"/>
            <p style="width: 100%;float: right;">Patch v1.0.2<br/>comming soon</p>
       </div>
       <p style="position: fixed;float:left;color: white;margin: 750px 0px 0px 0px;font-size: 25px;">V1.0.0</p> */}
            </>
        )
    }
}

export default Home;