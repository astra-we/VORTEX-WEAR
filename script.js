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

const hiddenElements =
document.querySelectorAll(".hidden");

const observer =
new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

});

hiddenElements.forEach((el)=>{

  observer.observe(el);

});
const filterButtons =
document.querySelectorAll(".filtro-btn");

const cards =
document.querySelectorAll(".card");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>
btn.classList.remove("active"));

button.classList.add("active");

const filter =
button.dataset.filter;

cards.forEach(card=>{

if(
filter==="all" ||
card.dataset.category===filter
){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

});
