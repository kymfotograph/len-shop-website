// ===== Featured products — bento layout (1 large + 4 small) =====
// Real photos from the shop, placeholder names/prices — update once confirmed.
const PRODUCTS = [
  {
    area: "feat-a",
    size: "wide",
    img: "images/product-1.jpg",
    name: "Móc Khoá Hoa Len",
    type: "Hoa len 3D nhiều màu",
    price: "35.000đ",
  },
  {
    area: "feat-b",
    size: "small",
    img: "images/product-2.jpg",
    name: "Móc Khoá Trái Cherry",
    type: "Đan tay, sợi bóng mềm",
    price: "30.000đ",
  },
  {
    area: "feat-c",
    size: "small",
    img: "images/product-3.jpg",
    name: "Móc Khoá Thỏ Bông",
    type: "Thú bông mini dễ thương",
    price: "45.000đ",
  },
  {
    area: "feat-d",
    size: "small",
    img: "images/product-4.jpg",
    name: "Móc Khoá Phù Thuỷ",
    type: "Chi tiết tỉ mỉ, độc bản",
    price: "55.000đ",
  },
  {
    area: "feat-e",
    size: "large",
    img: "images/product-5.jpg",
    name: "Đặt Riêng Theo Yêu Cầu",
    type: "Thú bông, doll nhân vật, móc khoá — đủ mẫu, đủ màu",
    price: "Liên hệ báo giá",
  },
];

function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map((p) => `
    <div class="product-card bento-${p.size}" style="grid-area:${p.area}">
      <div class="product-thumb">
        <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.closest('.product-thumb').classList.add('thumb-fallback')">
      </div>
      <div class="product-name">${p.name}</div>
      <div class="product-meta">${p.type}</div>
      <div class="product-price">${p.price}</div>
      <div class="product-actions">
        <a href="#lien-he" class="btn btn-outline btn-small btn-block">Xem chi tiết</a>
        <a href="#lien-he" class="btn btn-primary btn-small btn-block">Đặt hàng</a>
      </div>
    </div>
  `).join("");
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
