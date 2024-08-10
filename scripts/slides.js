var slideIndex = 0;

function carrosel() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("active");
  x[slideIndex-1].style.display = "block";
  setTimeout(carrosel, 2000);
}

carrosel();