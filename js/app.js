    'use strict'

    do {
        var ageans = prompt(" am i a 25 years old ").toLowerCase();
    } while (ageans !== ("y")&&ageans !== ("yes")&&ageans !== ("n")&&ageans !== ("no"));

console.log(" the user answer was " + ageans);

if (ageans == "y" || ageans == "yes") {
    alert("your answer was right :) I am 25 years old");
}
else {
    alert("your answer was worng :( I am 25 years old");
}


        do {
            var aians = prompt(" can i use AI ").toLowerCase();

        } while (aians !== ("y") && aians !== ("yes") && aians !== ("n") && aians !== ("no"));

console.log(" the user answer was " + aians);
if (aians == "n" || aians == "no") {
    alert("your answer was right :) I can't ");
} else {
    alert("your answer was worng :( I can't");
}

do {
    var ardans = prompt(" can i programe arduino ").toLowerCase();

} while (ardans !== "y" && ardans !== "yes" && ardans !== "n" && ardans !== "no");

console.log(" the user answer was " + ardans);
if (ardans == "y" || ardans == "yes") {
    alert("your answer was right :) I can");
} else {
    alert("your answer was worng :( I can");
}


do {
    var burans = prompt(" do I looooooove burger ").toLowerCase();

} while (burans !== "y" & burans !== "yes" & burans !== "n" & burans !== "no");

console.log(" the user answer was " + burans);
if (burans == "y" || burans == "yes") {
    alert("your answer was right :)I loooove it")
} else {
    alert("your answer was worng :( I loooooove it");
}


do {
    var sweet = prompt(" di i like sweet ").toLowerCase();

} while (sweet !== "y" & sweet !== "yes" & sweet !== "n" & sweet !== "no");

console.log(" the user answer was " + sweet);
if (sweet == "n" || sweet == "no") {
    alert("your answer was right :) I dont like it")
} else {
    alert("your answer was worng :( I dont like it");
}

var name = prompt(" what is your name ").toLowerCase();
alert("welcome to my page "+ name);
