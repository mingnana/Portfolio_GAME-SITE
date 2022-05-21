$(document).ready(function(){
   btnClick();
   // video show
   $("#view, #full").hide()
   $(".playBtn").click(function(){
      $("#view").html("<iframe width='1300' height='737' src='https://www.youtube.com/embed/qSJN4hN28kg?autoplay=1&mute=1'title='YouTube video player'></iframe>")
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


   // 양옆 버튼
   function btnClick(){
      function prevMove(){
         $("#scroll_ul").prepend($("#scroll_ul li:last")).css({"marginLeft":"-1550px"});
      }
      prevMove();
      $(".prevBtn").click(function(){
         $("#scroll_ul").animate({"marginLeft":"+=1550px"},800, function(){
            prevMove();
         })
      })
      $(".nextBtn").click(function(){
         $("#scroll_ul").animate({"marginLeft":"-=1550px"},800,  function(){
            $("#scroll_ul").append($("#scroll_ul li:eq(0)")).css({"marginLeft":"-1550px"})
         })
      })
   }


   
   // 스크롤 애니메이션
      
      
   var $col = $('#collection')
   // console.log($col)
   // var $offset = 300
   var $colOST = $col.offset().top - 1000
   $(window).scroll(function(){

      if($(this).scrollTop() > $colOST){
         $('.col_inn').find("p").addClass("scroll-img")
      }
      return false;
   })


   // $(window).scroll(function(){
   //    var pos = $(window).scrollTop() + ($(window).height() / 2);
   //             console.log("상단위치값 : " + pos);
   //    ele.each(function(index){
   //          var anyBox_Bottom_Pos = $(this).offset().top + $(this).outerHeight(); 
   //          ele.each(function(i){
   //             if (pos > ani[i]){
   //                $(this).animate({top:"0px",opacity:"1"},500);
   //             }
   //          });
   //    });
   // });




   // var isScroll = false;
   // $(window).scroll(function(){
   //    // alert("#3")
   //    function simpleParallax() {
   //    //스크롤된 거리
   //    var scrolled = $(window).scrollTop();
      
   //    //백그라운드 스크롤 속도 변경 시 0.3 을 수정
   //    $('#collection p').fadeIn(2000)
   // }
   // //Everytime we scroll, it will fire the function
   // $(window).scroll(function (e) {
   //    simpleParallax();
   // });
   //    $(".col p").each(function(){
   //       var bottomOfElement = $(this).offset().top + $(this).outerHeight() / 3;
   //       var bottomOfWindow = $(window).scrollTop() + $(window).height();

   //       if(bottomOfWindow > bottomOfElement){
   //          $(this).animate({'opacity':'1'},700);
   //       }
   //    })
   // })
})




