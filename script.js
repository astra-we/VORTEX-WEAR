const header = document.querySelector("header");

if(header){

  window.addEventListener("scroll", () => {

    header.style.padding =
      window.scrollY > 50
      ? "15px 8%"
      : "20px 8%";

  });

}

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

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add("show");

      observer.unobserve(entry.target);

    }

  });
});

hiddenElements.forEach(el => observer.observe(el));

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

const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");

const modalTitle = document.querySelector("#modal-title");
const modalPrice = document.querySelector("#modal-price");

const infoButtons = document.querySelectorAll(".info-btn");

infoButtons.forEach(btn => {

  btn.addEventListener("click", () => {

    const card = btn.closest(".card");

    const producto =
      card.querySelector("h3").textContent;

    const precio =
      card.querySelector("p").textContent;

    modalTitle.textContent = producto;
    modalPrice.textContent = precio;

    modal.style.display = "flex";

    document.querySelector("#whatsapp-link").href =
      `https://wa.me/549375205306?text=Hola,%20quiero%20consultar%20por%20${producto}`;

  });

});

if (closeModal) {

  closeModal.addEventListener("click", () => {

    modal.style.display = "none";

  });

}

window.addEventListener("click", e => {

  if (e.target === modal) {

    modal.style.display = "none";

  }

});

let carrito = JSON.parse(
  localStorage.getItem("carrito")
) || [];

let contador =
  document.getElementById("contador");

let lista =
  document.getElementById("lista-carrito");

function actualizarCarrito() {

  if (!contador || !lista) return;

  contador.textContent = carrito.length;

  lista.innerHTML = "";

  let total = 0;

  carrito.forEach(item => {

    lista.innerHTML += `
      <li>
        ${item.nombre}
        - $${item.precio.toLocaleString("es-AR")}
      </li>
    `;

    total += item.precio;

  });

  const totalElemento =
    document.getElementById("total");

  if (totalElemento) {

    totalElemento.textContent =
      total.toLocaleString("es-AR");

  }

  localStorage.setItem(
    "carrito",
    JSON.stringify(carrito)
  );

}

const botones =
  document.querySelectorAll(".buy-btn");

botones.forEach(btn => {

  btn.addEventListener("click", () => {

    const producto =
      btn.dataset.producto;

    const precio =
      Number(btn.dataset.precio);

    carrito.push({
      nombre: producto,
      precio: precio
    });

    actualizarCarrito();

  });

});

const vaciar =
  document.getElementById("vaciar");

if (vaciar) {

  vaciar.addEventListener("click", () => {

    carrito = [];

    actualizarCarrito();

    localStorage.removeItem("carrito");

  });

}

actualizarCarrito();

document.getElementById("comprar")
.addEventListener("click", function(){

if(carrito.length === 0){

alert("Tu carrito está vacío");

return;

}

let mensaje =
"Hola, quiero comprar:%0A%0A";

carrito.forEach(producto => {

mensaje +=
`• ${producto.nombre} - $${producto.precio.toLocaleString("es-AR")}%0A`;

});

let total = 0;

carrito.forEach(producto => {

total += producto.precio;

});

mensaje +=
`%0ATotal: $${total.toLocaleString("es-AR")}`;

window.open(
`https://wa.me/549375205306?text=${mensaje}`
);

});
