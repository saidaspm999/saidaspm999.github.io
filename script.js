const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentIndex = 0;

// Show next slide
next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slide.length; // Cycle to the next slide
    updateSlidePosition();
});

// Show previous slide
prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slide.length) % slide.length; // Cycle to the previous slide
    updateSlidePosition();
});

// Update slide position
function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % slide.length;
    updateSlidePosition();
}, 5000);
const products = [
    { id: 1, name: "Red Sneakers", price: 100, size: 8, color: "red", brand: "nike", image: "sneakers.jpg" },
    { id: 2, name: "Black Boots", price: 150, size: 9, color: "black", brand: "adidas", image: "boots.jpg" },
    { id: 3, name: "White Heels", price: 120, size: 7, color: "white", brand: "puma", image: "heels.jpg" },
    { id: 4, name: "Blue Sandals", price: 60, size: 8, color: "blue", brand: "nike", image: "sandals.jpg" },
    // Add more products here
  ];
  
  // Function to render products
  function renderProducts(filteredProducts) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
  
    filteredProducts.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Size: ${product.size}</p>
        <p class="price">$${product.price}</p>
      `;
      productGrid.appendChild(productElement);
    });
  }
  