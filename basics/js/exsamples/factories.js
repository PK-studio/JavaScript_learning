function dog (){
    var sound = "woof"
    return {
    talk: function(){
    console.log(sound)
    }}
}

var max = dog()
max.talk()