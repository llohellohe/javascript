class Point{
	constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

function Point2(x,y){
	this.x=y;
	this.y=x;
}

var p=new Point(1,2);
console.log(p)


Point2.prototype.toString = function () {
  return '==' + this.x + ', ' + this.y + '==';
};
var p2=new Point2(1,2);
console.log(p2.toString())



