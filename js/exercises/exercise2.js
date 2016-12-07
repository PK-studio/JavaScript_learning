var ourlist = document.querySelector("#lilist")
var ourButton = document.getElementById("add-button");
var removeButton = document.getElementById("remove-button");
var newItemCounter=1

//after cklick button add li element
ourButton.addEventListener("click", additem);
function additem(){
    var input = document.getElementById("myText").value
    if (input == "null" || input == ""){
        ourlist.innerHTML += "<li>" + "New Li element NO. "+ newItemCounter + "</li>"
        newItemCounter++
    }
    else{
        ourlist.innerHTML += "<li>" + input + "</li>"
    }
}
//after cklick button remove li element
removeButton.addEventListener("click", removelastitem);
function removelastitem(){
    ourlist.removeChild(ourlist.lastChild);
};

//after cklick item, run loop, stop when i = clicked element and return number
ourlist.addEventListener("click", removeitem);
function removeitem (point) {
    point = point.target
    var listOfLi = document.querySelectorAll("#lilist li");
    for(i=0;i<listOfLi.length;i++){
        if (point == listOfLi[i]) break;
    }
    ourlist.removeChild(listOfLi[i]);
}