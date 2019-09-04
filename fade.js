
let fadeElements = document.querySelectorAll(".fade");
let distanceFromTop = 0.6 * window.innerHeight; /* How distant the fade element should be when the fade triggers;
                                                   In this case, it is equals to 60% of the window height. */
window.addEventListener('scroll', () => {
  fadeElements.forEach((e) => {
    (e.getBoundingClientRect().top < distanceFromTop) ? e.classList.add('in') : false
  });
});
