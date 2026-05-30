window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if(window.scrollY > 50){

    header.style.padding = "15px 8%";

  }else{

    header.style.padding = "20px 8%";

  }

});

const menuToggle = document.querySelector(".menu-toggle");

const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {

  nav.classList.toggle("active");

});
