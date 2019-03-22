console.log("weekend HW")
/*
How do we assign a value to a variable?
we can assign using let var and const

How do we change the value of a variable?
we can use =

How do we assign an existing variable to a new variable?
you can assign it by declaring a new variable and using = to assign the new variable to an existing variable

Remind me, what are declare, assign, and define?
declaring variable is creating a new variable
assigning it is giving a value to the variable
difine is giving the variable multiple value

What is pseudocoding and why should you do it?
to write code in plain english so that you can construct the process more easily

What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
75% - 90% of thingking and 25%-75% of coding; */


// Create a variable called firstVariable.
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number.
// Store the value of firstVariable in a new variable called secondVariable
// Change the value of secondVariable to any string.
// What is the value of firstVariable?
let firstVariable = "hello world";
firstVariable = 12;
let secondVariable = firstVariable;
secondVariable = "to string";
//console.log(firstVariable)


// Create a variable called yourName and set it equal to your name as a string.
//  Then, write an expression that takes the string "Hello, my name is " and the variable
//  yourName so that it returns a new string with them concatenated.

let yourName = "jomar"

//let sayName = console.log("hello, my name is", yourName)

/*
Using the provided variable definitions, replace the blanks so that all log statements
print true in the console. Answers should be all be valid JS syntax and not weird things
 that don't make sense but happen to print true to the console.*/

 const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' === 'Name');
// console.log(true > false);
// console.log(false + false + false + false + false + false < true);
// console.log(false === false)
// console.log(e === 'Kevin');
// console.log(a + b === c);
// console.log(a * a === d);
// console.log(48 == '48');


// Declare a variable animal. Set it to be either "cow" or something else.
// Write code that will print out "mooooo" if the it is equal to cow.
// Change your code so that if the variable animal is anything other than a cow,
// it will print "Hey! You're not a cow."

let animal = "cow";
// if (animal == "cow"){
//   console.log("mooo")
// }
// else {
//   console.log("hey! You're not a cow")
// }


// Make a variable that will hold a person's age. Be semantic.
// Write code that will print out "Here are the keys", if the age is 16 years or older.
// If the age is younger than 16, a message should print "Sorry, you're too young."

const age = 5;
if (age >= 16){
  //console.log("here are the keys")
}
else {
  //console.log("sorry, your're too young")
}


// Write a loop that will print out all the numbers from 0 to 10, inclusive.
// Write a loop that will print out all the numbers from 10 up to and including 400.
// Write a loop that will print out every third number starting with 12 and going no higher than 4000.

for(let i = 0; i <= 10; i++){
  //console.log(i)
}

for(let i = 10; i <= 400; i++){
  //console.log(i)
}

for(let i = 12; i <= 40; i+=3){
  //console.log(i)
}

// Print out the even numbers that are within the range of 1 - 100.
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number

for(let i = 1; i <= 100; i++){
  if (i % 2 === 0) {
    //console.log(i,"<--is an even")
  }
}


//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.

for(let i = 1; i <= 100; i++){
  if(i % 5 === 0){
    console.log("I found a", i, "number. high five!")
  }
  // Add to the code from above to print out "I found a number. Three is a crowd" if the number
  //  is a multiple of three
  if(i % 3 === 0){
    console.log("I found a", i, "Three is a crowd")
  }

}
