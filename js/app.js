'use strict';
var correctAnswer = 0;
var ageans = prompt(' am i a 25 years old ').toLowerCase();

var whatToPrint = '';

if (ageans === 'y' || ageans === 'yes') {
  alert('your answer was right :) I am 25 years old');
  correctAnswer++;
  whatToPrint = '<p> am i a 25 years old ? </P><br> <p> your answer : </p> <p style="color:green;">' + ageans + '</p>';
}
else {
  alert('your answer was worng :( I am 25 years old');
  whatToPrint = '<p> am i a 25 years old ? </P><br> <p> your answer : </p> <p style="color:red;">' + ageans + '</p>';
}
document.write(whatToPrint);
var aians = prompt(' can i use AI ').toLowerCase();


if (aians === 'n' || aians === 'no') {
  alert('your answer was right :) I can\'t ');
  correctAnswer++;
  whatToPrint = '<p> can i use AI  ? </P><br> <p> your answer : </p> <p style="color:green;">' + aians + '</p>';
} else {
  alert('your answer was worng :( I can\'t');
  whatToPrint = '<p> can i use AI  ? </P><br> <p> your answer : </p> <p style="color:red;">' + aians + '</p>';
}
document.write(whatToPrint);
var ardans = prompt(' can i programe arduino ').toLowerCase();


if (ardans === 'y' || ardans === 'yes') {
  alert('your answer was right :) I can');
  correctAnswer++;
  whatToPrint = '<p> can i programe arduino  ? </P><br> <p> your answer : </p> <p style="color:green;">' + ardans + '</p>';
} else {
  alert('your answer was worng :( I can');
  whatToPrint = '<p> can i programe arduino  ? </P><br> <p> your answer : </p> <p style="color:red;">' + ardans + '</p>';
}

document.write(whatToPrint);
var burans = prompt(' do I looooooove burger ').toLowerCase();


if (burans === 'y' || burans === 'yes') {
  alert('your answer was right :)I loooove it');
  correctAnswer++;
  whatToPrint = '<p>  do I looooooove burger ? </P><br> <p> your answer : </p> <p style="color:green;">' + burans + '</p>';
} else {
  alert('your answer was worng :( I loooooove it');
  whatToPrint = '<p>  do I looooooove burger ? </P><br> <p> your answer : </p> <p style="color:green;">' + burans + '</p>';
}

document.write(whatToPrint);
var sweet = prompt(' do i like sweet ').toLowerCase();


if (sweet === 'n' || sweet === 'no') {
  alert('your answer was right :) I dont like it');
  correctAnswer++;
  whatToPrint = '<p> do i like sweet ? </P><br> <p> your answer : </p> <p style="color:green;">' + sweet + '</p>';
} else {
  alert('your answer was worng :( I dont like it');
  whatToPrint = '<p> do i like sweet ? </P><br> <p> your answer : </p> <p style="color:red;">' + sweet + '</p>';
}
document.write(whatToPrint);
var userName = prompt(' what is your name ').toLowerCase();
alert('welcome to my page ' + userName);
whatToPrint = '<p> how much country i have been visited ? </P><br> <p> your answer : </p> >';
for (var i = 0; i < 4; i++) {
  var countryVisted = prompt(' how much country i have been visited  ');

  if (Number(countryVisted) === 9) {
    correctAnswer++;
    whatToPrint = whatToPrint + '<br>  <p style="color:green;">' + countryVisted + '</p>';
    break;
  }
  whatToPrint = whatToPrint + ' <br>  <p style="color:red;">' + countryVisted + '</p>';
  if (Number(countryVisted) < 9) {
    alert('too low');

  } else {
    alert('too high');
  }

}
document.write(whatToPrint);
alert('the right answer is 9');

var favFoods = ['mansaf', 'shawirma', 'burger', 'steak'];
var arrCorrect = false;
whatToPrint = '<p> What\'s my fav food? ? </P><br> <p> your answer : </p> >';
for (var c = 0; c < 6; c++) {
  var myFav = prompt('What\'s my fav food?').toLowerCase();
  for (var j = 0; j < favFoods.length; j = j + 1) {
    if (myFav === favFoods[j]) {
      arrCorrect = true;
      break;
    }
  }
  if (arrCorrect === true) {
    whatToPrint = whatToPrint + '<br>  <p style="color:green;">' + myFav + '</p>';
    correctAnswer++;
    break;
  }
  whatToPrint = whatToPrint + '<br>  <p style="color:red;">' + myFav + '</p>';

}
document.write(whatToPrint + '<br>');
alert('what i like is ' + favFoods);
alert('thank you ' + userName + ' to play this game . your scoure is (' + correctAnswer + '/7)');
document.write('<p> thank tou ' + userName + ' to play this game . your scoure is (' + correctAnswer + '/7) <p><br><br>');
