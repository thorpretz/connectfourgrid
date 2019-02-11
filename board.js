

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
  for (var i = 0; i < col; i++) {
    for (var j = 0; j < row; j++) {
      if (grid[i][j].contains(mouseX, mouseY)) {
            if (grid[i][j].Hplay()){
            yellowturn();
            if(grid[i][j].wincheck()){
              console.log("player has won");
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

function yellowturn() {
  for (var i = 0; i < col; i++) {
    for (var j = 0; j < row; j++) {
        if (grid[i][j].yellowchip){
          if(grid[i][j - 1].yellowchip == false & grid[i][j - 1].redchip == false) {
          //grid[i][j - 1].yellowchip = true;
            var location = grid[i][j - 1];
          }
            else if(i < 6 ){
              if (grid[i + 1][j].yellowchip == false & grid[i + 1][j].redchip == false){
                var location = grid[i + 1][j];
            }
          }
        }
    }
  }
  if(location == null){
      var spot = randomIntFromInterval(0,6);
      if (grid[spot][5].yellowchip == false & grid[spot][5].redchip == false){
        grid[spot][5].yellowchip = true;
    }
  }
  else {
    location.yellowchip = true;
  }
  //grid[][].yellowchip = true;
}


function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
