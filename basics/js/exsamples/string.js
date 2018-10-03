/*
//String
var myString = "This is string.";
console.log(myString);

var addText = prompt("This text will be added to our string");
console.log(myString + " And this is your text: '" + addText + "'");

//The same with one line code:
console.log(myString.concat(" And this is your text: '" + prompt("This text will be added to our string") + "'"));
*/

//Strying Functions 
var example = "Testing string functions.";
console.log (example.charAt(0))                    
console.log (example.concat("concat exstra tekst"))
console.log (example.indexOf("g"))
console.log (example.substr(2,4)) 
console.log (example.substring(2,4)) 


//Numbers function
var a = Number("20");
var b = Number("You");
var c = Number(true);
var d = Number(false);
var e = parseInt(100.333)     //returns 100 - parseInt () function  - consider only the non fractional part
var f = parseFloat("10")      //returns 10 - parseFloat () function - convert string to number

console.log(a+" "+b+" "+c+" "+d+" "+e+" "+f);


