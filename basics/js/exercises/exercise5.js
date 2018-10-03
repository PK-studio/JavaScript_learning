$(document).ready(function (){
    $('.activemenu ul li').on('click', function(){
        $(this).siblings().removeClass("active")
        $(this).addClass("active")
        // var panelId = $(this).attr('rel');
        // $('.activemenu .panel').removeClass("active");
        // $('#'+panelId).addClass("active")

        var panelId = $(this).attr('rel');
        $('.activemenu .panel.active').slideUp(300,function(){
            $(this).removeClass("active")
            $('#'+panelId).slideDown(300,function(){
                $(this).addClass("active")
            })
        })
    })
});