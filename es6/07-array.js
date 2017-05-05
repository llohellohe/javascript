let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
console.log(arr2)

arr2=Array.from('hello')
// ['h', 'e', 'l', 'l', 'o']
console.log(arr2)

let namesSet = new Set(['a', 'b'])
arr2=Array.from(namesSet) // ['a', 'b']
console.log(arr2)

for (let [index,ele] of arr2.entries()){
	console.log(index+" "+ele)
}
