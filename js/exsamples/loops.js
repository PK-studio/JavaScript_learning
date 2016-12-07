var choise =prompt("Choise 1 or 6 or 10")

//If...else
//--------------------
var cats = choise
if(cats<=1){
    console.log("only one?!")
}else {
    console.log("This is ok")
}

//if...else if
//---------------------
var cars = choise
if(cars<5){
    console.log("This is not enough")
}else if(cars<10){
    console.log("This is better")
}else {
    console.log("This is good")
}

//switch
//-------------------
switch(choise){
    case "1":
        console.log("Your choice: 1");
        break;
    case "6":
        console.log("Your choice: 6");
        break;
    case "10":
        console.log("Your choice: 10");
        break;
    default:
        console.log("Wrong number")
}

//For loop
//---------------------
for (i=0;i<5;i++){
    console.log(i);
}


//While loop
//--------------------
var x = 5;
while (x<10){
    console.log(x)
    x++
}

//Do/whille loop
//--------------------
var y = 10;
do{
    console.log(y);
    y++;
}
while(y<15)




//tasks on loops
//-----------------------
//Ask as long give correct question
var myQuestion = prompt("Who write this code")
myQuestion = myQuestion.toLowerCase()
while (myQuestion !== "patryk"){
    myQuestion = prompt("Try again!");
    myQuestion = myQuestion.toLowerCase()
}
alert("Thats right")


//Name from the back
var myName = "Patryk";
var nameLength = myName.length - 1;
var final = '';
while (nameLength >= 0){
   final = final + myName[nameLength]
    nameLength--;
}
console.log(final);


//Swap letters from name for a vallue of position in alphabet
var letters = "abcdefghijklmnoprstuvwxyz";
var name = "Patryk"
for(i=0;i<=name.length -1;i++){ 
    var char = name[i]
    console.log(letters.indexOf(char.toLowerCase()));
}



