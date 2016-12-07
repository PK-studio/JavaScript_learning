//0,1,1,2,3,5.8.13,21...

var a,b,curry
a = 0
b = 1
curry = b

for(i=0;i<14;i++){    
console.log(curry)
curry = a+b
a=b
b=curry
}
//----------------------------------
var fib = (function(){
    var a=0; var b=1; f = b
    for (i=0;i<14;i++){
        console.log(f)
        f=a+b
        a=b
        b=f
    }
    return f
})();