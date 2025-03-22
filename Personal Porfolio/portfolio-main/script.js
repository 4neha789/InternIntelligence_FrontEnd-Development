$(document).ready(function(){
    // mobile menu
    $(".menu-icon").on("click",function(){
        $("nav ul").toggleClass("showing");
    })

    // Smooth scrolling
    $('.scroll').click(function(e) {
        e.preventDefault();
        $('body,html').animate({
          scrollTop: $(this.hash).offset().top
        });
      });

      $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();
        
        $('.scroll').each(function() {
          
          var sectionOffset = $(this.hash).offset().top - 150;
          
          if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        })
        
      })
      $(window).on("scroll",function(){

        if($(window).scrollTop()){
            $('nav').addClass('black');
            $('.logo').css('opacity',1);
        }
        else{
            $('nav').removeClass('black');
            $('.logo').css('opacity',0)
        }
    
    })
    window.sr=ScrollReveal();
    sr.reveal('.title',{
        duration:2000

    });
    sr.reveal('.title span',{
        duration:1000,
        origin:'bottom',
        distance: '30px'
    });
    sr.reveal('.titles',{
        duration:1000,
        origin:'bottom',
        distance: '10px'
    });
    sr.reveal('.about-p',{
        delay:200,
        duration:1000,
        origin:'bottom',
        distance: '10px'
    });
    sr.reveal('.about-subtitle',{
        delay:400,
        duration:1000,
        origin:'bottom',
        distance: '10px'
    });
    sr.reveal('.container',{
        delay:600,
        duration:1000,
        scale:0.6
    });
    sr.reveal('.one',{
        delay:200,
        duration:1000,
        origin:'bottom',
        distance: '10px'
    });
    sr.reveal('.two',{
        delay:400,
        duration:1000,
        origin:'bottom',
        distance: '10px'
    });
    sr.reveal('.wrapper',{
        delay:200,
        duration:1000,
        scale:0.6
    });
    sr.reveal('nav',{
        duration:1000
    });
})