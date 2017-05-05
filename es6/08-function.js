function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }
  
  values.forEach(
	function(p){
	console.log(p)
	}
);

  return sum;
}

let ret=add(2, 5, 3) // 10
console.log(ret)


function add(x, y) {
  return x + y;
}

var numbers = [4, 3,38];
let n=add(...numbers) // 42
console.log(n);


function f(){
console.log("I AM FUNCTION f()");
}

f()

var f1=f
f1()


var f2=function(a){console.log(a)}(13);

(function(v){
console.log("I AM ANSYMOUS "+v)
})(1);
