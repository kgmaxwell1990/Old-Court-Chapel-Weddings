 $(document).ready(function () {
 	// var galleryTop = new Swiper('.gallery-top', {
  //       nextButton: '.swiper-button-next',
  //       prevButton: '.swiper-button-prev',
  //       spaceBetween: 10,
  //   });
  //   var galleryThumbs = new Swiper('.gallery-thumbs', {
  //       spaceBetween: 10,
  //       centeredSlides: true,
  //       slidesPerView: 'auto',
  //       touchRatio: 0.2,
  //       slideToClickedSlide: true
  //   });

  //   galleryTop.params.control = galleryThumbs;
  //   galleryThumbs.params.control = galleryTop;

  $(".box").hide(0).fadeIn(3000);
  $(".card").hide(0).fadeIn(3000);

 //  $( function() {
 //    $( "#accordion" ).accordion({
 //      collapsible: true
 //    });
 //  } );
 // });


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
});
 // $(".accordion").on("click", ".accordionheader", function() {
 // 	$(this).toggleClass("active").next().slideToggle();
 // });