let reduce = (() => {
  let arr = [1,2,3,4]
  function reduce(arr){
    return arr.reduce((acc, nextNum) => acc + nextNum)
  }
  expect(reduce(arr)).to.equal(10)
})()

let myReducer = (() => {
  let arr = [10,20,30,40]
  
  Array.prototype.myReduce = function(fn,num){
    let i, sum

    if(num){
      i = 0;
      sum = num
    }
    else{
      i = 1
      sum = this[0]
    }

    for (i; i < this.length; i++) {
      sum = fn(sum, this[i]);     
    }

    return sum
  }

  function reduce(arr){
    return arr.myReduce((acc, nextNum) => acc + nextNum, 0)
  }

  expect(reduce(arr)).to.equal(100)
})()