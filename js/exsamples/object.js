
//Object crated literaly
//------------------------
var person1 = {
    name : "John",
    age : 20
};
console.log(person1.name + " is " + person1.age + " years old ");




//Object  syntex and examples
//------------------------
person2 = {name: "Tom", surname: "Phillips"}    //  syntex:  myObject = {}
person2.age = "30";                             //  syntex:  myObject.property = "value";
person2["weight"] = "89 kgs";                   //  syntex:  myObject["property"]="value";
console.log(person2)




//Using Object.create to create an Object from a Prototape
//------------------------
var tomLoop = Object.create(person2);
console.log(tomLoop.name + " " + tomLoop.surname + " is " + person2.age + " years old and has " + person2.weight)




//Empty Object crated with constructor method + 2 new properties
//-------------------------------------
var person3 = new Object();
person3.name = "Lisa";
person3.age = 30;
console.log(person3.name + " is " + person3.age + " years old ")




//Object crated with constructor functions + 2 new properties
//-------------------------------------
function Person (){
    this.eyes = 2;
    this.ears = 2;
    this.arms = 2;
}
var willieCash = new Person();
willieCash.name = "Willie Cash";
willieCash["age"] = "18";
console.log(willieCash);




//Object crated with constructor functions with empty value
//-------------------------------------
var someone = {
    name: "",
    eyes: "",
    ears: "",
    arms: "",
    createSomeone: function(value1, value2, value3, value4){
        this.name=value1;
        this.eyes=value2;
        this.ears=value3;
        this.arms=value4;        
        return this.name+" has "+this.eyes+" eyes nad "+this.ears+" ears and "+this.arms+" arms";
    } 
}

var newPerson = someone.createSomeone("Bill","2","2","2")
console.log(newPerson)




//Display property from object by loop
//------------------------------------
var myObj = {
    question1: "Why",
    question2: "How",
    question3: "What",
}

Object.keys(myObj).forEach(function(key){
    console.log(key, myObj[key])
});


var keysList = Object.keys(myObj) 
for (i=0, len = keysList.length; i<len; i++){
    console.log(keysList[i], myObj[keysList[i]]) 
}


//Change properties
//---------------------------------------
window.onload = function (){
/*
var person = {
    name : "Tom",
    age  : 40
    }
var sentence = document.getElementById("test");
sentence.innerHTML = person.name + " is " + person.age + " years old";
sentence.style.fontSize = "30px";
sentence.style.color = "red";
*/
}




//Add value to empty object properties
//-----------------------------------------
/*
var mySandwich = {
    "ingredient1" : "",
    "ingredient2" : "",
    "ingredient3" : ""
};

function confmySandich(){
    var userValue;
    for(var property in mySandwich){
        if (mySandwich.hasOwnProperty(property)){
            userValue = prompt("Eneter the value for "+property);
            mySandwich[property] = userValue;
        }
    }
}

function show(){
    for(var property in mySandwich){
        if (mySandwich.hasOwnProperty(property)){
            alert(property +" : "+mySandwich[property]);
        }
    }
}

confmySandich()
show()
*/
