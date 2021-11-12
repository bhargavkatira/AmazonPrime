// colusal-manula+automatic
var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
   

} 

var slidePosition = 0;
SlideShowe();

function SlideShowe() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (var j = 0; j < circles.length; j++) {
      circles[j].className = circles[j].className.replace("enable", "");
  }
  
  if (slidePosition > slides.length-1) 
  {
      slidePosition = 0;

}
slidePosition++;
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " enable";
setTimeout(SlideShowe, 5000);
   
}