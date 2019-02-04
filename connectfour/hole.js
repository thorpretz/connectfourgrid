function hole(i, j, w) {
  this.i = i;
  this.j = j;
  this.x = i * w;
  this.y = j * w;
  this.w = w;
  this.yellowchip = false;
  this.redchip = false;
  this.neighborcount = 0;
}
var count =0;
hole.prototype.show = function(){
  stroke(0);
  noFill();
  rect(this.x, this.y, this.w, this.w);
      if (this.redchip) {
        fill('red');
        ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
      }
      else if (this.yellowchip) {
        fill('yellow');
        ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
      }
}

hole.prototype.contains = function(x, y){
  return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
}

hole.prototype.Hplay = function() {
    if (this.j != 5) {
      var neighbor = grid[this.i][this.j + 1];
      if (neighbor.redchip || neighbor.yellowchip){
        if (this.yellowchip == false & this.redchip == false) {
          this.redchip = true;
        }
      }
    }
    else if (this.yellowchip == false & this.redchip == false){
      this.redchip = true;
    }
}

hole.prototype.AIplay = function() {
  for (var i = 0; i < 7; i++) {
    for (var j = 0; j < 6; j++) {
      var boardcheck = grid[i][j];
      if (boardcheck.redchip) {
        count++;
      }
    }
  }
  console.log(count);
  count = 0;
}

hole.prototype.wincheck = function() {
  var totalneighbor = 0;
  if (this.redchip) {
    for (var ioff = -1; ioff <= 1; ioff++) {
      for (var joff = -1; joff <= 1; joff++) {
        var i = this.i + ioff;
        var j = this.j + joff;
        if (i > -1 && i < col && j > -1 && j < row) {
        var neighbor = grid[i][j];
          if (neighbor.redchip) {
              totalneighbor++;
            }
          }
        }
      }
    }
  console.log(totalneighbor);
  this.neighborcount = totalneighbor;
}
