const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');
    const navLinks = document.querySelectorAll('.navlinks li');
    
    
    
    burger.addEventListener('click', () => {
      //toggle Nav
      nav.classList.toggle('nav-active');
    
      //animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards  ${index / 7 + 0.2}s`;
        }
      });
        //burger animate
        burger.classList.toggle('toggle');
    });
}

navSlide();



var acc = document.getElementsByClassName("sub-menu");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var panel = this.nextElementSibling;
  if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
  } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
  }
  });
}