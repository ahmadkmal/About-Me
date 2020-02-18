'use strict';
var correctAnswer = 0;
// do {
var ageans = prompt(' am i a 25 years old ').toLowerCase();
// } while (ageans !== ('y')&&ageans !== ('yes')&&ageans !== ('n')&&ageans !== ('no'));

console.log(' the user answer was ' + ageans);

if (ageans === 'y' || ageans === 'yes') {
  alert('your answer was right :) I am 25 years old');
  correctAnswer++;
}
else {
  alert('your answer was worng :( I am 25 years old');
}


// do {
var aians = prompt(' can i use AI ').toLowerCase();

// } while (aians !== ('y') && aians !== ('yes') && aians !== ('n') && aians !== ('no'));

console.log(' the user answer was ' + aians);
if (aians === 'n' || aians === 'no') {
  alert('your answer was right :) I can\'t ');
  correctAnswer++;
} else {
  alert('your answer was worng :( I can\'t');
}

// do {
var ardans = prompt(' can i programe arduino ').toLowerCase();

// } while (ardans !== 'y' && ardans !== 'yes' && ardans !== 'n' && ardans !== 'no');

console.log(' the user answer was ' + ardans);
if (ardans === 'y' || ardans === 'yes') {
  alert('your answer was right :) I can');
  correctAnswer++;
} else {
  alert('your answer was worng :( I can');
}


// do {
var burans = prompt(' do I looooooove burger ').toLowerCase();

// } while (burans !== 'y' & burans !== 'yes' & burans !== 'n' & burans !== 'no');

console.log(' the user answer was ' + burans);
if (burans === 'y' || burans === 'yes') {
  alert('your answer was right :)I loooove it');
  correctAnswer++;
} else {
  alert('your answer was worng :( I loooooove it');
}


// do {
var sweet = prompt(' di i like sweet ').toLowerCase();

// } while (sweet !== 'y' & sweet !== 'yes' & sweet !== 'n' & sweet !== 'no');

console.log(' the user answer was ' + sweet);
if (sweet === 'n' || sweet === 'no') {
  alert('your answer was right :) I dont like it')
  correctAnswer++;
} else {
  alert('your answer was worng :( I dont like it');
}

var userName = prompt(' what is your name ').toLowerCase();
alert('welcome to my page '+ userName);

for(var i = 0 ; i <4 ; i++){
  var countryVisted = prompt(' how much country i have been visites  ');
  if (countryVisted === '9'){
    correctAnswer++;
    break;
  }
  if(countryVisted<9)
  {
    alert('too low');

  }else{
    alert('too low');
  }

}
alert('the right answer is 9');

var favFoods = ['mansaf' , 'shawirma' , 'burger' , 'steak'];
var arrCorrect = false;

for(var c = 0; c <6 ; c++){
  var myFav = prompt('What\'s my fav food?').toLowerCase();
  for(var j = 0; j < favFoods.length ; j = j+1){
    if(myFav === favFoods[j]){
    //   console.log('yes you are True !');
      arrCorrect= true;
      console.log('it' + j + 'index');
      break;
    }else{
      console.log('Not '+j+'idex');
    }
  }
  if(arrCorrect === true){
    correctAnswer++;
    break;
  }

}
alert('what i like is '+ favFoods);
alert('thank you '+userName+' to play this game . your scoure is ('+correctAnswer+'/7)')

