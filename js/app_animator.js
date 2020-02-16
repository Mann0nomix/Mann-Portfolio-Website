
$(document).ready(function(){
    let screenWidth = $(window).width();
    let animationSpeed = 10000; //ms

    function scrollApp(app){
        app.animate({ 
            left: -500
        }, animationSpeed, "swing", ()=>{
            app.attr("style", "left:" + screenWidth + "px");
            scrollApp(app);
        });
    }

    $('#app_collection > div').map(function() {
        scrollApp($(this));
    });

    setInterval(()=>{
        console.log("The position of my item is = " + $("#app_1").position().left);
        if($("#app_1").position().left < -400){
            console.log("Repositioning should happen")
        }
    }, 1000);
});

