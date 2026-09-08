// ===== Products — bento grid (11 ô), chỉ ảnh + tên =====
// Ảnh thật từ tiệm — tên sản phẩm tạm, cập nhật khi có thông tin chính thức.
const PRODUCTS = [
  { area: "r1c1", size: "normal", img: "images/product-1.jpg", name: "Móc Khoá Thỏ" },
  { area: "r1c2", size: "normal", img: "images/product-2.jpg", name: "Móc Khoá Cherry" },
  { area: "r1c3", size: "normal", img: "images/product-3.jpg", name: "Móc Khoá Chanh Vàng" },
  { area: "r2wide", size: "wide", img: "images/product-4.jpg", name: "Bó Hoa Len Mini" },
  { area: "r2n", size: "normal", img: "images/product-5.jpg", name: "Móc Khoá Nho" },
  { area: "r3n1", size: "normal", img: "images/product-6.jpg", name: "Thú Bông Handmade" },
  { area: "r3n2", size: "normal", img: "images/product-7.jpg", name: "Doll Tuỳ Chỉnh" },
  { area: "r3big", size: "large", img: "images/product-8.jpg", name: "Bộ Sưu Tập Đặt Riêng" },
  { area: "r4c1", size: "normal", img: "images/product-9.jpg", name: "Móc Khoá Phù Thuỷ" },
  { area: "r4c2", size: "normal", img: "images/product-10.jpg", name: "Doll Áo Len" },
  { area: "r4c3", size: "normal", img: "images/product-11.jpg", name: "Móc Khoá Cười" },
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
