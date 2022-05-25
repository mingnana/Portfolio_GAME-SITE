$(document).ready(function(){
   allMenu();
   menuBox();
   btnClick();
   hideVideo();
   showVideo();
   $("#upNews").siblings('.updateCate').hide();
   update();
 })

 // 채팅기능
 var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
 (function(){
 var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
 s1.async=true;
 s1.src='https://embed.tawk.to/627d395f7b967b11798f1320/1g2sig7ha';
 s1.charset='UTF-8';
 s1.setAttribute('crossorigin','*');
 s0.parentNode.insertBefore(s1,s0);
 })();


 // 헤더 햄버거버튼
 function allMenu(){
    $(".menu_bar").click(function(){
    $(this).toggleClass('allMenu').css("transition","all 1s");
    });
 }
  // 헤더 메뉴박스
  function menuBox(){
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
}

   // visual txt
   var typingBool = false; 
   var i=0; 
   var typingTxt = $(".typing_txt").text(); // 타이핑될 텍스트를 가져온다 
   typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
   if(typingBool==false){ // 타이핑이 진행되지 않았다면 
      typingBool=true; 
      
      var tyInt = setInterval(typing,100); // 반복동작 
    } 
    
    function typing(){ 
      if(i<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
        $(".typing").append(typingTxt[i]); // 한글자씩 이어준다. 
        i++; 
      } else{ 
        clearInterval(typing); //끝나면 반복종료 
      } 
    }
   
 // featured Games morebox
 var more = true;
 function moreGame(){
    if(more == true){
       $(".featured_inner").animate({"height":"1360px"},500)
       more = false;
    }else{
       $(".featured_inner").animate({"height":"690px"}, 500)
       more = true;
    }
 }
 // sale 양옆 버튼
 function btnClick(){
    function prevMove(){
          $("#sale_ul").prepend($("#sale_ul li:last")).css({"marginLeft":"-233px"});
    }
    prevMove();
    $(".prevBtn").click(function(){
          $("#sale_ul").animate({"marginLeft":"+=233px"},300,"swing",function(){
             prevMove();
          });
    });

    $(".nextBtn").click(function(){
          $("#sale_ul").animate({"marginLeft":"-=233px"},300,"swing",function(){
             $("#sale_ul").append($("#sale_ul li:eq(0)")).css({"marginLeft":"-233px"});
          });
    });
 }
 // sale 비디오기능
 function hideVideo(){
    $(".sale_b_img video").hide()
 };
 function showVideo(){
    $(".sale_b_img").mouseover(function(){
          $(this).children().children('video').show();
    })
    .mouseout(function(){
          $(this).children().children('video').hide()
    });
 }


 // update 메뉴
 function update(){
    $(".upNews a").on("click focus", function(){
       Newsa =  $(".menu li:eq(0)")
       upNews = $("#upNews")
       Newsa.children('a').css({"backgroundImage":"-webkit-linear-gradient(transparent 60%, rgba(0,255,180,0.6) 5px)"})
       Newsa.siblings().children('a').css({"backgroundImage":"none"})
       upNews.show()
       upNews.siblings('.updateCate').hide()
    })

    $(".upPlay a").on("click focus", function(){
      Playa = $(".menu li:eq(1)")
      upPlay = $("#upPlay")
      Playa.children('a').css({"backgroundImage":"-webkit-linear-gradient(transparent 60%, rgba(0,255,180,0.6) 5px)"})
      Playa.siblings().children('a').css({"backgroundImage":"none"})
      upPlay.show()
      upPlay.siblings('.updateCate').hide()
   })
   $(".upNFL a").on("click focus", function(){
      NFL = $(".menu li:eq(2)")
      upNFL = $("#upNFL")
      NFL.children('a').css({"backgroundImage":"-webkit-linear-gradient(transparent 60%, rgba(0,255,180,0.6) 5px)"})
      NFL.siblings().children('a').css({"backgroundImage":"none"})
      upNFL.show()
      upNFL.siblings('.updateCate').hide()
   })
   $(".upApex a").on("click focus", function(){
      Apex = $(".menu li:eq(3)")
      upApex = $("#upApex")
      Apex.children('a').css({"backgroundImage":"-webkit-linear-gradient(transparent 60%, rgba(0,255,180,0.6) 5px)"})
      Apex.siblings().children('a').css({"backgroundImage":"none"})
      upApex.show()
      upApex.siblings('.updateCate').hide()
   })
   $(".upFifa a").on("click focus", function(){
      FIFA = $(".menu li:eq(4)")
      upFIFA = $("#upFIFA")
      FIFA.children('a').css({"backgroundImage":"-webkit-linear-gradient(transparent 60%, rgba(0,255,180,0.6) 5px)"})
      FIFA.siblings().children('a').css({"backgroundImage":"none"})
      upFIFA.show()
      upFIFA.siblings('.updateCate').hide()
   })
   $(".upBat a").on("click focus", function(){
      Bat = $(".menu li:eq(5)")
      upBat = $("#upBat")
      Bat.children('a').css({"backgroundImage":"-webkit-linear-gradient(transparent 60%, rgba(0,255,180,0.6) 5px)"})
      Bat.siblings().children('a').css({"backgroundImage":"none"})
      upBat.show()
      upBat.siblings('.updateCate').hide()
   })
   $(".upSims a").on("click focus", function(){
      Sims = $(".menu li:eq(6)")
      upSims = $("#upSims")
      Sims.children('a').css({"backgroundImage":"-webkit-linear-gradient(transparent 60%, rgba(0,255,180,0.6) 5px)"})
      Sims.siblings().children('a').css({"backgroundImage":"none"})
      upSims.show()
      upSims.siblings('.updateCate').hide()
   })
   $(".upF1 a").on("click focus", function(){
      F1 = $(".menu li:eq(7)")
      upF1 = $("#upF1")
      F1.children('a').css({"backgroundImage":"-webkit-linear-gradient(transparent 60%, rgba(0,255,180,0.6) 5px)"})
      F1.siblings().children('a').css({"backgroundImage":"none"})
      upF1.show()
      upF1.siblings('.updateCate').hide()
   })
   $(".upIn a").on("click focus", function(){
      In = $(".menu li:eq(8)")
      upIn = $("#upIn")
      In.children('a').css({"backgroundImage":"-webkit-linear-gradient(transparent 60%, rgba(0,255,180,0.6) 5px)"})
      In.siblings().children('a').css({"backgroundImage":"none"})
      upIn.show()
      upIn.siblings('.updateCate').hide()
 })
}