// script.js
window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    let scrollY = window.scrollY;
    let fadeStart = 0;
    let fadeEnd = 200; // adjust this value to control when it fully fades
    let opacity = 1;
  
    if (scrollY <= fadeStart) {
      opacity = 1;
    } else if (scrollY >= fadeEnd) {
      opacity = 0;
    } else {
      opacity = 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);
    }
  
    hero.style.opacity = opacity;
  });
  