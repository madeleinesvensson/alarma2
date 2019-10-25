function checkForVisibility() {
  var headers = document.querySelectorAll(".animateIn, .animateRight");
  headers.forEach(function(header) {
    if (isElementInViewport(header)) {
      header.classList.add("animateInVisible");
    } else {
      //header.classList.remove("headerVisible");
    }
  });
}

function isElementInViewport (el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

if (window.addEventListener) {
  addEventListener('DOMContentLoaded', checkForVisibility, false); 
  addEventListener('load', checkForVisibility, false);
  addEventListener('scroll', checkForVisibility, false);
}