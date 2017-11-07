'use strict';

var apples = 14;
console.log(apples);
console.log('I have ' + apples + ' apples.');

var materials = ['wood', 'metal', 'stone'];
var words = {
  'elephant': "The world's largest animal.",
  'school': 'A place for learning.',
  'ice cream': 'A delicious milk based dessert.'
}

var num = 16;
if (num > 10) {
  console.log(num + ' is greater than 10.');
} else if (num === 10) {
  console.log(num + ' is exactly 10.');
} else {
  console.log(num + ' must be less than 10.');
}

for (var i = 0; i <= 10; i++) {
  console.log('Doing the same thing over and over.');
}

var base = 5;
var num = 0;
for (var i = 0; i <= 20; i ++) {
    num += base;
  console.log(num);
}

var total = 0;
var num = 0;
for (var i = 0; i <= 100; i++) {
  total += num;
}
console.log(total);

for (var height = 3; height <= 15; height++) {
  if (height > 9) {
    console.log('You can get on the rollercoaster!');
  } else {
    console.log('You are too short to ride the rollercoaster.');
  }
}

var containers = ['purse', 'wallet', 'backbelt'];
containers.forEach(function(container) {
  console.log(container);
})

function helloWorld() {
  console.log('Hello World');
}
helloWorld()

function add(firstNum, secondNum) {
  return firstNum + secondNum;
}
var amount = add(5, 7);
console.log(amount);
