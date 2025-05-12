/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Syd Lyle
   Date: May 2025
*/

// add button to each section
$("#challenge").append("<button class='btn btn-secondary highlight-button'>Toggle Highlight</button>");
$("#problems").append("<button class='btn btn-secondary highlight-button'>Toggle Highlight</button>");
$("#reflection").append("<button class='btn btn-secondary highlight-button'>Toggle Highlight</button>");
$("#results").append("<button class='btn btn-secondary highlight-button'>Toggle Highlight</button>");

// add a click listener to the challenge button
$(".highlight-button").click(function(){
  $(this).parent().toggleClass("special");
})
