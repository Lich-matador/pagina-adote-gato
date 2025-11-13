// Dados fictícios dos produtos
const products = [
    { id: 1, name: "Feijoada Nordestina", price: 50, image: "https://via.placeholder.com/300x200?text=Feijoada" },
    { id: 2, name: "Carne de Sol com Nhoque", price: 60, image: "https://via.placeholder.com/300x200?text=Carne+de+Sol" },
    { id: 3, name: "Moqueca Baiana", price: 70, image: "https://via.placeholder.com/300x200?text=Moqueca" }
];

// Função para adicionar os produtos ao catálogo
function displayProducts() {
    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("col-md-4");
        productCard.classList.add("mb-4");

        productCard.innerHTML = `
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">R$ ${product.price}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;

        productList.appendChild(productCard);
    });
}

// Função para adicionar ao carrinho
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartDisplay();
}

// Função para exibir o carrinho
function updateCartDisplay() {
    const cartItems = document.getElementById("cart-items");
    const checkoutButton = document.getElementById("checkout-btn");

    if (cart.length === 0) {
        cartItems.innerHTML = "<p class='text-center'>Seu carrinho está vazio.</p>";
        checkoutButton.disabled = true;
    } else {
        const cartHTML = cart.map(item => `
            <p>${item.name} - R$ ${item.price}</p>
        `).join("");
        cartItems.innerHTML = cartHTML;
        checkoutButton.disabled = false;
    }
}

// Inicializando os produtos ao carregar a página
window.onload = displayProducts;
