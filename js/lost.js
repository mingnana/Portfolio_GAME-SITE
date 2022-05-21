$(document).ready(function(){
    // btnClick();
    // video show
    $("#view, #full").hide()
    $(".playBtn").click(function(){
       $("#view").html("<iframe width='1060' height='596' src='https://www.youtube.com/embed/diilMn5gSAg?autoplay=1&mute=1'title='YouTube video player'></iframe>")
       $("#view, #full").show();
       return false;
    })
    $("#view, #full").click(function(){
       $("#view, #full").hide();
    })
 
    // 헤더 햄버거버튼
    $(".menu_bar").click(function(){
       $(this).toggleClass('allMenu').css("transition","all 1s");
    });
 
    // 헤더 메뉴박스
    $(".menu_bar").click(function(){
       var all = $("#all_menu_box");
       var header = $("#header");
       var gnb = $("#gnb")
       var body = $("body")
 
       all.toggleClass("active").css("transition","all 0.7s")
       header.toggleClass("active");
       gnb.toggleClass("active");
       body.toggleClass("active");
       })
 
 
    
 })