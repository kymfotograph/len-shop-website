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
  // Block 2 — same 4-row bento pattern repeated (placeholder photos, swap later)
  { area: "b1c1", size: "normal", img: "images/product-12.jpg", name: "Bunny Charm" },
  { area: "b1c2", size: "normal", img: "images/product-13.jpg", name: "Mario Doll" },
  { area: "b1c3", size: "normal", img: "images/product-14.jpg", name: "Witch Doll" },
  { area: "b2wide", size: "wide", img: "images/product-15.jpg", name: "Flower Charm" },
  { area: "b2n", size: "normal", img: "images/product-16.jpg", name: "Mystery Charm" },
  { area: "b3n1", size: "normal", img: "images/product-17.jpg", name: "Custom Figure" },
  { area: "b3n2", size: "normal", img: "images/product-18.jpg", name: "Plush Charm" },
  { area: "b3big", size: "large", img: "images/product-19.jpg", name: "Featured Piece" },
  { area: "b4c1", size: "normal", img: "images/product-20.jpg", name: "Doll Outfit" },
  { area: "b4c2", size: "normal", img: "images/product-21.jpg", name: "Keychain Set" },
  { area: "b4c3", size: "normal", img: "images/product-22.jpg", name: "Handmade Charm" },
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
