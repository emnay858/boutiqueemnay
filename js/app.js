const products = [
  { id: 1, name: "Playera básica ", category: "playeras", price: 350,  image: "img/playeras_1.jpeg" },
  { id: 2, name: "Crop top de tirantes ", category: "playeras", price: 320, image: "img/playeras_2.jpeg" },
  { id: 3, name: "bodysuit manga larga ", category: "playeras", price: 480, image: "img/playeras_3.jpeg" },
  { id: 4, name: "T-Shirt Hello Kitty unicornio ", category: "playeras", price: 300, image: "img/playeras_5.jpeg" },
  { id: 5, name: "bodysuita básico", category: "playeras", price: 300, image: "img/playeras_6.jpeg" },
  { id: 6, name: "T-Shirt Hello Kitty pedrería", category: "playeras", price: 380, image: "img/playeras_7.jpeg" },
  { id: 7, name: "Crop top manga corta", category: "playeras", price: 299, image: "img/playeras_8.jpeg" },
  { id: 8, name: "Conjunto estampado Serpiente", category: "conjuntos", price: 1050, image: "img/vestido_1.jpeg" },
  { id: 9, name: "Tank dress nudo lateral", category: "vestidos", price: 480, image: "img/vestido_2.jpeg" },
  { id: 10, name: "Conjunto Hoodie y falda", category: "conjuntos", price: 500, image: "img/vestido_3.jpeg" },
  { id: 11, name: "JS tiro alto / dobladillo ancho", category: "pantalones", price: 680, image: "img/pantalon.jpeg" },
  { id: 12, name: "Leggings deportivo tiro alto", category: "pantalones", price: 650, image: "img/pantalon_1.jpeg" },
  { id: 13, name: "Cargo estilo paracaidista", category: "pantalones", price: 550, image: "img/pantalon_2.jpeg" },
  { id: 14, name: "Camisa crop Miu Miu", category: "chamarras", price: 1200, image: "img/chamarra_1.jpeg" },
  { id: 15, name: "Chamarra puffer ligera", category: "chamarras", price: 385, image: "img/chamarra_2.jpeg" },
  { id: 16, name: "Chaleco puffer", category: "chalecos", price: 680, image: "img/chaleco_1.jpeg" },
  { id: 17, name: "Chaleco de punto crop", category: "chalecos", price: 390, image: "img/chaleco_2.jpeg" },
  { id: 18, name: "Conjunto deportivo Adidas", category: "conjuntos", price: 950, image: "img/conjunto_1.jpeg" },
  { id: 19, name: "Conjunto 2 piezas lunares", category: "conjuntos", price: 630, image: "img/conjunto_2.jpeg" },
  { id: 20, name: "Conjunto 3 piezas lunares", category: "conjuntos", price: 880, image: "img/conjunto_3.jpeg" },
  { id: 21, name: "Conjunto Casual 2 piezas", category: "conjuntos", price: 580, image: "img/conjunto_4.jpeg" },
  { id: 22, name: "Conjunto Denim 3 piezas", category: "conjuntos", price: 1050, image: "img/conjunto_5.jpeg" },
  { id: 23, name: "Conjunto deportivo estilo cozy", category: "conjuntos", price: 500, image: "img/conjunto_6.jpeg" },
  { id: 24, name: "Conjunto deportivo yoga", category: "conjuntos", price: 780, image: "img/conjunto_7.jpeg" },
  { id: 25, name: "Conjunto Top asimétrico y pantalón campana", category: "conjuntos", price: 699, image: "img/conjunto_9.jpeg" },
  { id: 26, name: "Playera oversiza de Mickwy Mouse", category: "playeras", price: 430, image: "img/playeras_9.jpeg" },
  { id: 27, name: "Chamarra denim ositos en bolsa", category: "chamarras", price: 1200, image: "img/chamarra_3.jpeg" },
  { id: 28, name: "Chamarra de mezclilla", category: "chamarras", price: 700, image: "img/chamarra_4.jpeg" },
  { id: 29, name: "Chamarra borreguito gamuza", category: "chamarras", price: 1100, image: "img/chamarra_5.jpeg" },
  { id: 30, name: "Conjunto deportivo", category: "conjuntos", price: 799, image: "img/conjunto_10.jpeg" },
  { id: 31, name: "Conjunto hoodie falda deportiva", category: "conjuntos", price: 650, image: "img/conjunto_12.jpeg" },
  { id: 32, name: "Conjunto gamuza", category: "conjuntos", price: 999, image: "img/conjunto_13.jpeg" },
  { id: 33, name: "Pantalon lino palazzo", category: "pantalones", price: 666, image: "img/pantalon_4.jpeg" },
  { id: 34, name: "Jeans tiro alto recto", category: "pantalones", price: 800, image: "img/pantalon_5.jpeg" },
  { id: 35, name: "Jeans wide leg tiro alto", category: "pantalones", price: 599, image: "img/pantalon_6.jpeg" },
  { id: 36, name: "Vestido tipo corset", category: "vestidos", price: 650, image: "img/vestido_4.jpeg" },
  { id: 37, name: "Vestido polo tejido", category: "vestidos", price: 550, image: "img/vestido_8.jpeg" },
  { id: 38, name: "Vestido de mezclilla tipo midi", category: "vestidos", price: 799, image: "img/vestido_9.jpeg" },
  { id: 39, name: "Vestido boho de olanes", category: "vestidos", price: 549, image: "img/vestido_11.jpeg" },
  { id: 40, name: "Vestido manga puff", category: "vestidos", price: 399, image: "img/vestido_13.jpeg" },
  { id: 41, name: "Pantalon paperbag sastre", category: "pantalones", price: 699, image: "img/pantalon_7.jpeg" },
  { id: 42, name: "Top corset", category: "playeras", price: 520, image: "img/playeras_10.jpeg" },
  { id: 43, name: "Top basico con encaje", category: "playeras", price: 520, image: "img/playeras_11.jpeg" },
  { id: 44, name: "Blusa tejida", category: "blusas", price: 320, image: "img/blusas_1.jpeg" },
  { id: 45, name: "Blusa nezclilla", category: "blusas", price: 499, image: "img/blusa_3.jpeg" },
  { id: 46, name: "Blusa tipo peplum cruzado", category: "blusas", price: 899, image: "img/blusa_4.jpeg" },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const money = value =>
  value.toLocaleString("es-MX", { style: "currency", currency: "MXN" });

function renderProducts(category = "todos") {
  const container = document.getElementById("products");
  const filtered = category === "todos"
    ? products
    : products.filter(p => p.category === category);

  container.innerHTML = filtered.map(product => `
    <article class="product">
      <img class="product-image" src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <h3>${product.name}</h3>
        <div class="price">${money(product.price)}<br> </div>
        <button class="btn" onclick="addToCart(${product.id})">
          Agregar al carrito
        </button>
      </div>
    </article>
  `).join("");
}

function addToCart(id) {
  const item = cart.find(p => p.id === id);
  if (item) item.quantity++;
  else cart.push({ ...products.find(p => p.id === id), quantity: 1 });

  saveCart();
  renderCart();
  openCart();
}

function changeQuantity(id, delta) {
  const item = cart.find(p => p.id === id);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) cart = cart.filter(p => p.id !== id);
  saveCart();
  renderCart();
}

function renderCart() {
  const items = document.getElementById("cartItems");
  const count = cart.reduce((sum, p) => sum + p.quantity, 0);
  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartTotal").textContent = money(total);

  if (!cart.length) {
    items.innerHTML = "<p>Tu carrito está vacío.</p>";
    return;
  }

  items.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <strong>${item.name}</strong>
        <div>${money(item.price)}</div>
        <div class="quantity">
          <button onclick="changeQuantity(${item.id}, -1)">−</button>
          <span>${item.quantity}</span>
          <button onclick="changeQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
    </div>
  `).join("");
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function openCart() {
  document.getElementById("cartModal").classList.remove("hidden");
}

function closeCart() {
  document.getElementById("cartModal").classList.add("hidden");
}

function sendWhatsApp() {
  if (!cart.length) {
    alert("Agrega al menos un producto.");
    return;
  }

  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);
  const lines = cart.map(p =>
    `• ${p.name} x${p.quantity} - ${money(p.price * p.quantity)}`
  );

  const message =
    `Hola, quiero hacer este pedido:%0A%0A` +
    `${lines.join("%0A")}%0A%0A` +
    `Total: ${money(total)}`;

  // WhatsApp de tu negocio.
  const phone = "5579149286";
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

document.getElementById("categoryFilter")
  .addEventListener("change", e => renderProducts(e.target.value));

document.getElementById("cartButton")
  .addEventListener("click", openCart);

document.getElementById("closeCart")
  .addEventListener("click", closeCart);

document.getElementById("clearCart")
  .addEventListener("click", () => {
    cart = [];
    saveCart();
    renderCart();
  });

document.getElementById("whatsappButton")
  .addEventListener("click", sendWhatsApp);

document.getElementById("cartModal")
  .addEventListener("click", e => {
    if (e.target.id === "cartModal") closeCart();
  });

document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();
renderCart();
