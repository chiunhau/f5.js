const f5 = {};

f5.Swatch = function(colorMode) {
  this.pool = [];
	this.hi = function() {
		console.log("hi");
	}
  this.add = function(c) {
    this.pool.push(c);
  }

  this.get = function(i) {
    return this.pool[i];
  }

  this.random = function() {
    return this.pool[Math.floor(Math.random() * this.pool.length)]
  }
}

f5.Grid = function() {
  this.cols = 10;
  this.rows = 10;
  this.w = 30;
  this.h = 30;

  this.set = function(cols, rows, w, h) {
    this.cols = cols;
    this.rows = rows;
    this.w = w;
    this.h = h;
  }

  this.go = function(cb) {
    for (var r = 0; r < this.rows; r ++) {
      for (var c = 0; c < this.cols; c ++) {
        push();
        translate(c * this.w, r * this.h);
        cb();
        pop();
      }
    }
  }
}

module.exports = f5;
