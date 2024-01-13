(function($){
    $(function(){
        /* Scroll to sections */
        $(".jq--scroll-home").click(function(){
            $("html, body").animate({scrollTop: $(".jq--home").offset().top}, 1000);
         });

        $(".jq--scroll-about-me").click(function(){
           $("html, body").animate({scrollTop: $(".jq--about-me").offset().top}, 1000);
        });
        
        $(".jq--scroll-portfolio").click(function(){
            $("html, body").animate({scrollTop: $(".jq--portfolio").offset().top}, 1000);
         });
         
        $(".jq--scroll-experience").click(function(){
            $("html, body").animate({scrollTop: $(".jq--experience").offset().top}, 1000);
        });
        
        $(".jq--scroll-contact-me").click(function(){
            $("html, body").animate({scrollTop: $(".jq--contact-me").offset().top}, 1000);
        });



        /* Scroll buttons to sections */
        $(".jq--scroll-button-first").click(function(){
            $("html, body").animate({scrollTop: $(".jq--our-pizza").offset().top}, 1000);
         });

         $(".jq--scroll-button-second").click(function(){
            $("html, body").animate({scrollTop: $(".jq--references").offset().top}, 1000);
        });

        /* Mobile navigation */
         $(".jq--nav-icon").click(function(){
           
            $(".nav-background").slideToggle();
            $(".mobile-nav-back").fadeToggle();
            $("nav ul").fadeToggle();  
         });
        
    }); 
 })(jQuery);