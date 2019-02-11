var gamestate = true;

function make2DArray(cols, rows) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

var grid;
var col;
var row;
var w = 70;

function setup() {
  col = 7;
  row = 6;
  createCanvas(w * col + 1, w * row + 1);
    grid = make2DArray(col, row);
    for (var i = 0; i < col; i++) {
      for (var j = 0; j < row; j++) {
        grid[i][j] = new hole(i, j, w);
      }
    }
}

function mousePressed() {
if (gamestate){
  for (var i = 0; i < col; i++) {
    for (var j = 0; j < row; j++) {
      if (grid[i][j].contains(mouseX, mouseY)) {
            if (grid[i][j].Hplay()){
            yellowturn();
            if(grid[i][j].wincheck()){
			  gamestate = false;
            }
          }
      }
    }
  }
  }
}

function draw() {
  background(255);
  for (var i = 0; i < col; i++) {
    for (var j = 0; j < row; j++) {
      grid[i][j].show();
    }
  }
}


var yellowlocation = null;

function yellowturn() {
var moved = true;
  if(yellowlocation == null){
	while(moved) {
      var spot = randomIntFromInterval(0,6);
      if (grid[spot][5].yellowchip == false & grid[spot][5].redchip == false){
        grid[spot][5].yellowchip = true;
		yellowlocation = grid[spot][5];
		moved = false;
		}
    }
  }
  else {
	if (yellowlocation.rowL() > 0 & grid[yellowlocation.colL()][yellowlocation.rowL() - 1].redchip == false & grid[yellowlocation.colL()][yellowlocation.rowL() - 1].yellowchip == false){
		yellowlocation = grid[yellowlocation.colL()][yellowlocation.rowL() - 1];
		yellowlocation.yellowchip = true;
	}
	else if (yellowlocation.colL() + 1 <= 6 & yellowlocation.rowL() - 2 >= 0){
		for(var i = 0; i < 5; i++){
				
		}
	}
  }
 }



function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}