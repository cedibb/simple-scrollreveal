let distanceFromTop = 0.6 * window.innerHeight; // How distant the fade element should be when the fade triggers;
                                                  //In this case, it is equals to 60% of the window height.

function elementFade(element) {
  if (element.getBoundingClientRect().top < distanceFromTop) {
    element.classList.add('in');
  }
  
  // Uncomment for elements to fade-in and out on scroll
  //  else { element.classList.remove('in'); }
}

function scanForFadeElements() {
  let fadeElements = document.getElementsByClassName("fade");
  for(let i = 0; i < fadeElements.length; i++) {
    elementFade(fadeElements[i]);
  }
}

window.addEventListener('scroll', scanForFadeElements);
