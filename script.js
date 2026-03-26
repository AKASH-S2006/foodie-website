let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
}

function displayCart() {
    let cartDiv = document.getElementById("cartItems");
    let total = 0;

    cartDiv.innerHTML = "";

    cart.forEach(item => {
        cartDiv.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
        total += item.price;
    });

    let tax = total * 0.05;
    let finalTotal = total + tax;

    document.getElementById("total").innerHTML =
        `Total: ₹${total} + Tax: ₹${tax} = ₹${finalTotal}`;
}