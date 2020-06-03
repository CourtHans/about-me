'use strict';

/*
About Courtney

Ask user his/her name through prompt()
Display username back through customized greeting
Display user name back in final message to user

How old is Courtney? (just for fun)
Does Courtney have an identical twin?
Is she an identical or fraternal twin?
Does Courtney love bad jokes?
Does Courtney have kids?
Does Courtney know how to write wicked good code?
*/


  var userName = prompt('What\'s your preferred name?');

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
  
  alert('Welcome to my page, ' + userName + ', let\'s see how much you already know about Courtney...');
  console.log('user\'s name is:', userName);
  document.write('<h2>' + greeting + userName + '! </h2>');

//Not part of the assignment
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
  
  var twinYN = prompt('Does Courtney have a twin? Please answer "Y" or "N"!').toLowerCase();

  if (twinYN === 'y') {
    console.log ('twin answer: correct');
    alert('You\'re right, she IS a twin!');
  } else if (twinYN === 'n') {
    console.log('twin answer: incorrect');
    alert('Wrong, she IS a twin.');
  } else {
    console.log('twin answer: invalid answer');
    alert('This is a y or n question.');
  }
  
  var twinType= prompt('Now that you know, tell me..identical or fraternal twin?').toLowerCase();

  if (twinType === 'identical') {
    console.log ('twin type: correct');
    alert('Correct! Courtney\'s an identical twin (also known as monozygous).');
  } else if (twinType === 'fraternal') {
    console.log('twin answer: incorrect');
    alert('Incorrect. Courtney is an IDENTICAL twin. Fun fact: fraternal twins are known as "dizygous twins."');
  } else {
    console.log('twin type: invalid answer');
    alert('Double check your spelling next time, whatever that was, it wasn\'t right. Courtney is an identical twin.');
  }

