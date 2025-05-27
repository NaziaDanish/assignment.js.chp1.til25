//Alert
alert('Hello Nazia Mansoor, welcome to JavaScript!');

alert('Welcome Umair Ali! Enjoy learning JS.');

//this is prompt
var userName = prompt('What is your name?');
alert('Hi ' + userName);

var yourName = prompt('Enter your name');
console.log('Hello ' + yourName);

//this is variable declaration
var studentName = 'Mehwish Zarar';
console.log(studentName);

var fullName = 'Sehrish Farhan';
console.log('Student: ' + fullName);

//this is arithmatic operation
var a = 5, b = 10;
var sum = a + b;
console.log(sum);

var x = 7;
var y = 3;
console.log('Product: ' + (x * y));

//this is string concatenation
var firstName = 'Yusra';
var lastName = 'Ali';
console.log(firstName + ' ' + lastName);

var intro = 'Hi, I am ';
var userName = 'Sidra Salman';
console.log(intro + userName);

//this is boolean value
var isStudent = true;
console.log('Is student: ' + isStudent);

var isGraduated = false;
console.log('Is graduated: ' + isGraduated);

//if condition
var marks = 70;
if(marks > 60){
  console.log('Passed');
}

var age = 20;
if(age >= 18){
  console.log('Adult');
}

//this is else condition
var score = 40;
if(score >= 50){
  console.log('Pass');
} else {
  console.log('Fail');
}

var age = 16;
if(age >= 18){
  console.log('Eligible');
} else {
  console.log('Not eligible');
}

//this is else if condition
var temperature = 30;
if(temperature > 30){
  console.log('Hot');
}else if(temperature > 20){
  console.log('Warm');
}else {
  console.log('Cold');
}

var marks = 85;
if(marks >= 90){
  console.log('Grade A');
  } else if(marks >= 80){
  console.log('Grade B');
}
else if(marks >= 70){
  console.log('Grade C');
}else {
  console.log('Grade D');
}

//this is comparison operators
var x = 10, y = 15;
console.log(x < y);

var a = 20, b = 20;
console.log(a === b);

var c = 30, d = 25;
console.log(c !== d);

var e = 50, f = 50;
console.log(e >= f);

var g = 5, h = 10;
console.log(g <= h);

//this is logical operators
var isAdult = true, hasID = false;
if(isAdult && hasID){
  console.log('Allowed');
}

var hasTicket = true;
var seatAvailable = true;
if(hasTicket && seatAvailable){
  console.log('You can enter');
}
 
//this is switch statement
var day = 'Monday';
switch(day){
  case 'Monday': console.log('Start of week'); break;
}

var fruit = 'Apple';
switch(fruit){
  case 'Apple': console.log('It is red'); break;
  case 'Banana': console.log('It is yellow'); break;
}
  
//this is for loop
for(var i = 0; i < 5; i++){
  console.log('Count: ' + i);
}

for(var j = 1; j <= 10; j++){
  console.log('Number: ' + j);
}

//this is while loop
var count = 0;
while(count < 5){
  console.log('Count: ' + count);
  count++;
}

var num = 1;
while(num <= 10){
  console.log('Number: ' + num);
  num++;
}

//this is do while loop
var index = 0;
do{
  console.log('Index: ' + index);
  index++;
}while(index < 5);

var n = 1;
do{
  console.log('Value: ' + n);
  n++;
  }while(n <= 10);

  //this is array declaration
var fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits);

var numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//this is object declaration
var person = {
  name: 'Ali',
  age: 25,
  city: 'Karachi'
};
console.log(person);

var car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020
};
console.log(car);


//this is function declaration
function greet(name) {
  console.log('Hello ' + name);
}
//this is function expression
var sayHello = function(name) {
  console.log('Hi ' + name);
};
