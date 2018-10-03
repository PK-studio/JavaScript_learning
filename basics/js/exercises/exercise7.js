function confirmation (){
    var element = document.getElementsByClassName("js-confirm")
    for (var i = 0; i < element.length; i++) {
    element[i].addEventListener('click', function(e){
        var $this = e.target;
        var message = 'Are you sure?';
        var attVal = $this.getAttribute('data-confirm');
        if(attVal == true){
            message = atrVal;
        };
        if(window.confirm(message)!= true){
            e.preventDefault()
        };
    })
    }
};
confirmation()