//callback define calculation
function syntex (parameter1,nextparamiters,callback){
    var calculation = parameter1 + nextparamiters
    callback(calculation)
}
syntex(8,9,function(some){
    console.log(some)
});
//------------------------------------------------------------
//callback define parameters for next functions and show result of calculation
function doMath(num1, num2, callback){
    var result = callback(num1,num2)
    console.log(result)
}
function addNum(num1,num2){
    var calc = num1 + num2
    return calc
}
function divide(num1,num2){
    var calc = num1/num2
    return calc
}
doMath(3,7,addNum)
doMath(50,10,divide)
//Same result like above, but function pass to calling code---------------
function doMath (number1,number2,callback){
    result = callback(number1,number2)
    console.log(result)
}
doMath(3,7,function(number1,number2){
    var calc = number1 + number2;
    return calc;
});

doMath(50,10,function(number1,number2){
    var calc = number1 / number2;
    return calc
});
//--------------------------------------------------------------------