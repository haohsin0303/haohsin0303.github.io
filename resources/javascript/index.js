$(function(){

    // 偵聽a click
    $(".menu").bind("click",function(){
 
        var section_name = $(this).attr("section_name");
        var target_top = $("#"+section_name).offset().top;
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

        $body.animate({
            scrollTop: target_top
        }, 800);
 
    })
 })