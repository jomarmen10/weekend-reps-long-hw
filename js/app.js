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
    //console.log("I found a", i, "number. high five!")
  }
  // Add to the code from above to print out "I found a number. Three is a crowd" if the number
  //  is a multiple of three
  if(i % 3 === 0){
    //console.log("I found a", i, "Three is a crowd")
  }
}


//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.

function sumAll(num){
  let total = 0;
  for(let i = 0; i <= num; i++){
    total += i
  }
  return total
}

let bank_account = sumAll(10)
//console.log(bank_account)


//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all
// the numbers between 1 - 100 multiplied by 2

function double(num){
  let total = 0;
  for(let i = 0; i <= num; i++){
    total += i * 2
  }
  return total;
}
let bank_acct = double(100)
//console.log(bank_acct)

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
//  The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000. If a previous question you've done has
// helpful bits of code in it that partially solves this problem, look back at them.

function sumThreeFive(num){
  let result = 0;
  for(let i = 0; i < num; i++){
    if(i % 3 === 0 || i % 5 === 0){
      result += i;
    }
  }
  return result
}

//console.log(sumThreeFive(1000))

// You just solved Project Euler problem 1!
//
// Are you having dejà vu? This just in! From the "Read the entire problem before you start" dept:
// This problem was on a previous assignment. You may skip it if you've already done it, just include a
// comment saying that you've already done it. If you've now done the problem twice, perhaps next
//  time you'll read the whole problem before starting it.


// What are the things in an array called?
// value
// Do Arrays guarantee those things will be in order?
// no
// What real-life thing could you model with an array?
//let classroom = ["students","laptop"]


// Create an array that contains three quotes and store it in a variable called quotes.
const quotes = ["that's my spot", "cool cool cool cool", "just do it", "do it now and have peace"]

// Given the following array const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
// Change the value of "Hello" to "World".
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

const randomThings = [1,10,"hello",true];

//console.log(randomThings[0])

randomThings[2] = "World"
//console.log(randomThings)


// Given the following array
 const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// What would you write to access the 3rd element of the array?
// Change the value of "Github" to "Octocat"
// Add a new element, "Cloud City" to the array.

ourClass[2];
ourClass[4] = "octocat";
ourClass.push("cloud city")
//console.log(ourClass)


// Given the following array:

const myArray = [5, 10, 500, 20]

// Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.
// Remove the 5 from the beginning of the array.
// Add the string "Bob Marley" to the beginning of the array.
// Remove the string of your choise from the end of the array.
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean?
// Did the .reverse() method return anything?

myArray.push("egon");
myArray.push("another one")
myArray.shift()
myArray.unshift("bob marley")
//console.log(myArray)
myArray.reverse()
//console.log(myArray)
//yes mutating is redifining const variable.


// Create a variable that contains an integer.
// Write an if ... else statement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big number if the number is greater than or equal to 100.

const number = 1;
if(number < 100) {
  //console.log("little number")
}
else {
  //console.log("big number")
}

// Write an if ... else if ... else statement:
// console.log() little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

if(number < 5){
  //console.log("little number");
} else if ( number > 10){
  //console.log("big number")
} else {
  //console.log("monkey")
}

///////I've DONE it///////////////
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
// In the same way, access one item from Thom's pants array.
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.


//////I've DONE it////////////
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?


// Write a function printCool that accepts one parameter, name as an argument. The function should
// print the name and a message saying that that person is cool.

function printCool(str){
  console.log(str, "is cool")
}
let name = "batman";
//printCool(name)


// Write a function calculateCube that takes a single number and prints the volume of a cube made
//from that number.

function calculateCube(num){
  console.log(Math.pow(num,3))
}

//calculateCube(6)


// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if
// it is a vowel, false otherwise. The vowel could be upper or lower case.

function isVowel(str){
  let newStr = str.toLowerCase()
  let vowel = ["a","e","i","o","u"];
  if(vowel.includes(newStr)){
    return true;
  } else {
    return false;
  }
}
// console.log(isVowel("l"))


//
// Write a function getTwoLengths that accepts two parameters (strings).
//  The function should return an array of numbers where each number is the length of
//   the corresponding string.

function getTwoLengths(str, str1){
  let result = [];
  result.push(str.length, str.length)
  return result;
}

//console.log(getTwoLengths("hank","hell"))

// Write a function getMultipleLengths that accepts a single parameter as an argument: an array
// of strings. The function should return an array of numbers where each number is the length of
// the corresponding string.

function getMultipleLenth(str){
  let result = [];
  for(let i = 0; i < str.length; i++){
    result.push(str[i].length)
  }
  return result
}
// console.log(getMultipleLenth(["hell","hello","he"]))

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
// If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are
// the same, one of them should be returned.

function maxOfThree(num1, num2, num3){
  let allNum = [ num1 , num2, num3]
  let result = allNum.sort();
  return result[result.length-1]
}
//console.log(maxOfThree(8,7,4))


// Write a function printLongestWord that accepts a single argument, an array of strings.
// The method should return the longest word in the array. In case of a tie, the method should
// return the word that appears first in the array.

function printLongestWord(arrString){
  let result = '';
  for(let i = 0; i < arrString.length; i++){
    if(result.length <= arrString[i].length){
      result = arrString[i]
    }
  }
  return result;
}

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]))


// Write a Javascript function called transmogrify. This function should accept three arguments,
//  which you can assume will be numbers. Your function should return the "transmogrified" result.
// The transmogrified result of three numbers is the product of the first two numbers,
//  raised to the power of the third number.
// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

function transmogrify(num1, num2, num3){
  let multiply = (num1 * num2)
  return Math.pow(multiply,num3)
}

//console.log(transmogrify(5,3,2))


// Without using .split(), .reverse(), or .join(), write a function reverseWordOrder
//  that accepts a single argument, a string. The function should return a string with the order
//   of the words reversed. Don't worry about punctuation.


function reverseWordOrder(string){
  let words = []
  let newStr = ""
  for(let i = 0; i < string.length; i++){
    newStr += string[i];
    if(string[i] == " "){
      words.unshift(newStr)
      newStr = "";
    }
  }
  if(newStr.length > 0){
    words.unshift(newStr)
  }
  let newResult = ""
  for(let j = 0; j < words.length; j++){
    newResult += words[j] + " ";
  }
  return newResult
}



 console.log(reverseWordOrder("omay jen sam"))

// Write a function that will return a random integer between 1 and 10. Test it.
// Write a function that will return a random integer between 10 and 100. Test it.
// Write a function that will return a random number between 532 and 13267. Test it.
// Write a function that will return a random number between 1 and 10. Test it.
// Add a few more quotes to the quotes array from question III-B-1 above. Write a function
//  that will take an array as a parameter, and return a random element from that array.
//  Call your function a few times, passing in the quotes array. Give it a nice semantic name
//  like getRandomElement.


function randomOne(){
  return Math.ceil(Math.random()* 10)
}
//console.log(randomOne())

function randomTen(){
  return Math.floor(Math.random() * 91) + 10
}
//console.log(randomTen())

function randomFive(){
  return Math.floor(Math.random() * 12736 ) + 532
}
// console.log(randomFive())

function randomOneAgain(){
  return Math.ceil(Math.random()* 10)
}
// console.log(randomOneAgain())

function getRandomElem(stringArr){
  let result = "";
  for(let i = 0; i < stringArr.length; i++){
    result = stringArr[Math.floor(Math.random()*stringArr.length)]
  }
  return result;
}

// console.log(getRandomElem(quotes))

// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased.
// Set the value of purchased to an empty array []. Set the other values to whatever you would like.

const user = {
  name: "jomar",
  email: "sample@gmail.com",
  age: 25,
  purchased: []
}

// Our user has changed his or her email address. Without changing the original user object,
// update the email value to a new email address.
// Our user has had a birthday! Without changing the original user object, increment the age
// value using the postfix operator. Hint: age++

user.email = "new@gmail.com"
user.age++
// console.log(user)


// Without changing the original user object, add a new key location to the object, and give it
// a value or some-or-other location (a string).
user.location = "GA DTLA";
//console.log(user)


// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(),
// add the string "carbohydrates" to the purchased array.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(),
// add the string "peace of mind" to the purchased array.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(),
// add the string "Merino jodhpurs" to the purchased array.
// Console.log just the "Merino jodhpurs" from the purchased array.


user.purchased.push("carbohydrates")
user.purchased.push("peace of mind")
user.purchased.push("merino jodhpurs")

//console.log(user.purchased[2])


// Write a friend object into your user object and give the friend a name, age, location, and
// purchased array (empty for now)
// Console.log just the friend's name
// Console.log just the friend's location
// CHANGE the friend's age to 55
// The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's
// purchased array.
// The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
// Console.log just "A latte" from the friend's pur

user.friend = {
  name: "tom",
  age: 12,
  location: "SF",
  purchased: []
};

// console.log(user.friend.name)
// console.log(user.friend.age)

user.friend.age = 55;
user.friend.purchased.push("the one ring");
user.friend.purchased.push("a latte");
// console.log(user.friend.purchased[1])

// Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), a
// nd prints each element to the console.
// Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.

for(let i = 0; i <user.purchased.length; i++){
  // console.log(user.purchased[i])
}

for(let i = 0; i < user.friend.purchased.length; i++){
  // console.log(user.friend.purchased[i])
}


// Write a single function updateUser that takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.
//
// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of
// hard-coding it to only work on our user object, make it take a parameter person, and have it
// modify the object that is passed in as an argument when the function is called. Call your
// oldAndLoud function with user as the argument.

function updateUser(){
  user.age++
  user.name = user.name.toUpperCase()
}

// updateUser()
// console.log(user.age, user.name)

function oldAndLoud(person){
  person.age++;
  person.name = person.name.toUpperCase()
}

// oldAndLoud(user)
// console.log(user.name, user.age)
