/**
 * Created by Alpha on 2014-12-02.
 */

var numberValue = 14;
var guess = prompt("guess the number?");
console.log(guess.numberValue);
if (numberValue == guess) {
    alert("correct" + "You are a champion")
}else if (numberValue > guess) {
    alert("False Answer");
    console.log("The number is higher");
} else {
    alert("false answer");
    console.log("the number is lower")
}