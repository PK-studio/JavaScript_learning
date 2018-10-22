let find_out_position = (() => {
  function circleOf(x,y,z){
    let position = z-1;
    while(y>0){
      y--;
      (position+1 > x) ? position=1 : position=position+1;
    }
    return position;
  }

  function withReminder(x,y,z){
    if(y > x) {
      let lastPos = z + (y%x) -1
      return (lastPos > x) ? lastPos%x : lastPos
    }else{
      return z+y-1
    }
  }

  // distibute gifts between ppl in circle, find who is the last; 
  // x = amount of ppl
  // y = amount of gifts
  // z = begining position
  expect(circleOf(3,1,1)).to.equal(1) 
  expect(circleOf(3,1,2)).to.equal(2) 
  expect(circleOf(3,2,1)).to.equal(2) 
  expect(circleOf(3,2,2)).to.equal(3)
  expect(circleOf(5,8,2)).to.equal(4) 
  expect(circleOf(9,12,8)).to.equal(1) 
  expect(withReminder(3,1,1)).to.equal(1) 
  expect(withReminder(3,1,2)).to.equal(2) 
  expect(withReminder(3,2,1)).to.equal(2) 
  expect(withReminder(3,2,2)).to.equal(3)
  expect(withReminder(5,8,2)).to.equal(4) 
  expect(withReminder(9,12,8)).to.equal(1) 
})()