
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
class GridSystem{
	constructor(matrix, playerX, playerY) {
		this.matrix = matrix;
		//this.rulePage = this.#getContext(5,10,"white",true);
		// this.uiContext = this.#getContext(580, 620, "#000");
		this.outlineContext = this.#getContext(0, 0, "#444");
		this.topContext = this.#getContext(0, 0, "orange", true);
		this.cellSize = 15;
		this.padding = 2;
		this.player = { x: playerX, y: playerY, color: "red" };
		this.matrix[playerY][playerX] = 2;
        this.keys = 0;
		this.i = 1;
		document.addEventListener("keyup", this.#movePlayer);
	}
	#isValidMove(x, y) {
		if (this.matrix[this.player.y + y][this.player.x + x] === 0) {
			return true;
		}
		else if(this.matrix[this.player.y + y][this.player.x + x] === 3) {
			if(this.keys==3)
			window.location.href='/win';
			else{
			  alert("Find all the three keys to open the Purple door");
			  return false;
			}
		}
		else if(this.matrix[this.player.y + y][this.player.x + x] === 4) {
			this.keys++;
			this.keycolor = "yellow";
		    return true;
		}
		else if(this.matrix[this.player.y + y][this.player.x + x] === 5) {
			this.keys++;
			this.keycolor = "green";
		    return true;
		}
		else if(this.matrix[this.player.y + y][this.player.x + x] === 6) {
			this.keys++;
			this.keycolor = "blue";
		    return true;
		}
		else
		return false;
	}

	#updateMatrix(y, x, val) {
		this.matrix[y][x] = val;
	}

	#movePlayer = ( { keyCode } ) => {
		if (keyCode === 37) {
			if (this.#isValidMove(-1, 0)) {
				//console.log(y+" "+x);
			 this.#updateMatrix(this.player.y, this.player.x, 0);
			 this.#updateMatrix(this.player.y, this.player.x - 1, 2);
			 this.player.x --;
			 this.render();
		 }
		} else if (keyCode === 39) {
			if (this.#isValidMove(1, 0)) {
				this.#updateMatrix(this.player.y, this.player.x, 0);
 			 	this.#updateMatrix(this.player.y, this.player.x + 1, 2);
				this.player.x ++;
				this.render();
			}
		} else if (keyCode === 38) {
			if (this.#isValidMove(0, -1)) {
				this.#updateMatrix(this.player.y, this.player.x, 0);
 			 	this.#updateMatrix(this.player.y - 1, this.player.x, 2);
				this.player.y --;
				this.render();
			}
		} else if (keyCode === 40) {
			if (this.#isValidMove(0, 1)) {
				this.#updateMatrix(this.player.y, this.player.x, 0);
 			 	this.#updateMatrix(this.player.y + 1, this.player.x, 2);
				this.player.y ++;
				this.render();
			}
		}
	}
		#getCenter(w, h) {
		return {
			x: window.innerWidth / 2 - w/2 + "px",
			y: window.innerHeight / 2 - h/2 + "px"
		};
	}

	#getContext(w, h, color = "#111", isTransparent = false) {
		this.canvas = document.createElement("canvas");
		this.context = this.canvas.getContext("2d");
		this.width = this.canvas.width = w;
		this.height = this.canvas.height = h;
		this.canvas.style.position = "absolute";
		this.canvas.style.background = color;
		if (isTransparent) {
			this.canvas.style.backgroundColor = "transparent";
		}
		const center = this.#getCenter(w, h);
		this.canvas.style.marginLeft = center.x
		this.canvas.style.marginTop = center.y;
		document.body.appendChild(this.canvas);

		return this.context;
	}

	render() {
		const w = (this.cellSize + this.padding) * this.matrix[0].length - (this.padding);
		const h = (this.cellSize + this.padding) * this.matrix.length - (this.padding);

		this.outlineContext.canvas.width = w;
		this.outlineContext.canvas.height = h;

		const center = this.#getCenter(w, h);
		this.outlineContext.canvas.style.marginLeft = center.x
		this.outlineContext.canvas.style.marginTop = center.y;

		this.topContext.canvas.style.marginLeft = center.x
		this.topContext.canvas.style.marginTop = center.y;

		for (let row = 0; row < this.matrix.length; row ++) {
			for (let col = 0; col < this.matrix[row].length; col ++) {
				const cellVal = this.matrix[row][col];
				let color = "#111";

				if (cellVal === 1) {
					color = "#4488FF";
				} else if (cellVal === 2) {
					color = this.player.color ;
				}
				  else if(cellVal == 3){
					color = "purple";
				}
				else if(cellVal == 4){
					color = "yellow";
				}
				else if(cellVal == 5){
					color = "green";
				}else if(cellVal == 6){
					color = "blue";
				}

				this.outlineContext.fillStyle = color;
				this.outlineContext.fillRect(col * (this.cellSize + this.padding),
				row * (this.cellSize + this.padding),
				this.cellSize, this.cellSize);
			}
		}
		this.uiContext.font = "20px Courier";
		this.uiContext.fillStyle = "white";
		this.uiContext.fillText("Grid Based Game", 15, 30);
		this.uiContext.fillText("No Keys Found", 370, 80);

		if(this.keys==1){
		//this.uiContext.fillStyle = "red";
		//this.uiContext.fillRect(0, 0, 700, 150);
		this.uiContext.clearRect(370, 60, 25, 20);
		this.uiContext.fillStyle = this.keycolor;
		this.uiContext.fillRect(400,100,20,20);
	}
		if (this.keys==2){
			this.uiContext.clearRect(370, 60, 25, 20);
			this.uiContext.fillStyle = this.keycolor;
			//this.uiContext.clearRect(400,85,550,30);
			this.uiContext.fillRect(430,100,20,20);
			//this.uiContext.fillText("keys"+this.keys, 400, 200);
		}
		if (this.keys==3){
			this.uiContext.clearRect(370, 60, 25, 20);
			this.uiContext.fillStyle =this.keycolor;
			//this.uiContext.clearRect(400,85,550,30);
			this.uiContext.fillRect(460,100,20,20);
			//this.uiContext.fillText("keys"+this.keys, 400, 200);
		}
	}
}

const gridMatrix = [
   [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
   [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
   [1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 4, 0, 0, 0, 0, 0, 0],
   [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
   [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1],  
   [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
   [0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 6],
   [1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
   [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
   [1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1],
   [1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1],
   [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1],
   [1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
   [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0],
   [1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
   [1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 3, 1, 0],
   [1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
   [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 5, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]

];
const gridSystem = new GridSystem(gridMatrix, 1, 1);

export default class GridGame extends React.Component
{
	render()
    {
		gridSystem.render();
		return(
			
			<Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h6" gutterBottom>
        <h3 align = {"left"}>How to Play?</h3>
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        <p align = {"left"}>*Player colour is red.<br></br>
        *Collect all the three colours<br></br>
            -Blue<br></br>
            -Green<br></br>
            -Orange<br></br>
        *To open the purple Door.</p>
        </Typography>
    </Box>
        );
    }
}