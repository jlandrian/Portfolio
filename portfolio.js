$(document).ready( function() {
    
    var reveal = function() {
        $(this).find($(".hidden")).fadeIn(100);
    };

    var hide = function() {
        $(this).find($(".hidden")).fadeOut(100); 
};

    $(".shoppinglist").mouseover(reveal);
    $(".shoppinglist").mouseleave(hide);
    
    $(".hotorcold").mouseover(reveal);
    $(".hotorcold").mouseleave(hide);
    
    $(".quiz").mouseover(reveal);
    $(".quiz").mouseleave(hide);
    
    $(".api").mouseover(reveal);
    $(".api").mouseleave(hide);
});