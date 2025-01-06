// import defaultExport from "./util.js";

// console.log(defaultExport);

// Variables - Data types
// let userMessage = "Hello World!";

// console.log(userMessage);
// console.log(userMessage);

// function greet() {
//   console.log("Hello World!");
// }

// greet();


// var a = 10;

// console.log(a);

// var a =20;

// console.log(a);

// ARROW FUNCTIONS

// export default (userName, message) => {
//   console.log(`${userName} says ${message}`);
// }

// ((nume, prenume) => {console.log(nume + prenume);})('Ion', 'Popescu');
// console.log(((number) => 2 * number)(10));

// console.log((() => ({ name: 'John'}))());

// let hello = name => {
//   console.log('Hello WWWWWWWWWWWW!');
// }
// hello();


// JS Objects

// const person = {
//   name:'Andrei',
//   age: 22,
//   education: {
//     degree: 'Masters',
//     school: 'Harvard',
//     isHardWorking: true,
//   },
//   friendList: ['John', 'Jane', 'Doe'],

//   showEducation(){
//     console.log(this.name + ' has a ' + this.education.degree + ' degree from ' + this.education.school);
//   },

//   showFriends(){
//     this.friendList.forEach(friend => {
//       console.log(friend);
//     });
//   }
// };

// person.showEducation();
// person.showFriends();
// console.log(person.education.isHardWorking !== undefined);

// //Classes

// class Array {
//   constructor(array, comparisonFunction = (a, b) => a > b){
//     this.array = array;
//     this.comparisonFunction = comparisonFunction;
//   }

//   showArray(){
//     console.log(this.array);
//   }

//   sortArray(){
//     for(let i = 0; i < this.array.length; i++){
//       for(let j = 0; j < this.array.length; j++){
//         if(this.comparisonFunction(this.array[j], this.array[j + 1])){
//           let temp = this.array[j];
//           this.array[j] = this.array[j + 1];
//           this.array[j + 1] = temp;
//         }
//       }
//     }
//   }
// }

// const array = new Array([5, 2, 4, 1, 3]);

// array.showArray();
// array.sortArray();
// array.showArray();



// Arrays & Array Methods like map()

// const animals = ['cat', 'cat', 'bird', 'fish'];
// const animals2 = ['rat', ...animals];
// console.log(animals2);

// const animalLogs = animals.map(animal => (() => console.log(animal)));
// console.log(animalLogs);
// animalLogs.forEach(log => log());

// console.log(animals);
// animals.push('rabbit');
// console.log(animals);

// const indexOfDog = animals.findIndex(animal => animal === 'cat');
// console.log(indexOfDog);

// // map
// const numbers = [1, 2, 3, 4, 5];

// const tripledNumbers = numbers.map(number => number * 3);
// console.log(tripledNumbers);

// const objNumbers = numbers.map((number) =>({number}));
// console.log(objNumbers);


// Destructuring


// const [firstName,, lastName] = ["Andrei", "Popescu","rata"];

// console.log(firstName, lastName);


// const person = {
//   name: 'Andrei',
//   age: 22,
//   education: {
//     degree: 'Masters',
//     school: 'Harvard',
//     isHardWorking: true,
//   },
//   friendList: ['John', 'Jane', 'Doe'],
// }


// const {name, age} = person;

// console.log(name, age);



//const password = prompt('Enter your password: ');


// const vegetables = ['carrot', 'potato', 'cucumber', 'onion'];

// for (const vegetable of vegetables){
//   console.log(vegetable);
// }


// vegetables.forEach(vegetable => console.log(vegetable));




// function handleTimeout(){
//   console.log('Timeout!');
// }

// const handleTimeout2 = () => {
//   console.log('Timeout! .. again');
// }

// setTimeout(handleTimeout, 2000);

// setTimeout(handleTimeout2, 2000);  




const caller = (bigCallback = () => {console.log("default big")}, smallCallback = () => {console.log("default small")}, decision) => {
  if(decision >= 50){
    bigCallback();
  }
  else{
    smallCallback();
  }
}

const BigCallback = () => {
  console.log('Big callback!');
}

const SmallCallback = () => {
  console.log('Small callback!');
}

caller(BigCallback, undefined, 49);



// Define function inside function

function outerFunction(){
  function innerFunction(){
    console.log('Inner function');
  }
  innerFunction();
}



// primitive vs reference types

let userMessage = 'hello';
userMessage = userMessage.concat(" world!");
console.log(userMessage);

// object and arrays are reference types

const hobbies = ['Sports', 'Cooking'];

hobbies.push('Reading');
console.log(hobbies);




class Individual{
  name = 'Max';
  age = 30;

  printDetails = () => {
    console.log(this.name + ' is ' + this.age + ' years old.');
  }
}

const person = new Individual();
person.printDetails();


class Animal{
  parentProperty = 'Parent property';
}

class Cat extends Animal{
  childProperty = 'Child property';
}

const personObject = {
  name: 'Andrei',
  age: 22,
}

const printFunction = ({name}) =>{
  console.log(name);
}

printFunction(personObject);


const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredArray = myArray.filter(number => number % 2 === 0);

console.log(filteredArray);

// reduce
const initialValue = 0;
const sum = myArray.reduce((acumulator, currentValue) => {console.log(acumulator);return acumulator + currentValue}, initialValue);