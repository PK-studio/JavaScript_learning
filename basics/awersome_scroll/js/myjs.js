//opactity 1 when el is on middle screan and decrise when coloser edge
//????????????????????????????????????????????????????????????????????

// var sectionH = $('section').height()
// var section1 = $('this').offset().top
// var section2 = $('#2').offset().top
// var section3 = $('#3').offset().top

// $(window).scroll(function(){
//     var scrolled = $(window).scrollTop();
//     var viS1 = (sectionH - (scrolled - section1))/sectionH
//     var viS2 = (sectionH - (scrolled - section2))/sectionH
//     var viS3 = 2-(sectionH - (scrolled - section3))/sectionH
//     console.log(viS2)
//     $('this').css('opacity',viS1)
//     $('#2').css('opacity',viS2)
//     $('#3').css('opacity',viS3)
// })

//When el is on viewPoint <30% fadeIn,>60% fadeOutx
//--------------------------------------------------

  // Get viewport height, gridTop and gridBottom
    var windowHeight = $(window).height(),
     gridTop = windowHeight * .15,
     gridBottom = windowHeight * .85;
     idArrray = ['#1','#2','#3']
  $(window).on('scroll', function() {
    $('article').each(function() {
      var elTop = $(this).offset().top - $(window).scrollTop(); // Get the `top` of this element
        function capacity(){
        var capacity = 0,
          calcFromCenter = (windowHeight/2)            
        }
console.log(elTop)
      // Check if this element is in the interested viewport
      if (elTop >= gridTop && (elTop + $(this).height()) <= gridBottom) {
        $(this).css('opacity', "1");
      } else {
        $(this).css('opacity', "0");
      }
    });
  });

//Start background video
//-------------------------
$('#kiwistory').on('click', function(){
   $('#bgVideo')[0].play();
})