var myModule = (function(){
  var name = 'PK'
  var orginalName = 'Pk'

  function displayNames(){
    console.log(name)
    console.log(orginalName)
  }

  function changeName(newName){
    name = newName;
    displayNames()
  }
  return {
    displayNames: displayNames,
    changeName: changeName
  }
})()