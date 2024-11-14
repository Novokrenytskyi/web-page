function addToCart(productName) {
    alert(`${productName} has been added to your cart!`);
}

function filterProducts() {
    const filter = document.getElementById('categoryFilter').value;
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const category = product.getAttribute('data-category');
        product.style.display = (filter === 'all' || category === filter) ? 'block' : 'none';
    });
}

function sortProducts() {
    const sortOrder = document.getElementById('priceSort').value;
    const productGrid = document.getElementById('productGrid');
    const products = Array.from(productGrid.getElementsByClassName('product'));

    products.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.price').innerText.replace('$', ''));
        const priceB = parseFloat(b.querySelector('.price').innerText.replace('$', ''));
        return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    });

    products.forEach(product => productGrid.appendChild(product));
}
