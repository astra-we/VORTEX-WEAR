const header = document.querySelector("header");

// Header scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.padding = "15px 8%";
  } else {
    header.style.padding = "20px 8%";
  }
});

// Menú mobile
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
}

// Animaciones scroll
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach(el => observer.observe(el));

// Filtros productos
const filterButtons = document.querySelectorAll(".filtro-btn");
const cards = document.querySelectorAll(".productos .card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    filterButtons.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    const filter = button.dataset.filter;

    cards.forEach(card => {

      if (
        filter === "all" ||
        card.dataset.category === filter
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    });
  });
});

// Modal productos
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const buyButtons = document.querySelectorAll(".buy-btn");

const modalTitle = document.querySelector("#modal-title");
const modalPrice = document.querySelector("#modal-price");

buyButtons.forEach(btn => {

  btn.addEventListener("click", () => {

    const card = btn.closest(".card");

    const producto =
      card.querySelector("h3").textContent;

    const precio =
      card.querySelector("p").textContent;

    modalTitle.textContent = producto;
    modalPrice.textContent = precio;

    modal.style.display = "flex";

    const whatsappLink =
      document.querySelector("#whatsapp-link");

    whatsappLink.href =
      `https://wa.me/549375205306?text=Hola,%20quiero%20consultar%20por%20${producto}`;

  });

});

// Cerrar modal botón
if (closeModal) {

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

}

// Cerrar modal clic afuera
window.addEventListener("click", e => {

  if (e.target === modal) {
    modal.style.display = "none";
  }

});

// Cerrar modal con ESC
document.addEventListener("keydown", e => {

  if (e.key === "Escape") {
    modal.style.display = "none";
  }

});
