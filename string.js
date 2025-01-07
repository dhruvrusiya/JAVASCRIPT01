//string in js

let str="Hello"
console.log(str[1]);

console.log(str.toUpperCase())

console.log(str.toLowerCase())

let ct=str.repeat(3)
console.log(ct)

// `` =backtick  
//    `` m jaisa likhege besa ayga output m
// `` m koi variable call karna toh $[name of variable]

let wd="web developer"
let str1=`Hello 
everyone my name is dhruv 
i am a ${wd}`

console.log(str1)


let fname="dhruv"
let lname="rusiya"
// concat function in js
let name=fname.concat(" "+lname)
console.log(name);
