// ===== Products — bento grid (11 items), image + name only =====
// Real shop photos — names are placeholders, update once confirmed.
const PRODUCTS = [
  { area: "r1c1", size: "normal", img: "images/product-1.jpg", name: "Bunny Keychain" },
  { area: "r1c2", size: "normal", img: "images/product-2.jpg", name: "Cherry Keychain" },
  { area: "r1c3", size: "normal", img: "images/product-3.jpg", name: "Lemon Keychain" },
  { area: "r2wide", size: "wide", img: "images/product-4.jpg", name: "Mini Flower Bouquet" },
  { area: "r2n", size: "normal", img: "images/product-5.jpg", name: "Grape Keychain" },
  { area: "r3n1", size: "normal", img: "images/product-6.jpg", name: "Handmade Plush Toy" },
  { area: "r3n2", size: "normal", img: "images/product-7.jpg", name: "Custom Doll" },
  { area: "r3big", size: "large", img: "images/product-8.jpg", name: "Custom Order Collection" },
  { area: "r4c1", size: "normal", img: "images/product-9.jpg", name: "Witch Keychain" },
  { area: "r4c2", size: "normal", img: "images/product-10.jpg", name: "Sweater Doll" },
  { area: "r4c3", size: "normal", img: "images/product-11.jpg", name: "Smiley Keychain" },
];

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map((p) => `
    <div class="product-card bento-${p.size}" style="grid-area:${p.area}">
      <div class="product-thumb">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
      </div>
      <p class="product-name">${p.name}</p>
    </div>
  `).join("");
}

// ===== Footer year =====
function setFooterYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setFooterYear();
});
