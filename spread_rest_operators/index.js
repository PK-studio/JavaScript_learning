let firstArray = ['a','b','c'];
let secundArray = [1,2,3];
// standard concat
let concatArrey1 = firstArray.concat(secundArray)

// concat with spread operator
let withSpreadOperator = [...firstArray, ...secundArray]



// reduce with arguments
function reducer1(){
    console.log(arguments)
    return Array.prototype.reduce.call(arguments, (prev, curr) => {
        return prev+curr
    })
}
console.log( reducer1(5,6,7) )



// reduce with "rest arguments"
function reduce2(...arg){
    console.log(arg)
    return arg.reduce((prev, curr) => {
        return prev+curr
    })
}
console.log( reduce2(1,2,3,4) )



//multiply with "rest arguments"
function multiply(mul, ...numbers){
    return numbers.map((num) => {
        return mul * num
    })
}
console.log( multiply(10,2,4,5) )