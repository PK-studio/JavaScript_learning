/*
var a = Number(prompt("Give me some number",""));
var b = document.getElementById("test");
b.style.fontSize = "35px";

if (a <= 5) {
    alert ("Its ok");
    b.innerHTML = "It is ok";
    b.style.color = "green";
} 
else {
    alert ("It is much");
    b.innerHTML = "It is too much";
    b.style.color = "red";
}
*/


/*
var allnames = ["Tom","John","Joe","Vicy","Tony"];
allnames.push(prompt("add new name", ""));
//   for (i=0; i<allnames.length; i++){
//  console.log ("This is " + allnames[i])
//  }
var i = 0;
while (i<allnames.length) {
    console.log ("test" + allnames[i])
    i++;
}
*/

/*IF... Else exercisess
//--------------------------------------------------------
var celc = Number(prompt("How many celsius is in a room"))
function Fahrenheit () {
    return (celc * (9/5)) + 32
}   
var calc = Fahrenheit();
if (calc < 40) {
    calc = calc + " Fahrenheits, " + "It is cold";
}else if(calc >= 40 && calc <= 80 ) {
    calc = calc + " Fahrenheits, " + "It is fine";
}else if(calc > 80) {
    calc = calc + " Fahrenheits, " + "Its to hot"
}

var replace = document.getElementById("test");
replace.innerHTML = calc;
replace.style.color = "green";
replace.style.fontSize = "50px";
*/

//dosent work if prompt is txt ("isNaN", "default - dosen't return ",)
//--------------------------------------------------------------------
// var name = prompt("Give me number from 1-3");
// while (name<=0 || name>=4) {
//     name = prompt("Wrong number, put number 1-3");
// } 
// switch(name){
//     case "1":
//       alert("Patryk is 1st");
//       break;
//     case "2":
//       alert("Tom is 2nd");
//       break;
//     case "3":
//       alert("Corey is 3rd"); 
// }


// var list = document.getElementById("newColor")
// list.onchange = newColor;
//     function newColor () {
// var header = document.getElementById("test");
// header.style.color = (list.value);
// }


// //function in function
// //---------------------
// function example (firstNumber){
//         function calc(){
//             var secoundNumber = Number(prompt(""));
//             return 10 * secoundNumber + firstNumber;
//         }

//     var name = {
//         a: "kgs",
//         b: "t", 
//         noWeight: ["Tom", "Piter"]
//     }

//     return calc() +" "+ name.a
// }
// alert(example(12));


var fruits = [
    {name: "bananna", type: "long"},
    {name: "apple", type: "round"},
    {name: "orange", type: "round"},
    {name: "ananas", type: "square"},
]

//filter & reject
// --------------------------------------------------
// var oneFrut = function(item){
//     return item.name === "apple"
// }
// var oneObject = fruits.filter(oneFrut);
// console.log(oneObject[0].name +" "+ oneObject[0].type)



//Map
//----------------------------------------
// var names = []
// var name2 = fruits.map(function(objfrut){
//     return fruits.name
// })

//with for loop
// for (i=0,len=fruits.length;i<len;i++){
//     names.push(fruits[i].name)
// }
// console.log(names)



//reduce
//----------------------
var transactions = [
    {amount: 200}, 
    {amount: 300},
    {amount: 400},
]

var total = transactions.reduce(function(firstPar, secoundPar){
    console.log(firstPar, secoundPar.amount) //show calculation step by step
    return firstPar + secoundPar.amount
}, 0)

//With fro loop
// var total = 0;
// for (i=0,len=transaction.length;i<len;i++){
//     total += transaction[i].amount
// }
// console.log(total)

console.log(total)

