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
var firstmoved = true;
var secondmove = true;
  if(yellowlocation == null){
	while(firstmoved) {
      var spot = randomIntFromInterval(0,6);
      if (grid[spot][5].checkhole() == false){
        grid[spot][5].yellowchip = true;
		yellowlocation = grid[spot][5];
		firstmoved = false;
		}
    }
  } else if (check3() != null){
    check3().yellowchip = true;
  }
  else {
    for (var count = 1; count < 7; count++){
      for (var i = -count; i <=count; i++){
        for (var j = -count; j <= count; j++){
          var ioff = yellowlocation.colL() + i;
          var joff =  yellowlocation.rowL() + j;
          if (ioff > -1 && ioff < 7 && joff > -1 && joff < 6) {
            if(grid[ioff][joff].checkhole() == false & grid[ioff][joff].Vplay() & secondmove){
                yellowlocation = grid[ioff][joff];
                yellowlocation.yellowchip = true;
                secondmove = false;
              }
            }
          }
        }
      }
  }
}

function check3() {
//  var foundspot = false;
  for (var x = 0; x < 7; x++){
    for (var y = 0; y < 3; y++){
      if (grid[x][y].checkhole() == false & grid[x][y].Vplay()){
        if (grid[x][y + 1].yellowchip & grid[x][y + 2].yellowchip & grid[x][y + 3].yellowchip) {
          return grid[x][y];
        }
      }
    }
  }
  for (var y = 0; y < 6; y++){
    for (var x = 0; x < 4; x++){
      if (grid[x][y].checkhole() == false & grid[x][y].Vplay()){
        if (grid[x + 1][y].yellowchip & grid[x + 2][y].yellowchip & grid[x + 3][y].yellowchip) {
          return grid[x][y];
        }
      }
    }
  }
  for (var x = 0; x < 3; x++){
    for (var y = 0; y < 2; y++){
      if (grid[x][y].checkhole() == false & grid[x][y].Vplay()){
        if (grid[x + 1][y + 1].yellowchip & grid[x + 2][y + 2].yellowchip & grid[x + 3][y + 3].yellowchip) {
          return grid[x][y];
        }
      }
    }
  }
  for (var x = 4; x < 7; x++){
    for (var y = 0; y < 3; y++){
      if (grid[x][y].checkhole() == false & grid[x][y].Vplay()){
        if (grid[x - 1][y + 1].yellowchip & grid[x - 2][y + 2].yellowchip & grid[x - 3][y + 3].yellowchip) {
          return grid[x][y];
        }
      }
    }
  }
  for (var x = 0; x < 7; x++){
    for (var y = 0; y < 3; y++){
      if (grid[x][y].checkhole() == false & grid[x][y].Vplay()){
        if (grid[x][y + 1].redchip & grid[x][y + 2].redchip & grid[x][y + 3].redchip) {
          return grid[x][y];
        }
      }
    }
  }
  for (var y = 0; y < 6; y++){
    for (var x = 0; x < 4; x++){
      if (grid[x][y].checkhole() == false & grid[x][y].Vplay()){
        if (grid[x + 1][y].redchip & grid[x + 2][y].redchip & grid[x + 3][y].redchip) {
          return grid[x][y];
        }
      }
    }
  }
  for (var x = 0; x < 3; x++){
    for (var y = 0; y < 2; y++){
      if (grid[x][y].checkhole() == false & grid[x][y].Vplay()){
        if (grid[x + 1][y + 1].redchip & grid[x + 2][y + 2].redchip & grid[x + 3][y + 3].redchip) {
          return grid[x][y];
        }
      }
    }
  }
  for (var x = 4; x < 7; x++){
    for (var y = 0; y < 3; y++){
      if (grid[x][y].checkhole() == false & grid[x][y].Vplay()){
        if (grid[x - 1][y + 1].redchip & grid[x - 2][y + 2].redchip & grid[x - 3][y + 3].redchip) {
          return grid[x][y];
        }
      }
    }
  }
  return null;
}



function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
