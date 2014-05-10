// // jQuery footnote script

// $(document).ready(function() {
//     Footnotes.setup();
// });

  
// var Footnotes = {
//     footnotetimeout: false,
//     setup: function() {
//         var footnotelinks = $("a[class='footnote']")

//     $(document).click(function(e) {
//       if (!$(e.target).closest('#footnotediv').length){
//         Footnotes.footnoteoout();
//     }
//     });

//     $(footnotelinks).click(function(e) {
//         e.stopPropagation();
//         e.preventDefault();
//       });

//         footnotelinks.unbind('click',Footnotes.footnoteover);
//         footnotelinks.unbind('mouseout',Footnotes.footnoteoout);
        
//         footnotelinks.bind('click',Footnotes.footnoteover);
//         document.bind('click',Footnotes.footnoteoout);
//     },
//     footnoteover: function() {
//         clearTimeout(Footnotes.footnotetimeout);
//         $('#footnotediv').stop();
//         $('#footnotediv').remove();
        
//         var id = $(this).attr('href').substr(1);
//         var position = $(this).offset();
    
//         var div = $(document.createElement('div'));
//         div.attr('id','footnotediv');
//         //div.bind('mouseover',Footnotes.divover);
//         //div.bind('mouseout',Footnotes.footnoteoout);

//         var el = document.getElementById(id);
//         div.html($(el).html());
        
//         div.css({
//             position:'absolute',
//             width:'350px',
//             opacity:1.0
//         });
//         $(document.body).append(div);

//         var left = position.left;
//         if(left + 360  > $(window).width() + $(window).scrollLeft())
//             left = $(window).width() - 360 + $(window).scrollLeft();
//         var top = position.top+20;
//         if(top + div.height() > $(window).height() + $(window).scrollTop())
//             top = position.top - div.height() - 15;
//         div.css({
//             left:left,
//             top:top
//         });
//     },
//     footnoteoout: function() {
//         Footnotes.footnotetimeout = setTimeout(function() {
//             $('#footnotediv').animate({
//                 opacity: 0
//             }, 600, function() {
//                 $('#footnotediv').remove();
//             });
//         },100);
//     },
//     divover: function() {
//         clearTimeout(Footnotes.footnotetimeout);
//         $('#footnotediv').stop();
//         $('#footnotediv').css({
//                 opacity: 1.0
//         });
//     }
// }