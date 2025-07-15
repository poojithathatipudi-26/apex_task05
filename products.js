const products = [
  {
    name: "Laptop",
    price: 55000,
    img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    description: "Powerful laptop with 16GB RAM & 512GB SSD."
  },
  {
    name: "Smartphone",
    price: 15000,
    img: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
    description: "Budget phone with long battery life."
  },
  {
    name: "Headphones",
    price: 2000,
    img: "https://cdn-icons-png.flaticon.com/512/861/861060.png",
    description: "Wireless over-ear headphones with noise cancellation."
  },
  {
    name: "Keyboard",
    price: 999,
    img: "https://cdn-icons-png.flaticon.com/512/3103/3103446.png",
    description: "Backlit mechanical keyboard for fast typing."
  },
  {
    name: "Smartwatch",
    price: 4999,
    img: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
    description: "Track steps, sleep, and health metrics all day."
  },
  {
    name: "Monitor",
    price: 12000,
    img: "https://cdn-icons-png.flaticon.com/512/1055/1055688.png",
    description: "27-inch 2K resolution monitor for designers."
  }
];

function displayProducts(filtered = products) {
  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  if (filtered.length === 0) {
    productList.innerHTML = "<p>No products found.</p>";
    return;
  }

  filtered.forEach((p) => {
    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      <div class="product-img-wrapper">
        <img src="${p.img}" alt="${p.name}" class="product-img" />
        <div class="product-hover">${p.description}</div>
      </div>
      <h3>🛒 ${p.name}</h3>
      <p>₹${p.price}</p>
    `;
    productList.appendChild(div);
  });
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = products.filter((p) => p.name.toLowerCase().includes(query));
  displayProducts(filtered);
});

window.addEventListener("DOMContentLoaded", () => {
  displayProducts();
  if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark-mode");
  }
});
