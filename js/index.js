$(document).ready(function(){
   allMenu();
   menuBox();
   btnClick();
   hideVideo();
   showVideo();
   $("#upNews").siblings('.updateCate').hide();
      
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
   const content = "Electronic Arts is \n the ultimate destination for \n everything";
   const text = document.querySelector("#typing .text");
   let i = 0;
   function typing(){
       let txt = content[i++];
       text.innerHTML += txt=== "\n" ? "<br/>": txt;
       if (i > content.length) {
           text.textContent = "";
           i = 0;
       }
   }
   setInterval(typing, 150)

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
 function clickNews(){
    Newsa =  $(".menu li:eq(0)")
    upNews = $("#upNews")
    Newsa.children('a').css({"backgroundImage":"-webkit-linear-gradient(transparent 60%, rgba(0,255,180,0.6) 5px)"})
    Newsa.siblings().children('a').css({"backgroundImage":"none"})
    upNews.show()
    upNews.siblings('.updateCate').hide()
 }
 function clickPlay(){
    Playa = $(".menu li:eq(1)")
    upPlay = $("#upPlay")
    Playa.children('a').css({"backgroundImage":"-webkit-linear-gradient(transparent 60%, rgba(0,255,180,0.6) 5px)"})
    Playa.siblings().children('a').css({"backgroundImage":"none"})
    upPlay.show()
    upPlay.siblings('.updateCate').hide()
 }
 function clickNFL(){
    NFL = $(".menu li:eq(2)")
    upNFL = $("#upNFL")
    NFL.children('a').css({"backgroundImage":"-webkit-linear-gradient(transparent 60%, rgba(0,255,180,0.6) 5px)"})
    NFL.siblings().children('a').css({"backgroundImage":"none"})
    upNFL.show()
    upNFL.siblings('.updateCate').hide()
 }
 function clickApex(){
    Apex = $(".menu li:eq(3)")
    upApex = $("#upApex")
    Apex.children('a').css({"backgroundImage":"-webkit-linear-gradient(transparent 60%, rgba(0,255,180,0.6) 5px)"})
    Apex.siblings().children('a').css({"backgroundImage":"none"})
    upApex.show()
    upApex.siblings('.updateCate').hide()
 }
 function clickFIFA(){
    FIFA = $(".menu li:eq(4)")
    upFIFA = $("#upFIFA")
    FIFA.children('a').css({"backgroundImage":"-webkit-linear-gradient(transparent 60%, rgba(0,255,180,0.6) 5px)"})
    FIFA.siblings().children('a').css({"backgroundImage":"none"})
    upFIFA.show()
    upFIFA.siblings('.updateCate').hide()
 }
 function clickBat(){
    Bat = $(".menu li:eq(5)")
    upBat = $("#upBat")
    Bat.children('a').css({"backgroundImage":"-webkit-linear-gradient(transparent 60%, rgba(0,255,180,0.6) 5px)"})
    Bat.siblings().children('a').css({"backgroundImage":"none"})
    upBat.show()
    upBat.siblings('.updateCate').hide()
 }
 function clickSims(){
    Sims = $(".menu li:eq(6)")
    upSims = $("#upSims")
    Sims.children('a').css({"backgroundImage":"-webkit-linear-gradient(transparent 60%, rgba(0,255,180,0.6) 5px)"})
    Sims.siblings().children('a').css({"backgroundImage":"none"})
    upSims.show()
    upSims.siblings('.updateCate').hide()
 }
 function clickF1(){
    F1 = $(".menu li:eq(7)")
    upF1 = $("#upF1")
    F1.children('a').css({"backgroundImage":"-webkit-linear-gradient(transparent 60%, rgba(0,255,180,0.6) 5px)"})
    F1.siblings().children('a').css({"backgroundImage":"none"})
    upF1.show()
    upF1.siblings('.updateCate').hide()
 }
 function clickIn(){
    In = $(".menu li:eq(8)")
    upIn = $("#upIn")
    In.children('a').css({"backgroundImage":"-webkit-linear-gradient(transparent 60%, rgba(0,255,180,0.6) 5px)"})
    In.siblings().children('a').css({"backgroundImage":"none"})
    upIn.show()
    upIn.siblings('.updateCate').hide()
 }