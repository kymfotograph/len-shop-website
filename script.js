// ===== Sample product data (placeholder — replace with real photos/prices) =====
const PRODUCTS = [
  { name: "Len Cotton Trơn", type: "Cotton mềm mại", price: "45.000đ", color: "#e0a945" },
  { name: "Len Mohair Bông", type: "Mohair siêu mịn", price: "68.000đ", color: "#c97b4a" },
  { name: "Len Acrylic Đa Sắc", type: "Acrylic bền màu", price: "38.000đ", color: "#8fa68e" },
  { name: "Len Merino Cao Cấp", type: "Merino ấm áp", price: "89.000đ", color: "#d98b8b" },
  { name: "Len Sợi Xoắn", type: "Sợi xoắn chắc tay", price: "52.000đ", color: "#7f9fc9" },
  { name: "Len Nhung Baby", type: "Mềm cho đồ trẻ em", price: "60.000đ", color: "#e0a945" },
];

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map((p) => `
    <div class="product-card">
      <div class="product-thumb" style="background:${hexToSoftBg(p.color)}">
        <div class="ball" style="color:${p.color}"></div>
      </div>
      <div class="product-name">${p.name}</div>
      <div class="product-meta">${p.type}</div>
      <div class="product-price">${p.price}</div>
      <div class="product-actions">
        <a href="#lien-he" class="btn btn-primary btn-small btn-block">Đặt hàng</a>
      </div>
    </div>
  `).join("");
}

function hexToSoftBg(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, 0.14)`;
}

// ===== Mobile nav toggle =====
function initNavToggle() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

// ===== Footer year =====
function setFooterYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  initNavToggle();
  setFooterYear();
});
