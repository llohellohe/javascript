function foo1(v){
	console.log("I am foo1() "+v);
}

foo1(2);

(function(v){console.log("fuck"+v)})(132)


const person = {
  sayName() {
    console.log('hello!');
  },
  say:function(){
  	console.log('say!')
  }
};


person.sayName();
person.say();


const s=new Set();
[1,2,3,4,5,6].forEach(x=>s.add(x));
for(let i of s){
	console.log(i);
}

for(let en of s.entries()){
	console.log(en[0]+" "+en[1])
}

for(let [k,v] of s.entries()){
	console.log(k+" "+v)
}

const m=new Map();

m.set("name","yangqi");
m.set("age",20);


for(let [k,v] of m.entries()){
	console.log(k+" "+v)
}

let array=[...m]
console.log(array)



var proxy = new Proxy({}, {
  get: function(target, property) {
    return 35;
  }
});

proxy.time // 35
proxy.name // 35
proxy.title // 35

console.log(proxy.time)


function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

function* f() {
  console.log('执行了！')
}

var generator = f();

setTimeout(function () {
  generator.next()
}, 2);

var fs = require('fs');

var readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) reject(error);
      resolve(data);
    });
  });
};

var gen = function* () {
  var f1 = yield readFile('/etc/profile');
  console.log("====="+f1.toString());
  var f2 = yield readFile('/etc/hosts');
  console.log(f1.toString());
  console.log(f2.toString());
};

gen().next();
console.log("====== GEN1 ");
gen().next();
console.log("====== GEN2 ");