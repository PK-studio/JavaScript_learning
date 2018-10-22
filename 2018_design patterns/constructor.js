function Car(color, price) {
  this.color = color
  this.price = price
}

var testProto = new Car('x', 'y')

Object.prototype.info = function(){
  console.log(this.color, this.price)
}

var newCar = new Car('black', 'low')