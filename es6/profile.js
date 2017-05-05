var firstName="yang"
var lastName="qi"
var age=10

function f(){
	console.log("I AM f()");
}

console.log('I AM IN PROFILE.JS')

export {firstName,lastName,age,f}

export default function(){
	console.log("I AM EXPORT DEFAULT")
	return "hello export default"
}