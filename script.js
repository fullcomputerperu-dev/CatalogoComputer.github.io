const products = [
    {
        name: "Laptop Gamer X15",
        category: "laptop",
        specs: "Intel i7 13th Gen • 16GB RAM • 1TB SSD • RTX 4060",
        price: "$1,250",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "Laptop Ultrabook Slim",
        category: "laptop",
        specs: "Intel i5 • 8GB RAM • 512GB SSD • 14'' FHD",
        price: "$780",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "PC Ryzen Pro Max",
        category: "pc",
        specs: "Ryzen 7 • 32GB RAM • 1TB NVMe • RTX 4070",
        price: "$1,600",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "Monitor 24'' IPS",
        category: "monitor",
        specs: "Full HD • 75Hz • HDMI • Panel IPS",
        price: "$190",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "Laptop Gamer X15",
        category: "laptop",
        specs: "Intel i7 13th Gen • 16GB RAM • 1TB SSD • RTX 4060",
        price: "$1,250",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "Laptop Ultrabook Slim",
        category: "laptop",
        specs: "Intel i5 • 8GB RAM • 512GB SSD • 14'' FHD",
        price: "$780",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "PC Ryzen Pro",
        category: "pc",
        specs: "Ryzen 7 • 32GB RAM • 1TB NVMe • RTX 4070",
        price: "$1,600",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "Monitor 24'' IPS",
        category: "monitor",
        specs: "Full HD • 75Hz • HDMI • Panel IPS",
        price: "$190",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "Laptop Gamer X15",
        category: "laptop",
        specs: "Intel i7 13th Gen • 16GB RAM • 1TB SSD • RTX 4060",
        price: "$1,250",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "Laptop Ultrabook Slim",
        category: "laptop",
        specs: "Intel i5 • 8GB RAM • 512GB SSD • 14'' FHD",
        price: "$780",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "PC Ryzen Pro",
        category: "pc",
        specs: "Ryzen 7 • 32GB RAM • 1TB NVMe • RTX 4070",
        price: "$1,600",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "Monitor 24'' IPS",
        category: "monitor",
        specs: "Full HD • 75Hz • HDMI • Panel IPS",
        price: "$190",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "Laptop Gamer X15",
        category: "laptop",
        specs: "Intel i7 13th Gen • 16GB RAM • 1TB SSD • RTX 4060",
        price: "$1,250",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "Laptop Ultrabook Slim",
        category: "laptop",
        specs: "Intel i5 • 8GB RAM • 512GB SSD • 14'' FHD",
        price: "$780",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "PC Ryzen Pro",
        category: "pc",
        specs: "Ryzen 7 • 32GB RAM • 1TB NVMe • RTX 4070",
        price: "$1,600",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "Monitor 24'' IPS",
        category: "monitor",
        specs: "Full HD • 75Hz • HDMI • Panel IPS",
        price: "$190",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "Laptop Gamer X15",
        category: "laptop",
        specs: "Intel i7 13th Gen • 16GB RAM • 1TB SSD • RTX 4060",
        price: "$1,250",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "Laptop Ultrabook Slim",
        category: "laptop",
        specs: "Intel i5 • 8GB RAM • 512GB SSD • 14'' FHD",
        price: "$780",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "PC Ryzen Pro",
        category: "pc",
        specs: "Ryzen 7 • 32GB RAM • 1TB NVMe • RTX 4070",
        price: "$1,600",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "Monitor 24'' IPS",
        category: "monitor",
        specs: "Full HD • 75Hz • HDMI • Panel IPS",
        price: "$190",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "Laptop Gamer X15",
        category: "laptop",
        specs: "Intel i7 13th Gen • 16GB RAM • 1TB SSD • RTX 4060",
        price: "$1,250",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "Laptop Ultrabook Slim",
        category: "laptop",
        specs: "Intel i5 • 8GB RAM • 512GB SSD • 14'' FHD",
        price: "$780",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "PC Ryzen Pro",
        category: "pc",
        specs: "Ryzen 7 • 32GB RAM • 1TB NVMe • RTX 4070",
        price: "$1,600",
        image: "img/pc_gamer.jpg"
    },
    {
        name: "Monitor 24'' IPS",
        category: "monitor",
        specs: "Full HD • 75Hz • HDMI • Panel IPS",
        price: "$190",
        image: "img/pc_gamer.jpg"
    }
];

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

let currentPage = 1;
const productsPerPage = 20;

function getFilteredProducts() {
    const searchText = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    return products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchText);
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
}

function displayProducts() {
    const filteredProducts = getFilteredProducts();

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    if (currentPage > totalPages) currentPage = 1;

    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    const productsToShow = filteredProducts.slice(start, end);

    productList.innerHTML = "";

    productsToShow.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="card-body">
                <h3>${product.name}</h3>
                <div class="specs">${product.specs}</div>
                <div class="price">${product.price}</div>
            </div>
        `;

        productList.appendChild(card);
    });

    displayPagination(totalPages);
}

function displayPagination(totalPages) {
    const oldPagination = document.getElementById("pagination");
    if (oldPagination) oldPagination.remove();

    if (totalPages <= 1) return;

    const pagination = document.createElement("div");
    pagination.id = "pagination";
    pagination.style.textAlign = "center";
    pagination.style.marginTop = "30px";

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.style.margin = "5px";
        btn.style.padding = "6px 12px";
        btn.style.border = "none";
        btn.style.borderRadius = "5px";
        btn.style.cursor = "pointer";
        btn.style.background =
            i === currentPage ? "#198754" : "#d4edda";

        btn.onclick = () => {
            currentPage = i;
            displayProducts();
        };

        pagination.appendChild(btn);
    }

    document.querySelector(".container").appendChild(pagination);
}

searchInput.addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]/g, '');
    currentPage = 1;
    displayProducts();
});

categoryFilter.addEventListener("change", function() {
    currentPage = 1;
    displayProducts();
});

displayProducts();