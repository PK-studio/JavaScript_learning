//1- code is reading variables localy, later from higher scope(lvl)
//2- proparties with out var are global
//3- If we want have access to local var, we need reference it, exp. person.name.firstname

/*variable assign localy
//------------------------------
function sameName(){
    var myname = "Patryk"
    alert(myname)
}
sameName()
*/




/*variable assign globaly
//------------------------------
var myname = "Patryk"
function sameName(){
    alert(myname)
}
sameName()
*/



/*variable assign localy with leaking function (with out var so it's global')
//--------------------------------------------------------------
function sameName(){
    myname = "Patryk"
    alert(myname)
}
sameName()
*/



//Exp with reference and difference
//------------------------
var first = 1;
var obj = {
    first: 10,
    test1: function(){
        return first            //return global property
    },
    test2: function() {
        return this.first        //return local property
    }
}
console.log(obj.test1()) 
console.log(obj.test2()) 
