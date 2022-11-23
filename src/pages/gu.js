import React from "react";
import './gu.css';
class Guess extends React.Component
{
    render()
    {
        return(
        <>
            <center>
            <div align="right" id="cho">10</div>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <div id="ino">
            <h1>GUESS THE NUMBER BETWEEN 1-100</h1>
            <label className="la" for="">Enter The Number:</label>
            <input className="inpt" type="number" id="guess"/>
            <br/><br/>
            <input onclick="check()" type="submit" value="Submit"/>
            <h1 id="result"></h1>
            </div>
             </center>
        </>
        )
    }
}
export default Guess