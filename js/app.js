'use strict';

/*
About Courtney

Add 6th question: "How many days has Courtney gone without a shower? You have four tries to get it right!
Alert "too high" and "too low"
4 tries after all attempts, provide correct answer
While loop?

Add 7th question: "Can you name one of the 20 countries (outside the U.S.) that Courtney has traveled to? You have 6 attempts at a correct answer."
6 attempts, then display possible answers
Array loop?

Keep track of correct answers, at the end, tell them how many (out of 7) they got right.
*/

var userName = prompt('What\'s your preferred name?');

// // ============for fun greeting at the bottom of the page============
// var today = new Date();
// var hourNow = today.getHours();
// var greeting;

// if (hourNow > 18) {
//   greeting = 'Buonasera, ';
// } else if (hourNow > 12) {
//   greeting = 'Buon pomeriggio, ';
// } else if (hourNow > 0) {
//   greeting = 'Buongiorno, ';
// } else {
//   greeting = 'Bienvenuto, ';
// }
// //============welcome to the page============
// alert('Welcome to my page, ' + userName + ', let\'s see how much you already know about Courtney...');
// document.write('<h2>' + greeting + userName + '! </h2>');

// //============question 1============
// var twinYN = prompt('Does Courtney have a twin? (yes or no)').toLowerCase();

// if (twinYN === 'yes' || twinYN === 'y') {
//   // console.log ('twin answer: correct');
//   alert('You\'re right, she IS a twin!');
// } else if (twinYN === 'no' || twinYN === 'n') {
//   // console.log('twin answer: incorrect');
//   alert('Wrong, she IS a twin.');
// } else {
//   // console.log('twin answer: invalid answer');
//   alert('This is a y or n question. For your information, she IS a twin.');
// }

// //============question 2============
// var twinType= prompt('Now that you know, tell me..identical or fraternal twin?').toLowerCase();

// if (twinType === 'identical') {
//   // console.log ('twin type: correct');
//   alert('Correct! Courtney\'s an identical twin (also known as monozygous).');
// } else if (twinType === 'fraternal') {
//   // console.log('twin answer: incorrect');
//   alert('Incorrect. Courtney is an IDENTICAL twin. Fun fact: fraternal twins are known as "dizygous twins."');
// } else {
//   // console.log('twin type: invalid answer');
//   alert('Double check your spelling next time, whatever that was, it wasn\'t right. Courtney is an identical twin.');
// }

// //============question 3============
// var jokeYN= prompt('Does she like bad jokes? (yes or no)').toLowerCase();

// if (jokeYN === 'yes' || jokeYN === 'y') {
//   // console.log ('bad jokes: correct');
//   alert('Like them? More like LOVES them!');
// } else if (jokeYN === 'no' || jokeYN === 'n') {
//   // console.log('bad jokes: incorrect');
//   alert('For better or for worse, I\'m embarassed to say she LOVES them.');
// } else {
//   // console.log('bad jokes: invalid answer');
//   alert('Invalid input - you were supposed to write yes or no. As for bad jokes? She LOVES \'em.');
// }

// //============question 4============
// var kidsYN= prompt('Does Courtney have kids (yes or no)?').toLowerCase();

// if (kidsYN === 'yes' || kidsYN === 'y') {
//   // console.log ('kids: correct');
//   alert('Indeed she does! She has a 12-year-old daugher and a 9-year-old son.');
// } else if (kidsYN === 'no' || kidsYN === 'n') {
//   // console.log('kids: incorrect');
//   alert('She has two kids, in fact. A 9-year-old son and a 12-year-old daughter.');
// } else {
//   // console.log('kids: invalid answer');
//   alert('It was a simple yes or no. If you\'re curious, she has two.');
// }

// //============question 5============
// var codeYN= prompt('Last one: can Courtney code? (yes or no)').toLowerCase();

// if (codeYN === 'yes' || codeYN === 'y') {
//   // console.log ('but can she code?: correct');
//   alert('DANG STRAIGHT SHE CAN - like a MOTHER! ' + userName + ', you must know her well!');
// } else if (codeYN === 'no' || codeYN === 'n') {
//   // console.log('but can she code?: incorrect');
//   alert(userName + ', really? OF COURSE SHE CAN!');
// } else {
//   // console.log('but can she code?: invalid answer');
//   alert('Was a "y" or "n" too difficult? C\'mon, ' + userName + ', you\'re better than that! For the record, Courtney can code LIKE A MOTHER!');
// }

// //============question 6============
// //special thanks to Matt Herriges and Richard Lee for help here
var triesShowerDays = 0;
var guessShowerDays;
var answerShowerText = 'Courtney actually went 28 days without a shower while on a backpacking expedition through the North Rim of the Grand Canyon. Gross, I know.';

while (triesShowerDays < 4 && guessShowerDaysAsANumber !== 28){
  var attemptsLeft = 4 - triesShowerDays;
  guessShowerDays = prompt('What\'s the record number of days Courtney\'s ever gone without a shower? Attempts left: ' +attemptsLeft);
  var guessShowerDaysAsANumber = parseInt (guessShowerDays);
  if (guessShowerDaysAsANumber === 28){
    alert('WOW - you got it right, ' + userName + '! Yes, ' + answerShowerText);
  } else if (guessShowerDaysAsANumber >= 29 && guessShowerDaysAsANumber < 34) {
    alert('You\'re just a little high.');
  } else if (guessShowerDaysAsANumber >= 34) {
    alert('Ew, no. Not THAT long. You\'ve guessed way too high');
  } else if (guessShowerDaysAsANumber < 28 && guessShowerDaysAsANumber > 21){
    alert('You\'re just a tad low.');
  } else if (guessShowerDaysAsANumber <= 21){
    alert('Nuh uh. It was WAY longer than that.');
  } else {
    alert('C\'mon! Guess a number!');
  }
  triesShowerDays++;
  console.log(triesShowerDays);
}
if (triesShowerDays === 4 && guessShowerDaysAsANumber !== 28){
  alert('I\'m sorry, ' + userName + ', you\'ve exhausted your guesses. ' + answerShowerText);
}

