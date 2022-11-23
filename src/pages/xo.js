import React from "react";
import './xo.css';
import bg  from './bg.mp4';
// import Link from "@mui/material/Link/Link";
import xg from '../images/X.png';
import { style } from "@mui/system";
import {Link} from 'react-router-dom';

var turn=1;
var a=[];
var j=0;
function play(x)
{
    if(a.includes(x)==false)
    {
        if(turn==1)
        {
            document.getElementById(x).style.backgroundColor='purple';
            document.getElementById('header').innerHTML='Player:2';
            document.getElementById(x).value='x';
            turn=0;
            
        }
        else
        {
            document.getElementById(x).style.backgroundColor='blue';
            document.getElementById('header').innerHTML='Player:1';
            document.getElementById(x).value='o';
            turn=1;
        }
        a[j]=x;
        j++;
    }
    check();
    if(a.length==9)
    {
        document.getElementById('a1').innerHTML="Draw";
    }
}
function check()
{
    for(var i=1;i<=3;i++)
    {
        var val=document.getElementById(i).value;
        var val2=document.getElementById(i+3).value;
        var val3=document.getElementById(i+6).value;
        if((val2==val) && (val3==val) && val!='n')
        {
            document.getElementById('a1').innerHTML="Win";
        }
    }
    for(var i=1;i<=7;i+=3)
    {
        var val=document.getElementById(i).value;
        var val2=document.getElementById(i+1).value;
        var val3=document.getElementById(i+2).value;
        if(val2==val && val3==val && val!='n')
        {
            document.getElementById('a1').innerHTML="Win";
        }
    }
    var val=document.getElementById(1).value;
    var val2=document.getElementById(5).value;
    var val3=document.getElementById(9).value;
    if(val2==val && val3==val && val!='n')
    {
        document.getElementById('a1').innerHTML="Win";
    }
    var val=document.getElementById(3).value;
    var val2=document.getElementById(5).value;
    var val3=document.getElementById(7).value;
    if(val2==val && val3==val && val!='n')
    {
        document.getElementById('a1').innerHTML="Win";
    }

}
class XOgame extends React.Component
{
    render()
    {
        return(
            <>
            <video autoPlay muted id="bg">
                <source src={bg} type="video/mp4"/>
            </video>
            <div id="ou">
            <center>
            <h1 className="th">Tic Tac Toe</h1>
            <h2 id='header'>Player:1</h2>
                <div class='oute'>
                    <button id='1' class='inne' value='n' onClick={()=>{play(1)}}></button>
                    <button id='2' class='inne' value='n' onClick={()=>{play(2)}}></button>
                    <button id='3' class='inne' value='n' onClick={()=>{play(3)}}></button>
                    <button id='4' class='inne' value='n' onClick={()=>{play(4)}}></button>
                    <button id='5' class='inne' value='n' onClick={()=>{play(5)}}></button>
                    <button id='6' class='inne' value='n' onClick={()=>{play(6)}}></button>
                    <button id='7' class='inne' value='n' onClick={()=>{play(7)}}></button>
                    <button id='8' class='inne' value='n' onClick={()=>{play(8)}}></button>
                    <button id='9' class='inne' value='n' onClick={()=>{play(9)}}></button>
                </div>
                <br/><br/>
                <div id="a1"></div>
                </center>
                    <Link to='/main'><button type="button" class="bt1" >Back</button></Link>
                </div>
            </>
        )
    }
}

export default XOgame;