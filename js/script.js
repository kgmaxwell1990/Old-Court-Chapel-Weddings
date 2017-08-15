 $(document).ready(function () {

  $(".box").hide(0).fadeIn(3000);
  $(".card").hide(0).fadeIn(3000);


  $("#carousel").carousel();


  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function(){

          this.classList.toggle("active");

          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      }
  }

        var  mn = $("#main-nav");
            mns = "main-nav-scrolled";
            hdr = $('header').height();

        $(window).scroll(function() {
          if( $(this).scrollTop() > hdr ) {
            mn.addClass(mns);
          } else {
            mn.removeClass(mns);
          }
        });

});






