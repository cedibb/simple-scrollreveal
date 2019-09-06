/**
 * @param {float} distanceFromTop How distant the fade element should be when the fade triggers; E.g. 0.6 is equals to 60% of the window height
 */

export default function(distanceFromTop) {
  let animationTrigger = distanceFromTop * window.innerHeight;
  let fadeElements = document.querySelectorAll(".fade");

  window.addEventListener("scroll", () =>
    fadeElements.forEach(e => {
      if (e.getBoundingClientRect().top < animationTrigger)
        e.classList.add("in");
    })
  );
}
