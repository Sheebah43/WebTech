console.log("Hello World!"); //statement
console.log("Is this even working???");
console.log("Well check the console, it surely is!");
// Using typeof 
let name = "meh"; //string
let age = 10; //number
let isAlive = false; //boolean
let recoveryChances = null; //object
let causeOfDeath = undefined; //undefined; here the type as well as the value is undefined
//Object
// let nameOfObject = {};....object literal
let winkies = {
    flavor:'Chocolate',
    cost: 30
};
console.log(winkies);
// Accessing object members -- 2 ways
//Dot Notation
winkies.flavor = "Red velvet"; //Altering a member
console.log(winkies.flavor);
//Bracket Notation
winkies['flavor']='Vanilla';
console.log(winkies['flavor']);
//BracketNotation is  useful when we don't know what property we'll be accessing
let selection = 'cost'; //can be given vy the user
winkies[selection]=30;
console.log(winkies.cost);
//Array
// typeof array -- object
let snacks = ["Juice", "Biscuit"]; //dynamic length
snacks[2] = "Chocolate"; //Accessing array 
console.log(snacks)
//Fun fact: Arrays in JS can hold distinct data type variable
snacks[2] = 264;
console.log(snacks)
//Functions
function display() {
    console.log("Hello World.");
}
display();

function greetings(name) {
    console.log("Hi! " + name);
}
greetings("Mehhh");
// It didn't differentiate b/w the functions with diffrent numbers of pararmeters 
function greet(firstName, lastName) {
    console.log("Hi! " + firstName + " "+ lastName);
}
greet("Mehhh","Blehhh");

function square (num){
    return num * num;
}
let number = square(4);
console.log(number);
console.log(square(2));
