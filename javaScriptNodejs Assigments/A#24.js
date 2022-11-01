/*Tests for equality and inequality with strings
Tests using the lower case function
Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
Tests using "and" and "or" operators
Test whether an item is in a array
Test whether an item is not in a array*/
let name = "Muhammad"
let grade = "A"
let age = 24
let status = "Married"
let car = 'Subaru';
let arr = ["a", "b", "c", "d"]
console.log("Is car == 'Subaru'? I predict True.")
console.log(car == 'Subaru')
console.log("Is car != 'subaru'? I predict False.")
console.log(car == "subaru")
console.log("Is name == 'Muhammad'? I predict True.")
console.log(name == "Muhammad")
console.log("Is name != 'Muhammad'? I predict False.")
console.log(name == "Muh")
console.log("Is grade == 'A'? I predict True.")
console.log( grade == 'A')
console.log("Is grade != 'A'? I predict False.")
console.log(grade == "B")
console.log("Is age == 24? I predict True.")
console.log(age == 24)
console.log("Is age != 24? I predict False.")
console.log(age == 22)
console.log("Is age == 24? I predict True.")
console.log(age == 24)
console.log("Is age > 24? I predict False.")
console.log(age > 24)
console.log("Is status == 'Married' and age == 24? I predict True.")
console.log(status == "Married" && age == 24)
console.log("Is status == 'Married' and age == 22? I predict False.")
console.log(status == 'Married' && age == 24)
console.log("Is status == 'Married' and age == 24? I predict True.")
console.log(status == "Married" || age == 20)
console.log("Is status == 'Married' and age == 22? I predict False.")
console.log(status == 'Single' || age == 20)
console.log("Is Array.isArray(arr) is an arry? I predict True.")
console.log(Array.isArray(arr))
console.log("Is a is the element of array? I predict true.")
console.log(arr.includes("a"))
console.log("Is dd is the element of array? I predict False.")
console.log(arr.includes("dd"))
