function counterFunction() {
    let count = 0
    return function () {
        count++
        return count
    }
}

let increament = counterFunction()
let increament1 = counterFunction()
console.log(increament())
// console.log(increament())
// console.log(increament())
// console.log(increament())
console.log(increament1())

// for(let i = 0; i < 10; i++){
//     setTimeout(() => console.log(i),1000)
// }
// console.log(1 - "hi")
// function multiply(a,b){
//   console.log( a*b);
// }

// function currying(fn){
//   return function(a){
//     return function(b){
//       return fn(a,b);
//     }
//   }
// }

// var curriedMultiply = currying(multiply);

// multiply(4, 3); // Returns 12

// curriedMultiply(4)(3); // Also returns 12

// for(let i = 0; i <= 10; i++){

// }
// // console.log(i)

// function Person(name,age,gender){
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }


// var person1 = new Person("Vivek", 76, "male");
// console.log(person1);

// var person2 = new Person("Courtney", 34, "female");
// person2 = Object.create(person2)
// person2.age = 11

// console.log(person2);
// delete person2.age
// console.log(person2.age);
// console.log(person2.constructor.name);
// console.log("Aa".charCodeAt())

// var obj1 = {
//   valueOfThis: function(){
//     return this;
//   }
// }
// var obj2 = {
//   valueOfThis: ()=>{
//     return this;
//   }
// }

// console.log(obj1.valueOfThis()); // Will return the object obj1
// console.log(obj2.valueOfThis()); // Will return window/global object
// let obj1 = {message:"Hello world"};
// const newSet3 = new WeakSet([obj1]);
// // obj1 = null
// console.log(newSet3.has(obj1)); // true
// console.log(newSet3); // true
// console.log(new WeakSet());

// var scope = "global scope";
// function check() 
// {
//     var scope = "local scope"; 
//     function f() 
//     { 
//          return scope; 
//     }
//     return f;
// }
// console.log(check()())


function myFlat(arr, level = 1){
    let res = []
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i]) && level){
            res.push(...myFlat(arr[i], level - 1))
        }else{
            res.push(arr[i])
        }
    }
    return res
}

console.log(myFlat([1,2,[3,4,5,[6,[7,8]]]],3))