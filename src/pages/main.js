import React from "react";
import './cos.css';
import { Link } from "react-router-dom";
import bg from './bg.mp4'
// import xo from './xo.jpeg'
// import rep from './rep.jpeg'

function Choose() {
    return (
      <div className="d1">
        <video id="myvideo" autoPlay loop muted>
            <source src={bg} type='video/mp4' />
        </video>
        <center>
        <div id='co1'>
        <h1 className="hu">Choose a<br></br> game</h1>
        <div className="btns">
            <Link to='/xo'>
            <div className="btt1" id="btt" onclick="window.open('../home/home.html','_self')">
                Tic-Tac-Toe
                <hr/>
            <img src="https://res.cloudinary.com/dpfn8uv7m/image/upload/v1669192782/xo_i9nph9.png" id='pr1'></img>
            </div>
            </Link>
            {/* <div className="bt2" id="btt">
                Match the cards
            </div>
            <div className="bt3" id="btt">
                Guess the number
            </div> */}
            <Link to='/game'>
            <div className="bt5" id="btt">
                Pattern Repeater
                <hr/>
            <img src="https://res.cloudinary.com/dpfn8uv7m/image/upload/v1669192775/rep_zgeawy.png" id='pr1'></img>
            </div>
            </Link>
            <Link to='/maze'>
            <div className="bt4" id="btt">
                Maze Runner
                <hr/>
            <img src="https://res.cloudinary.com/dpfn8uv7m/image/upload/v1669193859/maze_rjrz2w.png" id='pr1'></img>
            </div>  
            </Link>          
        </div><br></br>
        </div>
        <Link to='/'><button type="button" id='bttt' class="temp10" onclick="window.open('../home/home.html','_self')">back</button></Link>
        </center>
      </div>
    );
  }
  
  export default Choose;