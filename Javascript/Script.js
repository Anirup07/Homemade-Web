
// function drop() {
//   gsap.to('.dropdown', {
//     y:-600,
//     duration: 0.5 // You can set the duration of the animation
//   });
// }
function drop() {
  var dropdown = document.querySelector('.dropdown');
  if (dropdown.style.top === '70px') {
    dropdown.style.top = '-500px';
  } else {
    dropdown.style.top = '70px';
  }
}

document.addEventListener('click', function(event) {
  var dropdown = document.querySelector('.dropdown');
  var burgerMenu = document.querySelector('.burger-menu');
  var isClickInsideDropdown = dropdown.contains(event.target);
  var isClickInsideBurgerMenu = burgerMenu.contains(event.target);

  if (!isClickInsideDropdown && !isClickInsideBurgerMenu) {
      dropdown.style.top = '-500px';
  }
});

gsap.to(`nav`, {
  backgroundColor: `#fff`,
  duration: 0.8,
  height:`70px`,
  scrollTrigger:{
    trigger:`nav`,
    scroller:`body`,
    start:`top -20%`,
    end: `top 21%`,
    scrub:1,
  }
})
