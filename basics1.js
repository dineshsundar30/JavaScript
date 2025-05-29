console.log("Hello World")

  let a=4
  console.log(a)
  console.log(typeof(a))

  let b = 234.6
  console.log(typeof(b))

  var c = "Rahul Shetty"
  console.log(typeof(c))


  let required = true
  console.log(typeof(required))
  //null and undefined
// let c = a+b ( it did not work //we cannot redeclare variable with let keyword but possible with var)
   c = a+b // reassigning is allowed with let 
   //var c=a+b )this is also allowed)
  console.log(c)
 
 console.log(!required)


| Feature        | `var`             | `let`               | `const`             |
| -------------- | ----------------- | ------------------- | ------------------- |
| Scope          | Function          | Block               | Block               |
| Hoisting       | Yes (initialized) | Yes (uninitialized) | Yes (uninitialized) |
| Re-declaration | Allowed           | Not allowed         | Not allowed         |
| Reassignment   | Allowed           | Allowed             | ❌ Not allowed       |
| Introduced in  | ES5               | ES6 (2015)          | ES6 (2015)          |


//these are comments
/*
dsds
dss
dss
*/
