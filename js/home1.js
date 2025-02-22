new WOW().init();

$(document).ready(function(){
   $(window).scroll(function() {
    let windowHeight=$(window).height();
    let current_height=$(this).scrollTop();
    console.log(current_height);
    if (current_height> windowHeight-90) {
        console.log("hello");

        $(".navigation").addClass("desktopbar");
    }
    else{
        $(".navigation").removeClass("desktopbar");
        $(`.nav-link[href='#about']`).removeClass("createline");
        $(`.nav-link[href='#home']`).addClass("createline");
    }
   
   })
})

$(".startbtn").click(function(){
    $(".contentBox").toggleClass("show")
       $(".menu-icon").toggleClass("fa-bars fa-times");
})

function interaction(){
    let currentSection= $("section");
    // console.log(currentSection);
    currentSection.waypoint(function (direction) { 
        if (direction== "down") {
            let currentSectionId = $(this.element).attr('id');
            console.log($(this.element).attr('id'));
            setInteraction(currentSectionId);
        }
    },{upset:"28%"});
    currentSection.waypoint(function (direction) { 
        if (direction== "up") {
            let currentSectionId = $(this.element).attr('id');
            console.log($(this.element).attr('id'));
            setInteraction(currentSectionId);
        }
    },{offset:"1%"});
}
interaction();
function setInteraction(currentId){
    $(".nav-link").removeClass("createline");

    $(`.nav-link[href='#${currentId}']`).addClass("createline");
}

 