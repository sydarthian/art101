// index.js - Lab 7
// Author: Syd Lyle
// Date: April 2025


//get user input
function sortUserName () {
  var userName = window.prompt("hi, what's your name?");
  console.log("username =", userName);
  return userName.toLowerCase().split("").sort().join("");
}

//output
document.writeln("Nice to meet you, ", sortUserName (), "</br>", "That's not your name? Well, it is now.");