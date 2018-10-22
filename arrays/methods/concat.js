let just_concat = (() => {
  let arr = [1,2,3,4,5,6]
  let expected = [1,2,3,4,5,6,1,2,3,4,5,6]
  
  function output1(arr){
    return [...arr,...arr]
  }
  function output2(arr){
    return arr.concat(arr)
  }
  
  expect(output1(arr)).to.eql(expected);
  expect(output2(arr)).to.eql(expected);
})();



let with_slice = (() => {
  let arr = [1,2,3,4,5,6]
  let expected = [1,2,4,5]

  function output(arr){
    let arr1 = arr.slice(0,2)
    let arr2 = arr.slice(3,5)
    return [...arr1,...arr2]
  }

  expect(output(arr)).to.eql(expected)
})();



let with_reduce = (() => {
  let arr = [1,2,3,4,5];
  let expected = [1,2,3,4,5,15];

  function output(arr){
    let sum = arr.reduce((prevVal, currVal) => prevVal + currVal)
    return arr.concat(sum)
  }

  expect(output(arr)).to.eql(expected)
})()



let with_splice_and_unshift = (() => {
  let arr = [1,2,3,4,5]
  let expected = [4,5,1,2,3]

  function output1(arr){
    let thisArr = Array.from(arr)
    let part1 = thisArr.splice(3,2)
    return part1.concat(thisArr)
  }

  function output2(arr){
    let thisArr = Array.from(arr)
    let part1 = thisArr.splice(3,2)
    thisArr.unshift(...part1)
    return thisArr
  }

  expect(output1(arr)).to.eql(expected)
  expect(output2(arr)).to.eql(expected)
})();