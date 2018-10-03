//take clicked element
//marge click el with div
//add function and class to el on that event

$(document).ready(function(){
    var clickEl = $(document).find('[data-toggle="collapse"]');
    $(clickEl).on('click', function(){
        var idEl = $(this).attr('data-target');
        $(idEl).toggle(200)
    })
})
