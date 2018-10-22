let odd_and_even_with_filter_reminder = (() => {
  let output1;
  let output2;
  let arr = [1,2,3,4,5,6,7,8,9,10]
  let expected1 = [1,3,5,7,9]
  let expected2 = [2,4,6,8,10]
  
  output1 = arr.filter(num => {
    if(num%2 === 1) return num
  })

  output2 = arr.filter(num => {
    if(num%2 === 0) return num
  })

  expect(output1).to.eql(expected1)
  expect(output2).to.eql(expected2)
})()



let odd_and_even_with_reminder = (() => {
  let output1 = []
  let output2 = []
  let expected1 = [1,3,5,7,9]
  let expected2 = [2,4,6,8,10]
  
  for (let i=1; i<11; i++){
    if(i % 2 === 1){
      output1.push(i)
    }else{
      output2.push(i)
    }
  }

  expect(output1).to.eql(expected1)
  expect(output2).to.eql(expected2)
})()

 

let odd_and_even_with_integer = (() => {
  let output1 = []
  let output2 = []
  let expected1 = [1,3,5,7,9]
  let expected2 = [2,4,6,8,10]
  
  for (let i=1; i<11; i++){
    if(Number.isInteger(i/2)){
      output2.push(i)
    }else{
      output1.push(i)
    }
  }

  expect(output1).to.eql(expected1)
  expect(output2).to.eql(expected2)
})()



let diviser_of_two_numbers = (() => {
  function calc(x,y){
    let maxNum = Math.max(x,y)
    let minNum = Math.min(x,y);
    let maxDivider = Math.min(x,y);
    while(maxDivider>0){
      if(maxNum%maxDivider === 0 && minNum%maxDivider === 0) return maxDivider
      maxDivider --
    }
  }

  //find the geatest comon diviser of two numbers
  expect(calc(4,6)).to.equal(2)
  expect(calc(15,5)).to.equal(5)
  expect(calc(12,9)).to.equal(3)
  expect(calc(17,7)).to.equal(1)
  expect(calc(30,10)).to.equal(10)
})()