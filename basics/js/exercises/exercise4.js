$(document).ready(function (){
var ajax1 = {employees:[
    {"firstName":"John", "lastName":"Doe"}, 
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]}
var employees = ajax1.employees
$('.load-json-buttons button').on('click', function(){
    var pNo = $(".load-json-buttons button").index(this)
    var header = $(this).val()+ ":" + "<br>";
    $('#jsonfile').html(header + employees[pNo].firstName +" "+ employees[pNo].lastName)
    $('#jsonfile').parent().removeClass('disable')
})

    // $.ajax(file:///D:/projects/JS%20Leson/index.html,{
    //     success: function(data) {
    //         console.log('file is loaded')
    //     }
    // });
})