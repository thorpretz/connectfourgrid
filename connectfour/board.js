

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
            grid[i][j].Hplay();
      }
      //grid[i][j].wincheck();
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
