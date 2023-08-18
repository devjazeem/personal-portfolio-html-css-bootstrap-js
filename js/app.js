$(document).ready(function(){
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll>=50){
            $(".sticky").addClass("stickyadd");
        }else{
            $(".sticky").removeClass("stickyadd");
        }
    })

    var typed = new Typed(".element",{
        strings: ["Mohammed Jazeem", "a Developer", "a ", "a Designer"], 
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });

// PROGRESS BARS
    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function() {
        var p = document.querySelectorAll('.progress-bar');
        p[0].setAttribute("style", "width:95%; transition:ls all");
        p[1].setAttribute("style", "width:85%; transition:l.5s all");
        p[2].setAttribute("style", "width:70%; transition:l.7s all");
        p[3].setAttribute("style", "width:80%; transition:2s all");
        p[4].setAttribute("style", "width:90%; transition:2.3 all"); 
        },
        offset: '90%'
      });

    
    
    // OWL CAROUSEL 
      $(".owl-carousel").owlCarousel({
        loop: true,
        autoPlay: true,
        autoPlayTimeout: 4000,
        items: 1
    });

    
    var filterizd = $('.filter-container').filterizr({
            animationDuration: .5,
    }); 

    
});


// form validation /////////////////////////////


function validate(){
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let subject = document.getElementById("subject")
    let message = document.getElementById("message")
    console.log(typeOf(name.value))
    

    if(typeOf(name.value) != String){
        alert("Enter valid Name")
        console.log("hhh")
        return false;
    }





}