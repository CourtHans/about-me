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
// ====================Global Variables=======================

var userName = prompt('What\'s your preferred name?');
var finalScore; //for final tally
var qTwin = 1;
var qTwinType = 1;
var qJoke = 1;
var qSummit = 1;
var qCode = 1;

//====================welcome to the page===================
alert('Welcome to my page, ' + userName + ', let\'s see how much you already know about Courtney...');


//========================question 1 - twin========================
function askTwinQuestion(){
  var twinYN = prompt('Does Courtney have a twin? (yes or no)').toLowerCase();

  if (twinYN === 'yes' || twinYN === 'y') {
    alert('You\'re right, she IS a twin!');
  // console.log ('Q1 (twin?): correct ' + qTwin + ' point');
  } else if (twinYN === 'no' || twinYN === 'n') {
    alert('Wrong, she IS a twin.');
    qTwin = 0;
  // console.log('Q1 (twin?): incorrect ' + qTwin + ' points');
  } else {
    alert('This is a y or n question. For your information, she IS a twin.');
    qTwin = 0;
  // console.log('Q1 (twin?): invalid answer ' + qTwin + ' points');
  }
}
askTwinQuestion();
//========================question 2 - twin type========================
function askTwinTypeQuestion(){
  var twinType= prompt('Now that you know, tell me...identical or fraternal twin?').toLowerCase();

  if (twinType === 'identical') {
    alert('Correct! Courtney\'s an identical twin (also known as monozygous).');
  // console.log ('Q2 (ident/frat?): correct ' + qTwinType + ' point');
  } else if (twinType === 'fraternal') {
    alert('Incorrect. Courtney is an IDENTICAL twin. Fun fact: fraternal twins are known as "dizygous twins."');
    qTwinType = 0;
  // console.log('Q2 (ident/frat?): incorrect ' + qTwinType + ' points');
  } else {
    alert('Double check your spelling next time, whatever that was, it wasn\'t right. Courtney is an identical twin.');
    qTwinType = 0;
  // console.log('Q2 (ident/frat?): invalid answer ' + qTwinType + ' points');
  }
}
askTwinTypeQuestion();
//========================question 3 - joke ========================
function askJokeQuestion(){
  var jokeYN= prompt('Does she like bad jokes? (yes or no)').toLowerCase();

  if (jokeYN === 'yes' || jokeYN === 'y') {
    alert('Like them? More like LOVES them!');
  // console.log ('QJoke (bad jokes?): correct ' + qJoke + ' point');
  } else if (jokeYN === 'no' || jokeYN === 'n') {
    alert('For better or for worse, I\'m embarrassed to say she LOVES them.');
    qJoke = 0;
  // console.log('QJoke (bad jokes?): incorrect ' + qJoke + ' points');
  } else {
    alert('Invalid input - you were supposed to write yes or no. As for bad jokes? She LOVES \'em.');
    qJoke = 0;
  // console.log('QJoke (bad jokes?): invalid answer ' + qJoke + ' points');
  }
}
askJokeQuestion();
//========================question 4 - summit========================
function askSummitQuestion(){
  var summitYN= prompt('Has Courtney summitted Mt. Kilamanjaro? (yes or no)?').toLowerCase();

  if (summitYN === 'no' || summitYN === 'n') {
    alert('You\'re right, she hasn\'t climbed Africa\'s tallest peak yet - but she hopes to soon!');
  // console.log ('qSummit (summit?): correct ' + qSummit + ' point');
  } else if (summitYN === 'yes' || summitYN === 'y') {
    alert('Wrong. (But she wishes this were true.)');
    qSummit = 0;
  // console.log('qSummit (summit?): incorrect ' + qSummit + ' points');
  } else {
    alert('It was a simple yes or no. If you\'re curious, she hasn\'t yet summited Mt. Kilamajaro - but she hopes to one day!');
    qSummit = 0;
  // console.log('qSummit (summit?): invalid answer ' + qSummit + ' points');
  }
}
askSummitQuestion();
//========================question 5 - code ========================
function askCodeQuestion(){
  var codeYN= prompt('Next up: can Courtney code? (yes or no)').toLowerCase();

  if (codeYN === 'yes' || codeYN === 'y') {
    alert('DANG STRAIGHT SHE CAN - like a MOTHER! ' + userName + ', you must know her well!');
  // console.log ('qCode (code?): correct ' + qCode + ' point');
  } else if (codeYN === 'no' || codeYN === 'n') {
    alert(userName + ', really? OF COURSE SHE CAN!');
    qCode = 0;
  // console.log('qCode (code?): incorrect ' + qCode + ' points');
  } else {
    alert('Was a "y" or "n" too difficult? C\'mon, ' + userName + ', you\'re better than that! For the record, Courtney can code LIKE A MOTHER!');
    qCode = 0;
  // console.log('qCode (code?): invalid answer ' + qCode + ' points');
  }
}
askCodeQuestion();
//========================question 6 - shower========================
//special thanks to Matt Herriges and Richard Lee for help here
var triesShowerDays = 0;
var guessShowerDays;
var answerShowerText = 'Courtney actually went 28 days without a shower while on a backpacking expedition through the North Rim of the Grand Canyon. Gross, I know.';

while (triesShowerDays < 4 && guessShowerDaysAsANumber !== 28){
  var attemptsLeft = 4 - triesShowerDays;
  guessShowerDays = prompt('What\'s the record number of days Courtney\'s ever gone without a shower? (attempts left: ' +attemptsLeft + ')');
  var guessShowerDaysAsANumber = parseInt (guessShowerDays);
  if (guessShowerDaysAsANumber === 28){
    alert('WOW - you got it right, ' + userName + '! Yes, ' + answerShowerText);
    var qShower = 1;
    // console.log ('qShower (shower?): correct ' + qShower + ' point: ' + triesShowerDays + ' attempt(s)');
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
}
if (triesShowerDays === 4 && guessShowerDaysAsANumber !== 28){
  alert('I\'m sorry, ' + userName + ', you\'ve exhausted your guesses. ' + answerShowerText);
  qShower = 0;
  // console.log('qShower (shower?): incorrect ' + qShower + ' points: ' + triesShowerDays + ' attempt(s)');
}

//========================question 7 - country========================
var countryArray = ['australia', 'austria', 'belgium', 'canada', 'chile', 'czech republic', 'czechrepublic', 'france', 'germany', 'hungary', 'iceland', 'indonesia', 'ireland', 'italy', 'luxembourg', 'mexico', 'netherlands', 'new zealand', 'newzealand', 'norway', 'peru', 'spain', 'united kingdom', 'unitedkingdom', 'vietnam'];
var guessAttempts = 0;

for (var guess = 0; guess < 6; guess++){
  var countryAttemptsLeft = 6 - guessAttempts;
  var countryAnswer = prompt('Guess a country (outside the U.S.) that Courtney\'s been to? (attempts left: ' + countryAttemptsLeft + ')').toLowerCase();

  if (countryAnswer === countryArray[0] || countryAnswer === countryArray[1] || countryAnswer === countryArray [2] || countryAnswer === countryArray[3] || countryAnswer === countryArray[4] || countryAnswer === countryArray[5] || countryAnswer === countryArray[6] || countryAnswer === countryArray[7] || countryAnswer === countryArray[8] || countryAnswer === countryArray[9] || countryAnswer === countryArray[10] || countryAnswer === countryArray[11] || countryAnswer === countryArray[12] || countryAnswer === countryArray[13] || countryAnswer === countryArray[14] || countryAnswer === countryArray[15] || countryAnswer === countryArray[16] || countryAnswer === countryArray[17] || countryAnswer === countryArray[18] || countryAnswer === countryArray[19] || countryAnswer === countryArray[20] || countryAnswer === countryArray[21]){
    alert('Yes! That is one of the 22 countries Courtney has been to! In case you\'re curious, here\'s the full list: Australia, Austria, Belgium, Canada, Czech Republic, France, Germany, Hungary, Iceland, Indonesia, Ireland, Italy, Luxembourg, Mexico, Netherlands, New Zealand, Norway, Spain, United Kingdom, and Vietnam.');
    var qCountry = 1;
    // console.log ('QCountry (country?): correct ' + qCountry + ' point: ' + guessAttempts + ' attempt(s)');
    break;
  } else {
    alert('Nope, she hasn\'t been there...yet.');
    qCountry = 0;
  }

  guessAttempts++;
}
if (guessAttempts === 6){
  alert('Wow. Courtney\'s been to 22 countries, and you couldn\'t guess one? Here\'s the full list: Australia, Austria, Belgium, Canada, Czech Republic, France, Germany, Hungary, Iceland, Indonesia, Ireland, Italy, Luxembourg, Mexico, Netherlands, New Zealand, Norway, Spain, United Kingdom, and Vietnam.');
  // console.log('QCountry (country?): incorrect ' + qCountry + ' points: ' + guessAttempts + ' attempt(s)');
}
//========================final tally========================
finalScore = qTwin + qTwinType + qJoke + qSummit + qCode + qShower + qCountry;

if (finalScore >= 6){
  alert('Wow ' + userName + ', you scored ' + finalScore + ' out of 7 - GREAT job!');
} else if (finalScore < 6 && finalScore >= 4){
  alert('You scored ' + finalScore + ' out of 7. Mediocre job, ' + userName + '.');
} else {
  alert('Hate to break it to you, ' + userName + ', but you got ' + finalScore + ' out of 7 right. Ah well, growth mindset, right?');
  // console.log('final score: ' + finalScore);
}

// ========for fun greeting and score at the bottom of the page=========
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

document.write('<h2>' + greeting + userName + '! Your final score was ' + finalScore + '/7.</h2>');

// ========Function Invocations=========


