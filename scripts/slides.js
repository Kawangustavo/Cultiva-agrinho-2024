var slideIndex = 0;
carrosel();

function carrosel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  x[slideIndex-1].style.display = "transition 200ms ease";
  setTimeout(carrosel, 2000);
}