import React from "react";
import {Link} from 'react-router-dom';
import './rule.css';
import wallpaper from './wallpaper.mp4';
import ima from './ima.gif';

class Rule extends React.Component
{
    render(){
        return(
            <>
                <dl class="a">
        <center>
        <dt>RULES:</dt>
    </center>
        <dd>
            <ul>
                <li>Start Reactor is a game played by a single player.</li>
                <li>Every player will be provided with a single chance to play.</li>
                <ul><br/>
                    <li>The Start Reactor will generate a pattern on the tiles.</li>
                    <li>Players should follow the pattern , created by the Start Reactor.</li><br/>
                    <li>There are 3 levels of difficulties :</li>
                    <ol>
                        <li class="b">Easy</li>
                        <li class="c">Medium</li>
                        <li class="d">Hard</li>
                    </ol>
                    <li>The number of tiles and speed of the patter generated will be varied<br/>
                        according to each level the player chooses to play.</li><br/>
                    <ol type="i">
                            <li>    
                                 The game starts with identifing the pattern shown and mimic the pattern <br/>
                                 on the tiles given below ,there are 3 levels in this game,by each passing<br/>
                                 level the speed and amount of title and pattern shown will get hard.
                            </li>
                    </ol>
                </ul>
            </ul>
        </dd>
        <img src={ima} alt="AMONG US" id="ima"/>
        <center><br/>
        <Link to='/'><button type="button" class="b1" onclick="window.open('../home/home.html','_self')">Back</button></Link>
    </center>
    </dl>
            </>
        )
    }
}
export default Rule;