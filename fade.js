const DISTANCE_FROM_TOP = 0.6; // How distant the fade element should be when the fade triggers; In this case, it is equals to 60% of the window height. //
let animationTrigger = DISTANCE_FROM_TOP * window.innerHeight;
let fadeElements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  fadeElements.forEach(e => {
    e.getBoundingClientRect().top < animationTrigger
      ? e.classList.add("in")
      : false;
  });
});
