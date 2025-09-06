document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector('.hamburger');
  const sideNav = document.querySelector('.navbar');

  if (hamburger && sideNav) {
    hamburger.addEventListener('click', () => {
      sideNav.classList.toggle('activate');
    });
  }

  const close = document.querySelector('.close');

  if(close){
    close.addEventListener('click', () => {
        sideNav.classList.toggle('activate');
    })
  }
});