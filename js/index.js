// var button = document.getElementById('hamburger');
// var navbar = document.getElementById('right-side-nav');

// button.onclick = function(){

//     if(navbar.style.top = "5rem"){
//         navbar.style.top = "-100rem";
//     }
//     else{
//         navbar.style.top = "5rem";
//     }
// }

// $(document).ready(function(){
//     $("#hamburger").click(function(){
//         $("#nav").toggleClass("open");
//       });
// });
// document.getElementById('card').onmouseover = function(){
//   alert("Please");
//   document.getElementsByClassName('card-icon').style.color = "white";
//   document.getElementsByClassName('card-body').style.color = "white";
//   document.getElementsByClassName('read-more-in-card').style.color = "white";
// }

  
  $(document).ready(function(){
    $("#row1").click(function(){
      $("#body1").slideToggle("slow");
      $("#row1").toggleClass("slide" );
      $(".open1").toggleClass("rotate");
    });
  });
  $(document).ready(function(){
    $("#row2").click(function(){
      $("#row2").toggleClass("slide" );
      $("#body2").slideToggle("slow");
      $(".open2").toggleClass("rotate");
    });
  });
  $(document).ready(function(){
    $("#row3").click(function(){
      $("#body3").slideToggle("slow");
      $("#row3").toggleClass("slide" );
      $(".open3").toggleClass("rotate");
    });
  });
  $(document).ready(function(){
    $("#row4").click(function(){
      $("#body4").slideToggle("slow");
      $("#row4").toggleClass("slide" );
      $(".open4").toggleClass("rotate");
    });
  });
  $(document).ready(function(){
    $("#row5").click(function(){
      $(".open5").toggleClass("rotate");
      $("#body5").slideToggle("slow");
      $("#row5").toggleClass("slide" );
    });
  });
  $(document).ready(function(){
    $("#row6").click(function(){
      $(".open6").toggleClass("rotate");
      $("#body6").slideToggle("slow");
      $("#row6").toggleClass("slide" );
    });
  });


