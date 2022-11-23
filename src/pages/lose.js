import React from "react";
import './wl.css';
import {Link} from 'react-router-dom';
import wallpaper from './wallpaper.mp4';


class Lose extends React.Component
{
    render(){
        return(<>
        {/* <video id="myvideo" autoPlay loop muted>
    <source src={wallpaper} type='video/mp4' />
</video> */}
            <p>Game Over</p>
            <Link to='/game'><button class="x3" onclick="window.open('../start/index.html','_self')">Play Again</button></Link>   
            <Link to='/main'><button class="x2" onclick="window.open('../home/home.html','_self')">Menu</button></Link>   
            </>
        )
    }
}

export default Lose;