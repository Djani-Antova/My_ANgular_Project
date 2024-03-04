//jquery-click-scroll
//by syamsul'isul' Arifin

// var sectionArray = [1, 2, 3, 4, 5]; //Edited

// $.each(sectionArray, function(index, value){
          
//      $(document).scroll(function(){
//          var offsetSection = $('#' + 'section_' + value).offset().top - 75;
//          var docScroll = $(document).scrollTop();
//          var docScroll1 = docScroll + 1;
         
        
//          if ( docScroll1 >= offsetSection ){
//              $('.navbar-nav .nav-item .nav-link').removeClass('active');
//              $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');  
//              $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
//              $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
//          }
         
//      });
    
//     $('.click-scroll').eq(index).click(function(e){
//         var offsetClick = $('#' + 'section_' + value).offset().top - 75;
//         e.preventDefault();
//         $('html, body').animate({
//             'scrollTop':offsetClick
//         }, 300)
//     });
    
// });

// $(document).ready(function(){
//     $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
//     $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
//     $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
// });

$(document).ready(function() {
    var sectionArray = [1, 2, 3, 4, 5];

    // Scroll event for changing active link state
    $(document).scroll(function() {
        $.each(sectionArray, function(index, value) {
            var sectionSelector = '#section_' + value;
            var section = $(sectionSelector);

            // Proceed only if the section exists
            if (section.length) {
                var offsetSection = section.offset().top - 75;
                var docScroll = $(document).scrollTop() + 1;

                if (docScroll >= offsetSection) {
                    $('.navbar-nav .nav-item .nav-link').removeClass('active').addClass('inactive');
                    $('.navbar-nav .nav-item .nav-link[href$="' + sectionSelector + '"]').addClass('active').removeClass('inactive');
                }
            }
        });
    });

    // Click event for smooth scrolling
    $('.click-scroll').click(function(e) {
        e.preventDefault();
        var targetId = $(this).attr('href');
        var targetElement = $(targetId);

        if (targetElement.length) {
            var offsetClick = targetElement.offset().top - 75;
            $('html, body').animate({
                'scrollTop': offsetClick
            }, 300);
        }
    });

    // Initial state setup
    $('.navbar-nav .nav-item .nav-link').addClass('inactive');
    $('.navbar-nav .nav-item .nav-link').first().addClass('active').removeClass('inactive');
});