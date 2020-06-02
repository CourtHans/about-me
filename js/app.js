'use strict';

/*
About Courtney

Ask user his/her name through prompt()
Display username back through customized greeting
Display user name back in final message to user

How old is Courtney?
Does Courtney have an identical twin?
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
  
  alert('Welcome to my page, ' + userName + ', let\'s see how much you already know about me...');
  document.write('<h2>' + greeting + userName + '! </h2>');

  var guessCourtneyAge = prompt('If you HAD to guess, how old (or young!) do you think Courtney is?')
  var guessCourtneyAgeAsANumber = parseInt(guessCourtneyAge);

  if (guessCourtneyAgeAsANumber > 39 && guessCourtneyAgeAsANumber < 49) {
    alert('You\'re pretty close, we\'ll call it good!');
  } else if(guessCourtneyAgeAsANumber <= 39) {
    alert('Aren\'t you the flatterer?');
  } else if (guessCourtneyAgeAsANumber >= 49){
    alert('Hmm, you think so? Guess I need a better skin care regimen. Noted.');
  } else {
    alert('Age is just a number. So enter one, please.')
  }
  


