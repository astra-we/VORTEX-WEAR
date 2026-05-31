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

if(menuToggle && nav){

  menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

  });

}

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
const modal =
document.querySelector(".modal");

const closeModal =
document.querySelector(".close-modal");

const buyButtons =
document.querySelectorAll(".buy-btn");

const modalTitle =
document.querySelector("#modal-title");

const modalPrice =
document.querySelector("#modal-price");

buyButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

const card =
btn.parentElement;

modalTitle.textContent =
card.querySelector("h3").textContent;

modalPrice.textContent =
card.querySelector("p").textContent;

modal.style.display="flex";

const whatsappLink =
document.querySelector("#whatsapp-link");

const producto =
card.querySelector("h3").textContent;

whatsappLink.href =
`https://wa.me/5493760000000?text=Hola,%20quiero%20consultar%20por%20${producto}`;

});

});

if(closeModal){

closeModal.addEventListener("click",()=>{

modal.style.display="none";

});

}

window.addEventListener("click",(e)=>{

if(e.target===modal){

modal.style.display="none";

}

});
