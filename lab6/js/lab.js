// index.js - purpose and description here
// Author: Syd Lyle
// Date:April 2025

// define variables

myTransport = ["Chevrolet Bolt" , " bus" , " walking"];

//create object
var myMainRide = {
  make: "Chevrolet",
  model: "Bolt", 
  color: "Arctic blue",
  year: "2018",
  age: function() {
      return 2025 - this.year;
  }
}
//output
document.writeln("kinds of transportation I use: ", myTransport , "<br>");
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");