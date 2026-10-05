// 1. Page elements and variables
const productList = document.getElementById("product-list");
const productDialog = document.getElementById("product-dialog");
const cartDialog = document.getElementById("cart-dialog");
const cartItems = document.getElementById("cart-items");
const customerName = document.getElementById("customer-name");
const whatsappNumber = "77755194518"; // Replace with your number before publishing.
let cart = {};
let selectedProduct = 1;
let totalPrice = 0;

// Each product starts with a quantity of zero.
for (let i = 0; i < products.length; i++) {
    cart[products[i].id] = 0;
}

// 2. Format a price, for example: 85,000 ₸
function formatPrice(price) {
    return price.toLocaleString("en-US") + " ₸";
}

// 3. Show all products or one category.
function showProducts(category, button) {
    productList.innerHTML = "";
    let count = 0;
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        if (category === "All" || product.category === category) {
            productList.innerHTML += `
                <article class="product-card">
                    <button class="product-image" onclick="openProduct(${i})" aria-label="View ${product.name}">
                        <img src="${product.image}" alt="${product.name}" width="420" height="540" loading="lazy">
                    </button>
                    <p class="product-category">${product.category}</p>
                    <h3>${product.name}</h3>
                    <div class="product-bottom">
                        <strong>${formatPrice(product.price)}</strong>
                        <button class="add-button" onclick="addToCart(${product.id})" aria-label="Add ${product.name} to cart">Add +</button>
                    </div>
                </article>
            `;
            count++;
        }
    }
    document.getElementById("product-count").textContent = count + " instruments";
    const buttons = document.querySelectorAll(".filter");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
        buttons[i].setAttribute("aria-pressed", "false");
    }
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
}

// 4. Open the details of the selected instrument.
function openProduct(index) {
    const product = products[index];
    selectedProduct = product.id;
    document.getElementById("detail-image").src = product.image;
    document.getElementById("detail-image").alt = product.name;
    document.getElementById("detail-category").textContent = product.category;
    document.getElementById("product-title").textContent = product.name;
    document.getElementById("detail-description").textContent = product.description;
    document.getElementById("detail-price").textContent = formatPrice(product.price);
    productDialog.showModal();
}

// 5. Add, change or remove a product in the cart.
function addToCart(id) {
    changeQuantity(id, 1);
    productDialog.close();
    openCart();
}

function changeQuantity(id, amount) {
    cart[id] += amount;
    if (cart[id] < 0) {
        cart[id] = 0;
    }
    if (cart[id] > 99) {
        cart[id] = 99;
    }
    updateCart();
    saveCart();
}

function removeFromCart(id) {
    cart[id] = 0;
    updateCart();
    saveCart();
}

function openCart() {
    cartDialog.showModal();
}

// 6. Draw the cart and calculate the total.
function updateCart() {
    cartItems.innerHTML = "";
    totalPrice = 0;
    let count = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const quantity = cart[product.id];
        if (quantity > 0) {
            totalPrice += product.price * quantity;
            count += quantity;
            let plusDisabled = "";
            if (quantity === 99) {
                plusDisabled = "disabled";
            }
            cartItems.innerHTML += `
                <article class="cart-item">
                    <img src="${product.image}" alt="" width="65" height="90">
                    <div>
                        <h3>${product.name}</h3>
                        <p>${formatPrice(product.price)} each</p>
                        <div class="quantity">
                            <button onclick="changeQuantity(${product.id}, -1)" aria-label="Decrease ${product.name}">−</button>
                            <span>${quantity}</span>
                            <button onclick="changeQuantity(${product.id}, 1)" aria-label="Increase ${product.name}" ${plusDisabled}>+</button>
                            <button onclick="removeFromCart(${product.id})" aria-label="Remove ${product.name}">Remove</button>
                        </div>
                    </div>
                </article>
            `;
        }
    }
    if (count === 0) {
        cartItems.innerHTML = '<p class="small-text">Your cart is empty. Find your first instrument in the collection.</p>';
    }
    document.getElementById("cart-count").textContent = count;
    document.getElementById("cart-total").textContent = formatPrice(totalPrice);
    document.getElementById("order-form").hidden = count === 0;
    hideOrderLink();
}

// 7. Remember the cart in this browser.
function saveCart() {
    try {
        localStorage.setItem("resonance-cart", JSON.stringify(cart));
        document.getElementById("storage-message").textContent = "";
    } catch (error) {
        document.getElementById("storage-message").textContent = "Your browser cannot save the cart. It will reset when you refresh.";
    }
}

function loadCart() {
    try {
        const saved = JSON.parse(localStorage.getItem("resonance-cart"));
        for (let i = 0; i < products.length; i++) {
            const id = products[i].id;
            if (saved && Number.isInteger(saved[id]) && saved[id] >= 0 && saved[id] <= 99) {
                cart[id] = saved[id];
            }
        }
    } catch (error) {
        document.getElementById("storage-message").textContent = "Your saved cart could not be loaded. You can start a new one.";
    }
}

// 8. Prepare a message. The visitor sends it in WhatsApp.
function hideOrderLink() {
    document.getElementById("order-result").hidden = true;
    customerName.setCustomValidity("");
}

function prepareOrder(event) {
    event.preventDefault();
    const name = customerName.value.trim();
    if (name.length < 2) {
        customerName.setCustomValidity("Please enter at least two characters.");
        customerName.reportValidity();
        return;
    }
    let message = "Hello! My name is " + name + ". I would like to order:\n\n";
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const quantity = cart[product.id];
        if (quantity > 0) {
            message += product.name + " x " + quantity + " — " + formatPrice(product.price * quantity) + "\n";
        }
    }
    message += "\nTotal: " + formatPrice(totalPrice);
    document.getElementById("order-link").href = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);
    document.getElementById("order-result").hidden = false;
    document.getElementById("order-link").focus();
}

// 9. Run these functions when the page opens.
loadCart();
showProducts("All", document.querySelector(".filter"));
updateCart();
