// ===== Products — repeating bento pattern (16 lines), image + name only =====
// Real shop photos — names are placeholders, update once confirmed.
const PRODUCTS = [
  // Line 1 (3 cards)
  { area: "l1a", size: "normal", img: "images/product-1.jpg", name: "Mini Flower" },
  { area: "l1b", size: "normal", img: "images/product-2.jpg", name: "Tulip", pos: "center bottom" },
  { area: "l1c", size: "normal", img: "images/product-3.jpg", name: "Bel Flower", pos: "center bottom" },
  // Line 2 (wide + normal)
  { area: "l2w", size: "wide", img: "images/product-4.jpg", name: "Character Doll" },
  { area: "l2n", size: "normal", img: "images/product-5.jpg", name: "Mario Doll" },
  // Line 3 (stack + big)
  { area: "l3a", size: "normal", img: "images/product-6.jpg", name: "Handmade Plush" },
  { area: "l3b", size: "normal", img: "images/product-7.jpg", name: "Custom Doll" },
  { area: "l3big", size: "large", img: "images/product-8.jpg", name: "Featured Piece" },
  // Line 4 (3 cards) — 2 outer cards swapped
  { area: "l4a", size: "normal", img: "images/product-11.jpg", name: "Plush Charm" },
  { area: "l4b", size: "normal", img: "images/product-10.jpg", name: "Blue Flower Doll" },
  { area: "l4c", size: "normal", img: "images/product-9.jpg", name: "Keychain Charm" },
  // Line 5 (3 cards)
  { area: "l5a", size: "normal", img: "images/product-12.jpg", name: "Bunny Keychain" },
  { area: "l5b", size: "normal", img: "images/product-13.jpg", name: "Pin Charm" },
  { area: "l5c", size: "normal", img: "images/product-14.jpg", name: "Custom Order" },
  // Line 6 (normal + wide, wide on the right)
  { area: "l6n", size: "normal", img: "images/product-15.jpg", name: "Mystery Charm" },
  { area: "l6w", size: "wide", img: "images/product-16.jpg", name: "Flower Charm" },
  // Line 7 (big on the left + stack)
  { area: "l7big", size: "large", img: "images/product-17.jpg", name: "Featured Doll" },
  { area: "l7a", size: "normal", img: "images/product-18.jpg", name: "Custom Figure" },
  { area: "l7b", size: "normal", img: "images/product-19.jpg", name: "Keychain Charm" },
  // Line 8 (3 cards)
  { area: "l8a", size: "normal", img: "images/product-20.jpg", name: "Handmade Charm" },
  { area: "l8b", size: "normal", img: "images/product-21.jpg", name: "Doll Charm" },
  { area: "l8c", size: "normal", img: "images/product-22.jpg", name: "Mini Keychain" },
  // Line 9 (stack + big)
  { area: "l9a", size: "normal", img: "images/product-23.jpg", name: "Plush Toy" },
  { area: "l9b", size: "normal", img: "images/product-24.jpg", name: "Doll Charm" },
  { area: "l9big", size: "large", img: "images/product-25.jpg", name: "Featured Piece" },
  // Line 10 (3 cards)
  { area: "l10a", size: "normal", img: "images/product-26.jpg", name: "Character Charm", pos: "center bottom" },
  { area: "l10b", size: "normal", img: "images/product-27.jpg", name: "Keychain Charm" },
  { area: "l10c", size: "normal", img: "images/product-28.jpg", name: "Handmade Doll" },
  // Line 11 (wide + normal)
  { area: "l11w", size: "wide", img: "images/product-29.jpg", name: "Witch Keychain" },
  { area: "l11n", size: "normal", img: "images/product-30.jpg", name: "Mini Charm" },
  // Line 12 (stack + big)
  { area: "l12a", size: "normal", img: "images/product-31.jpg", name: "Custom Figure" },
  { area: "l12b", size: "normal", img: "images/product-32.jpg", name: "Plush Charm" },
  { area: "l12big", size: "large", img: "images/product-33.jpg", name: "Flower Charm" },
  // Line 13 (3 cards)
  { area: "l13a", size: "normal", img: "images/product-34.jpg", name: "Handmade Charm" },
  { area: "l13b", size: "normal", img: "images/product-35.jpg", name: "Flower Charm" },
  { area: "l13c", size: "normal", img: "images/product-36.jpg", name: "Pin Charm" },
  // Line 14 (3 cards)
  { area: "l14a", size: "normal", img: "images/product-37.jpg", name: "Mini Keychain" },
  { area: "l14b", size: "normal", img: "images/product-38.jpg", name: "Custom Charm" },
  { area: "l14c", size: "normal", img: "images/product-39.jpg", name: "Doll Charm" },
  // Line 15 (stack + big)
  { area: "l15a", size: "normal", img: "images/product-40.jpg", name: "Smiley Charm" },
  { area: "l15b", size: "normal", img: "images/product-41.jpg", name: "Smiley Charm" },
  { area: "l15big", size: "large", img: "images/product-42.jpg", name: "Rose Doll" },
  // Line 16 (3 cards)
  { area: "l16a", size: "normal", img: "images/product-43.jpg", name: "Custom Charm" },
  { area: "l16b", size: "normal", img: "images/product-44.jpg", name: "Custom Charm" },
  { area: "l16c", size: "normal", img: "images/product-45.jpg", name: "Handmade Charm" },
  // Line 17 (3 cards)
  { area: "l17a", size: "normal", img: "images/product-46.jpg", name: "Handmade Charm" },
  { area: "l17b", size: "normal", img: "images/product-47.jpg", name: "Keychain Charm" },
  { area: "l17c", size: "normal", img: "images/product-48.jpg", name: "Custom Doll" },
  // Line 18 (wide + normal)
  { area: "l18w", size: "wide", img: "images/product-49.jpg", name: "Featured Charm" },
  { area: "l18n", size: "normal", img: "images/product-50.jpg", name: "Mini Charm" },
  // Line 19 (stack + big)
  { area: "l19a", size: "normal", img: "images/product-51.jpg", name: "Plush Charm" },
  { area: "l19b", size: "normal", img: "images/product-52.jpg", name: "Doll Charm" },
  { area: "l19big", size: "large", img: "images/product-53.jpg", name: "Featured Piece" },
];

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map((p) => `
    <div class="product-card bento-${p.size}" style="grid-area:${p.area}">
      <div class="product-thumb">
        <img src="${p.img}" alt="${p.name}" loading="lazy"${p.pos ? ` style="object-position:${p.pos}"` : ""}>
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

// ===== Copy email (About section) =====
function initEmailCopy() {
  const btn = document.getElementById("aboutEmail");
  if (!btn) return;
  const original = btn.innerHTML;
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.email);
      btn.innerHTML = "Copied!";
      setTimeout(() => { btn.innerHTML = original; }, 1500);
    } catch {
      // clipboard unavailable — no-op
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setFooterYear();
  initEmailCopy();
});
