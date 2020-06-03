'use strict';

/*
About Courtney

Ask user his/her name through prompt()
Display username back through customized greeting
Display user name back in final message to user

Does Courtney have an identical twin?
Is she an identical or fraternal twin?
Does Courtney love bad jokes?
Does Courtney have kids?
Does Courtney know how to write wicked good code?
How old is Courtney? (just for fun)
*/

  var userName = prompt('What\'s your preferred name?');

  //for fun greeting at the bottom of the page
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;

  if (hourNow > 18) {
    greeting = 'Buonasera, ';
  } else if (hourNow > 12) {
    greeting = 'Buon pomeriggio, ';    
  } else if (hourNow > 0) {
    greeting = 'Buongiorno, ';
  } else {
    greeting = 'Bienvenuto, ';
  }
  //welcome to the page
  alert('Welcome to my page, ' + userName + ', let\'s see how much you already know about Courtney...');
  console.log('user\'s name is:', userName);
  document.write('<h2>' + greeting + userName + '! </h2>');
  
  //question 1
  var twinYN = prompt('Does Courtney have a twin? Please answer "Y" or "N"!').toLowerCase();

  if (twinYN === 'y') {
    // console.log ('twin answer: correct');
    alert('You\'re right, she IS a twin!');
  } else if (twinYN === 'n') {
    // console.log('twin answer: incorrect');
    alert('Wrong, she IS a twin.');
  } else {
    // console.log('twin answer: invalid answer');
    alert('This is a y or n question.');
  }
  
  //question 2
  var twinType= prompt('Now that you know, tell me..identical or fraternal twin?').toLowerCase();

  if (twinType === 'identical') {
    // console.log ('twin type: correct');
    alert('Correct! Courtney\'s an identical twin (also known as monozygous).');
  } else if (twinType === 'fraternal') {
    // console.log('twin answer: incorrect');
    alert('Incorrect. Courtney is an IDENTICAL twin. Fun fact: fraternal twins are known as "dizygous twins."');
  } else {
    // console.log('twin type: invalid answer');
    alert('Double check your spelling next time, whatever that was, it wasn\'t right. Courtney is an identical twin.');
  }

  //question 3
  var jokeYN= prompt('Does she like bad jokes? (Y/N)').toLowerCase();

  if (jokeYN === 'yes' || jokeYN === 'y') {
    // console.log ('bad jokes: correct');
    alert('Like them? More like LOVES them!');
  } else if (jokeYN === 'no' || jokeYN === 'n') {
    // console.log('bad jokes: incorrect');
    alert('For better or for worse, I\'m embarassed to say she LOVES them.');
  } else {
    // console.log('bad jokes: invalid answer');
    alert('Invalid input - you were supposed to write yes or no. As for bad jokes? She LOVES \'em.');
  }
  
  //question 4
  var kidsYN= prompt('Does Courtney have kids? Reminder - answer "Y" or "N"').toLowerCase();

  if (kidsYN === 'yes' || kidsYN === 'y') {
    // console.log ('kids: correct');
    alert('Indeed she does! She has a 12-year-old daugher and a 9-year-old son.');
  } else if (kidsYN === 'no' || kidsYN === 'n') {
    // console.log('kids: incorrect');
    alert('She has two kids, in fact. A 9-year-old son and a 12-year-old daughter.');
  } else {
    // console.log('kids: invalid answer');
    alert('It was a simple yes or no. If you\'re curious, she has two.');
  }

  //question 5
  var codeYN= prompt('Last one: can Courtney code? (Y or N)').toLowerCase();

  if (codeYN === 'yes' || codeYN === 'y') {
    // console.log ('but can she code?: correct');
    alert('DANG STRAIGHT SHE CAN - like a MOTHER! ' + userName + ', you must know her well!');
  } else if (codeYN === 'no' || codeYN === 'n') {
    // console.log('but can she code?: incorrect');
    alert(userName + ', really? OF COURSE SHE CAN!');
  } else {
    // console.log('but can she code?: invalid answer');
    alert('Was a "y" or "n" too difficult? C\'mon, ' + userName + ', you\'re better than that! For the record, Courtney can code LIKE A MOTHER!');
  }
  
  //bonus question
  // var guessCourtneyAge = prompt('If you HAD to guess, how old (or young!) do you think Courtney is?')
  // var guessCourtneyAgeAsANumber = parseInt(guessCourtneyAge);

  // if (guessCourtneyAgeAsANumber > 39 && guessCourtneyAgeAsANumber < 49) {
  //   alert('You\'re pretty close, we\'ll call it good!');
  // } else if(guessCourtneyAgeAsANumber <= 39) {
  //   alert('Aren\'t you the flatterer?');
  // } else if (guessCourtneyAgeAsANumber >= 49){
  //   alert('Hmm, you think so? Guess I need a better skin care regimen. Noted.');
  // } else {
  //   alert('Age is just a number. So enter one, please.');
  // }