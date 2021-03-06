// //-------------------------------------------------------------------
// //  Gradually fade hero headline as users scroll down
// //-------------------------------------------------------------------
// function fadeHero(event) {
//   // Unless it's a touch device, apply subtle transformation
//   // to the header as you scroll down. Touch excluded for now
//   // for optimal performance. Does not exclude trackpads.
//   //var headline_position = $('.headline').position().top;
//   var headline_position = 340;
//   if ('ontouchstart' in document.documentElement == false) {
//     if (window.pageYOffset > 0) {
//         $('.hero-image').css('opacity', (1 - (1/600) * window.pageYOffset ));
//         $('.down-arrow').css('opacity', (1 / (window.pageYOffset / 150)) - 0.3);
//         if ($(".headline").position().top < 500) {
//             $('.headline').css("top", (headline_position + (window.pageYOffset / 2)) + 'px');
//         }
//     } else {
//       $('.hero-image').css('opacity', 1);
//       $('.down-arrow').css('opacity', 1);
//       $('.headline').css('top', "340px");
//     }
//   }
// };


var header_resize = function(){
    var tallness = $(window).innerHeight();
    if (tallness < 600  && tallness > 400) {
        if (page_skrollr != null) {
            page_skrollr.destroy();
        }
        $('.hero-image').css('height', tallness + "px");
    }
    else if (tallness < 400) {
        if (page_skrollr != null) {
            page_skrollr.destroy();
        }
        $('.hero-image').css('height', "400" + "px");
    }
    else {

        if ('ontouchstart' in document.documentElement == false) {
            page_skrollr = skrollr.init();
        }
        $('.hero-image').css('height', "650" + "px");
    }
}


$(document).ready(function() {
header_resize();
});

$( window ).resize(function() {
header_resize();
});
