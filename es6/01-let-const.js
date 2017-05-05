var a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
this.a // 1

let b = 1;
this.b // undefine

console.log(this)
