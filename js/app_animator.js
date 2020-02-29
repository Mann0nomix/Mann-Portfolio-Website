$(function(){
    var scroller = $('#scroller div.innerScrollArea');
    var scrollerContent = scroller.children('ul');
    scrollerContent.children().clone().appendTo(scrollerContent);
    var curX = 0;
    scrollerContent.children().each(function(){
        var $this = $(this);
        $this.css('left', curX);
        curX += $this.outerWidth(true);
    });
    var fullW = curX / 2;
    var viewportW = scroller.width();

    // Scrolling speed management
    var controller = {curSpeed:0, fullSpeed:2};
    var $controller = $(controller);
    var tweenToNewSpeed = function(newSpeed, duration)
    {
        if (duration === undefined)
            duration = 600;
        $controller.stop(true).animate({curSpeed:newSpeed}, duration);
    };

    // Pause on hover
    scroller.hover(function(){
        tweenToNewSpeed(0);
    }, function(){
        tweenToNewSpeed(controller.fullSpeed);
    });

    // Scrolling management; start the automatical scrolling
    var doScroll = function()
    {
        var curX = scroller.scrollLeft();
        var newX = curX + controller.curSpeed;
        if (newX > fullW*2 - viewportW)
            newX -= fullW;
        scroller.scrollLeft(newX);
    };
    setInterval(doScroll, 20);
    tweenToNewSpeed(controller.fullSpeed);
});

$(function(){
    var scroller2 = $('#scroller2 div.innerScrollArea');
    var scrollerContent2 = scroller2.children('ul');
    scrollerContent2.children().clone().appendTo(scrollerContent2);
    var curX2 = 0;
    scrollerContent2.children().each(function(){
        var $this2 = $(this);
        $this2.css('left', curX2);
        curX2 += $this2.outerWidth(true);
    });
    var fullW2 = curX2 / 2;
    var viewportW2 = scroller2.width();

    // Scrolling speed management
    var controller2 = {curSpeed2:0, fullSpeed2:2};
    var $controller2 = $(controller2);
    var tweenToNewSpeed2 = function(newSpeed2, duration2)
    {
        if (duration2 === undefined)
            duration2 = 600;
        $controller2.stop(true).animate({curSpeed2:newSpeed2}, duration2);
    };

    // Pause on hover
    scroller2.hover(function(){
        tweenToNewSpeed2(0);
    }, function(){
        tweenToNewSpeed2(controller2.fullSpeed2);
    });

    // Scrolling management; start the automatical scrolling
    var doScroll2 = function()
    {
        var curX2 = scroller2.scrollLeft();
        var newX2 = curX2 + controller2.curSpeed2;
        if (newX2 > fullW2*2 - viewportW2)
            newX2 -= fullW2;
        scroller2.scrollLeft(newX2);
    };
    setInterval(doScroll2, 20);
    tweenToNewSpeed2(controller2.fullSpeed);
});