$(document).ready(function(){
    // btnClick();
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