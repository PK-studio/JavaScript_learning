var myQuotes = [
    ' <p>“Live as if you were to die tomorrow. Learn as if you were to live forever."</p> <p>- Mahatma Gandhi</p>',
    ' <p>"Be yourself; everyone else is already taken."</p> <p>- Oscar Wilde</p>',
    ' <p>"You only live once, but if you do it right, once is enough.”</p> <p>- Mae West</p> '
]
var currentQuote = 0

window.addEventListener("load", firstquote)
function firstquote(){
    document.getElementById("quotspace").innerHTML = myQuotes[0];
}

window.setInterval(slideshow,5000);

function slideshow(){
    currentQuote++
    if (currentQuote>myQuotes.length-1){currentQuote=0;}
    document.getElementById("quotspace").innerHTML = myQuotes[currentQuote];

}
