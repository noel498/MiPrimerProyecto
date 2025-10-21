// CONFIGURACIÓN DE LA APLICACIÓN
const EXCHANGE_RATE = 6.96; // 1 USD = 6.96 Bs (cambiar según necesidad)
const ADMIN_EMAIL = 'admin@tienda.com';
const ADMIN_PASSWORD = 'seven734'; // Cumple todas las validaciones

// DATOS DE PRODUCTOS CON IMÁGENES REALES DE UNSPLASH
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        description: "El smartphone más avanzado con chip A17 Pro y cámara de 48MP",
        price: 999.99,
        category: "electronica",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop"
    },
    {
        id: 2,
        name: "MacBook Air M2",
        description: "Laptop ultradelgada con procesador M2 y pantalla Liquid Retina",
        price: 1199.99,
        category: "electronica",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop"
    },
    {
        id: 3,
        name: "AirPods Pro",
        description: "Auriculares inalámbricos con cancelación de ruido activa",
        price: 249.99,
        category: "electronica",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop"
    },
    {
        id: 4,
        name: "Samsung Galaxy S24",
        description: "Smartphone Android con IA integrada y cámara profesional",
        price: 899.99,
        category: "electronica",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop"
    },
    {
        id: 5,
        name: "iPad Pro 12.9",
        description: "Tablet profesional con pantalla Liquid Retina XDR y Apple Pencil",
        price: 1099.99,
        category: "electronica",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop"
    },
    {
        id: 6,
        name: "Sofá Moderno 3 Plazas",
        description: "Sofá cómodo de tela gris con diseño minimalista",
        price: 799.99,
        category: "hogar",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop"
    },
    {
        id: 7,
        name: "Mesa de Comedor",
        description: "Mesa de madera maciza para 6 personas con acabado natural",
        price: 599.99,
        category: "hogar",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop"
    },
    {
        id: 8,
        name: "Lámpara de Pie LED",
        description: "Lámpara moderna con luz LED regulable y diseño escandinavo",
        price: 149.99,
        category: "hogar",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
        id: 9,
        name: "Aspiradora Robot",
        description: "Aspiradora inteligente con mapeo automático y control por app",
        price: 399.99,
        category: "hogar",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop"
    },
    {
        id: 10,
        name: "Cafetera Espresso",
        description: "Cafetera automática con molinillo integrado y espumador de leche",
        price: 449.99,
        category: "hogar",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop"
    },
    {
        id: 11,
        name: "Chaqueta de Cuero",
        description: "Chaqueta de cuero genuino estilo vintage con forro de lana",
        price: 299.99,
        category: "moda",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop"
    },
    {
        id: 12,
        name: "Zapatillas Nike Air Max",
        description: "Zapatillas deportivas con tecnología Air Max y suela de goma",
        price: 179.99,
        category: "moda",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop"
    },
    {
        id: 13,
        name: "Reloj de Lujo",
        description: "Reloj automático con caja de acero inoxidable y correa de cuero",
        price: 899.99,
        category: "moda",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop"
    },
    {
        id: 14,
        name: "Bolso de Diseño",
        description: "Bolso de cuero italiano con diseño minimalista y compartimentos",
        price: 199.99,
        category: "moda",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop"
    },
    {
        id: 15,
        name: "Gafas de Sol",
        description: "Gafas de sol polarizadas con montura de acetato y lentes UV400",
        price: 129.99,
        category: "moda",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop"
    }
];

// OFERTAS ESPECIALES (4 productos fáciles de cambiar)
const specialOffers = [
    {
        id: 16,
        name: "Smart TV 55\" - OFERTA",
        description: "Televisor 4K con Android TV integrado y control por voz",
        price: 699.99,
        originalPrice: 899.99,
        discount: 22,
        category: "electronica",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop"
    },
    {
        id: 17,
        name: "Set de Pesas - OFERTA",
        description: "Set completo de pesas ajustables para gimnasio en casa",
        price: 199.99,
        originalPrice: 299.99,
        discount: 33,
        category: "deportes",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop"
    },
    {
        id: 18,
        name: "Cama King Size - OFERTA",
        description: "Cama king size con colchón de memory foam y base ajustable",
        price: 899.99,
        originalPrice: 1299.99,
        discount: 31,
        category: "hogar",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop"
    },
    {
        id: 19,
        name: "Kit de Ropa Deportiva - OFERTA",
        description: "Kit completo de ropa deportiva Nike con tecnología Dri-FIT",
        price: 89.99,
        originalPrice: 149.99,
        discount: 40,
        category: "moda",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop"
    }
];

// ESTADO DE LA APLICACIÓN
let currentUser = null;
let cart = [];
let orders = [];
let currentSection = 'inicio';
let currentAdminTab = 'products';

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', function() {
    loadFromLocalStorage();
    renderProducts();
    renderSpecialOffers();
    updateCartDisplay();
    checkAuthStatus();
    showSection('inicio');
});

// FUNCIONES DE NAVEGACIÓN
function showSection(sectionName) {
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionName;
    }
    
    // Actualizar navegación
    document.querySelectorAll('.nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Cerrar menús desplegables
    document.getElementById('userDropdown').style.display = 'none';
}

// FUNCIONES DE PRODUCTOS
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const priceInBs = convertToBolivianos(product.price);
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-overlay">
                <button class="btn-quick-view" onclick="showProductDetails(${product.id})">
                    <i class="fas fa-eye"></i> Ver Detalles
                </button>
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                <span class="price-usd">$${product.price}</span>
                <span class="price-bs">Bs ${priceInBs}</span>
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                <i class="fas fa-cart-plus"></i> Agregar al Carrito
            </button>
        </div>
    `;
    
    return card;
}

function renderSpecialOffers() {
    const grid = document.getElementById('offersGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    specialOffers.forEach(offer => {
        const offerCard = createOfferCard(offer);
        grid.appendChild(offerCard);
    });
}

function createOfferCard(offer) {
    const card = document.createElement('div');
    card.className = 'offer-card';
    
    const priceInBs = convertToBolivianos(offer.price);
    const originalPriceInBs = convertToBolivianos(offer.originalPrice);
    
    card.innerHTML = `
        <div class="offer-badge">-${offer.discount}%</div>
        <div class="offer-image">
            <img src="${offer.image}" alt="${offer.name}" loading="lazy">
        </div>
        <div class="offer-info">
            <h3 class="offer-title">${offer.name}</h3>
            <p class="offer-description">${offer.description}</p>
            <div class="offer-price">
                <span class="original-price">Bs ${originalPriceInBs}</span>
                <span class="sale-price">Bs ${priceInBs}</span>
            </div>
            <button class="add-to-cart" onclick="addToCart(${offer.id})">
                <i class="fas fa-cart-plus"></i> Agregar al Carrito
            </button>
        </div>
    `;
    
    return card;
}

function showProductDetails(productId) {
    const product = [...products, ...specialOffers].find(p => p.id === productId);
    if (!product) return;
    
    const priceInBs = convertToBolivianos(product.price);
    
    Swal.fire({
        title: product.name,
        html: `
            <div style="text-align: center;">
                <img src="${product.image}" alt="${product.name}" style="width: 200px; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 15px;">
                <p style="margin-bottom: 10px;">${product.description}</p>
                <div style="margin-bottom: 10px;">
                    <span style="font-size: 1.2em; color: #666;">$${product.price}</span>
                    <span style="font-size: 1.5em; font-weight: bold; color: #2563eb; margin-left: 10px;">Bs ${priceInBs}</span>
                </div>
                <p style="color: #10b981;">
                    <i class="fas fa-check-circle"></i> Disponible
                </p>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Agregar al Carrito',
        cancelButtonText: 'Cerrar',
        confirmButtonColor: '#2563eb',
        cancelButtonColor: '#6b7280'
    }).then((result) => {
        if (result.isConfirmed) {
            addToCart(productId);
        }
    });
}

// FUNCIONES DE FILTROS Y ORDENAMIENTO
function filterProducts() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const searchInput = document.getElementById('mainSearchInput');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    
    renderFilteredProducts(categoryFilter, searchTerm);
}

function searchProducts() {
    const searchInput = document.getElementById('mainSearchInput');
    const categoryFilter = document.getElementById('categoryFilter').value;
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    
    renderFilteredProducts(categoryFilter, searchTerm);
}

function renderFilteredProducts(categoryFilter, searchTerm) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    let filteredProducts = products;
    
    // Filtrar por categoría
    if (categoryFilter !== 'all') {
        filteredProducts = products.filter(product => product.category === categoryFilter);
    }
    
    // Filtrar por búsqueda
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }
    
    if (filteredProducts.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: #6b7280; margin-bottom: 1rem;"></i>
                <h3 style="color: #374151; margin-bottom: 0.5rem;">No se encontraron productos</h3>
                <p style="color: #6b7280;">Intenta con otros términos de búsqueda</p>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

function sortProducts() {
    const sortFilter = document.getElementById('sortFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;
    const grid = document.getElementById('productsGrid');
    
    if (!grid) return;
    
    let filteredProducts = products;
    if (categoryFilter !== 'all') {
        filteredProducts = products.filter(product => product.category === categoryFilter);
    }
    
    switch (sortFilter) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    
    grid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

// FUNCIONES DE CARRITO
function addToCart(productId) {
    const product = [...products, ...specialOffers].find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    saveToLocalStorage();
    
    Swal.fire({
        icon: 'success',
        title: '¡Producto Agregado!',
        text: `${product.name} se agregó al carrito`,
        timer: 2000,
        showConfirmButton: false,
        toast: true,
        position: 'top-end'
    });
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    saveToLocalStorage();
    
    Swal.fire({
        icon: 'info',
        title: 'Producto Eliminado',
        text: 'Se eliminó del carrito',
        timer: 1500,
        showConfirmButton: false,
        toast: true,
        position: 'top-end'
    });
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
            saveToLocalStorage();
        }
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const cartCount = document.getElementById('cartCount');
    
    if (!cartItems || !cartTotal || !cartCount) return;
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Tu carrito está vacío</p>';
        cartTotal.textContent = '0';
        cartCount.textContent = '0';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        const priceInBs = convertToBolivianos(item.price);
        
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">Bs ${priceInBs}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Eliminar</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
        total += priceInBs * item.quantity;
    });
    
    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
}

function proceedToCheckout() {
    if (cart.length === 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Carrito Vacío',
            text: 'Agrega productos al carrito antes de proceder al pago',
            confirmButtonText: 'Entendido'
        });
        return;
    }
    
    showOrderModal();
}

// FUNCIONES DE FORMULARIO DE PEDIDO
function showOrderModal() {
    const modal = document.getElementById('orderModal');
    const orderSummaryItems = document.getElementById('orderSummaryItems');
    const orderTotal = document.getElementById('orderTotal');
    
    if (!modal || !orderSummaryItems || !orderTotal) return;
    
    // Mostrar resumen del pedido
    let summaryHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const priceInBs = convertToBolivianos(item.price);
        const itemTotal = priceInBs * item.quantity;
        total += itemTotal;
        
        summaryHTML += `
            <div class="order-item">
                <span>${item.name} x${item.quantity}</span>
                <span>Bs ${itemTotal.toFixed(2)}</span>
            </div>
        `;
    });
    
    orderSummaryItems.innerHTML = summaryHTML;
    orderTotal.textContent = total.toFixed(2);
    
    modal.style.display = 'flex';
}

function closeOrderModal() {
    const modal = document.getElementById('orderModal');
    if (modal) {
        modal.style.display = 'none';
        document.getElementById('orderForm').reset();
        clearValidationErrors();
    }
}

function clearValidationErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
    
    // Limpiar indicadores de contraseña
    const passwordReqs = ['lengthReq', 'lowerReq', 'upperReq', 'numberReq', 'symbolReq'];
    passwordReqs.forEach(req => {
        const element = document.getElementById(req);
        if (element) {
            element.classList.remove('valid', 'invalid');
        }
    });
}

// FUNCIONES DE VALIDACIÓN
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    // Aceptar formatos: +591 7502730, 591 62195297, 7xxxxxxx
    const phoneRegex = /^(\+591\s?[67]\d{7}|591\s?[67]\d{7}|[67]\d{7})$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function validatePassword(password) {
    const requirements = {
        length: password.length >= 8,
        lower: /[a-z]/.test(password),
        upper: /[A-Z]/.test(password),
        number: /\d/.test(password),
        symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
    
    // Actualizar indicadores visuales
    document.getElementById('lengthReq').classList.toggle('valid', requirements.length);
    document.getElementById('lengthReq').classList.toggle('invalid', !requirements.length);
    
    document.getElementById('lowerReq').classList.toggle('valid', requirements.lower);
    document.getElementById('lowerReq').classList.toggle('invalid', !requirements.lower);
    
    document.getElementById('upperReq').classList.toggle('valid', requirements.upper);
    document.getElementById('upperReq').classList.toggle('invalid', !requirements.upper);
    
    document.getElementById('numberReq').classList.toggle('valid', requirements.number);
    document.getElementById('numberReq').classList.toggle('invalid', !requirements.number);
    
    document.getElementById('symbolReq').classList.toggle('valid', requirements.symbol);
    document.getElementById('symbolReq').classList.toggle('invalid', !requirements.symbol);
    
    return Object.values(requirements).every(req => req);
}

function showValidationError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearValidationError(fieldId) {
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        errorElement.textContent = '';
    }
}

// FUNCIONES DE AUTENTICACIÓN
function toggleUserMenu() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function showLoginForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
}

function showRegisterForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
}

function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (!email || !password) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor completa todos los campos',
            confirmButtonText: 'Entendido'
        });
        return;
    }
    
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        currentUser = { email, name: 'Administrador', isAdmin: true };
    } else {
        // Verificar usuario registrado
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Credenciales incorrectas',
                confirmButtonText: 'Entendido'
            });
            return;
        }
        
        currentUser = { email: user.email, name: user.name, isAdmin: false };
    }
    
    updateAuthUI();
    saveToLocalStorage();
    
    Swal.fire({
        icon: 'success',
        title: '¡Bienvenido!',
        text: `Hola ${currentUser.name}`,
        timer: 2000,
        showConfirmButton: false,
        toast: true,
        position: 'top-end'
    });
    
    document.getElementById('userDropdown').style.display = 'none';
}

function register() {
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    if (!name || !email || !password) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor completa todos los campos',
            confirmButtonText: 'Entendido'
        });
        return;
    }
    
    if (!validateEmail(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Formato de correo electrónico inválido',
            confirmButtonText: 'Entendido'
        });
        return;
    }
    
    if (!validatePassword(password)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La contraseña no cumple con los requisitos',
            confirmButtonText: 'Entendido'
        });
        return;
    }
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.find(u => u.email === email)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ya existe una cuenta con este correo electrónico',
            confirmButtonText: 'Entendido'
        });
        return;
    }
    
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    Swal.fire({
        icon: 'success',
        title: '¡Registro Exitoso!',
        text: 'Tu cuenta ha sido creada correctamente',
        confirmButtonText: 'Entendido'
    });
    
    showLoginForm();
}

function logout() {
    currentUser = null;
    updateAuthUI();
    saveToLocalStorage();
    
    Swal.fire({
        icon: 'success',
        title: 'Sesión Cerrada',
        text: 'Has cerrado sesión correctamente',
        timer: 2000,
        showConfirmButton: false,
        toast: true,
        position: 'top-end'
    });
}

function updateAuthUI() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const userInfo = document.getElementById('userInfo');
    const userName = document.getElementById('userName');
    const adminBtn = document.getElementById('adminBtn');
    
    if (currentUser) {
        loginForm.style.display = 'none';
        registerForm.style.display = 'none';
        userInfo.style.display = 'block';
        userName.textContent = currentUser.name;
        
        if (currentUser.isAdmin) {
            adminBtn.style.display = 'block';
        } else {
            adminBtn.style.display = 'none';
        }
    } else {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        userInfo.style.display = 'none';
        adminBtn.style.display = 'none';
    }
}

function checkAuthStatus() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateAuthUI();
    }
}

function showAdminPanel() {
    if (!currentUser || !currentUser.isAdmin) {
        Swal.fire({
            icon: 'error',
            title: 'Acceso Denegado',
            text: 'No tienes permisos para acceder al panel administrativo',
            confirmButtonText: 'Entendido'
        });
        return;
    }
    
    showSection('adminPanel');
    renderAdminProducts();
    renderAdminOrders();
}

// FUNCIONES DEL PANEL ADMINISTRATIVO
function showAdminTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.admin-tab-content').forEach(content => content.classList.remove('active'));
    
    document.querySelector(`[onclick="showAdminTab('${tabName}')"]`).classList.add('active');
    document.getElementById(`admin${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`).classList.add('active');
    
    currentAdminTab = tabName;
}

function renderAdminProducts() {
    const grid = document.getElementById('adminProductsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    [...products, ...specialOffers].forEach(product => {
        const productCard = createAdminProductCard(product);
        grid.appendChild(productCard);
    });
}

function createAdminProductCard(product) {
    const card = document.createElement('div');
    card.className = 'admin-product-card';
    
    const priceInBs = convertToBolivianos(product.price);
    
    card.innerHTML = `
        <div class="admin-product-image">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="admin-product-info">
            <h4>${product.name}</h4>
            <p>${product.description}</p>
            <div class="admin-product-price">
                <span>$${product.price} / Bs ${priceInBs}</span>
            </div>
            <div class="admin-product-actions">
                <button class="btn-edit" onclick="editProduct(${product.id})">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="btn-delete" onclick="deleteProduct(${product.id})">
                    <i class="fas fa-trash"></i> Eliminar
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function showAddProductForm() {
    document.getElementById('productModalTitle').textContent = 'Agregar Producto';
    document.getElementById('productForm').reset();
    document.getElementById('productId').value = '';
    
    const modal = document.getElementById('productModal');
    modal.style.display = 'flex';
}

function editProduct(productId) {
    const product = [...products, ...specialOffers].find(p => p.id === productId);
    if (!product) return;
    
    document.getElementById('productModalTitle').textContent = 'Editar Producto';
    document.getElementById('productId').value = product.id;
    document.getElementById('productName').value = product.name;
    document.getElementById('productDescription').value = product.description;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productCategory').value = product.category;
    document.getElementById('productImage').value = product.image;
    
    const modal = document.getElementById('productModal');
    modal.style.display = 'flex';
}

function deleteProduct(productId) {
    Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción no se puede deshacer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ef4444',
        cancelButtonColor: '#6b7280',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // En una aplicación real, aquí se haría la eliminación
            Swal.fire({
                icon: 'success',
                title: 'Producto Eliminado',
                text: 'El producto ha sido eliminado correctamente',
                timer: 2000,
                showConfirmButton: false,
                toast: true,
                position: 'top-end'
            });
            
            renderAdminProducts();
        }
    });
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function renderAdminOrders() {
    const ordersList = document.getElementById('ordersList');
    if (!ordersList) return;
    
    ordersList.innerHTML = '';
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">No hay pedidos registrados</p>';
        return;
    }
    
    orders.forEach((order, index) => {
        const orderCard = createAdminOrderCard(order, index);
        ordersList.appendChild(orderCard);
    });
}

function createAdminOrderCard(order, index) {
    const card = document.createElement('div');
    card.className = 'admin-order-card';
    
    const statusClass = order.status === 'enviado' ? 'status-sent' : 'status-pending';
    
    card.innerHTML = `
        <div class="order-header">
            <h4>Pedido #${order.id}</h4>
            <span class="order-status ${statusClass}">${order.status}</span>
        </div>
        <div class="order-details">
            <p><strong>Cliente:</strong> ${order.customerName}</p>
            <p><strong>Email:</strong> ${order.customerEmail}</p>
            <p><strong>Teléfono:</strong> ${order.customerPhone}</p>
            <p><strong>Dirección:</strong> ${order.customerAddress}</p>
            <p><strong>Total:</strong> Bs ${order.total}</p>
            <p><strong>Fecha:</strong> ${new Date(order.date).toLocaleDateString()}</p>
        </div>
        <div class="order-items">
            <h5>Productos:</h5>
            ${order.items.map(item => `<p>${item.name} x${item.quantity} - Bs ${item.total}</p>`).join('')}
        </div>
        <div class="order-actions">
            ${order.status === 'pendiente' ? 
                `<button class="btn-mark-sent" onclick="markOrderAsSent(${index})">
                    <i class="fas fa-check"></i> Marcar como Enviado
                </button>` : 
                '<span class="sent-badge">Enviado</span>'
            }
        </div>
    `;
    
    return card;
}

function markOrderAsSent(orderIndex) {
    orders[orderIndex].status = 'enviado';
    saveToLocalStorage();
    renderAdminOrders();
    
    Swal.fire({
        icon: 'success',
        title: 'Pedido Actualizado',
        text: 'El pedido ha sido marcado como enviado',
        timer: 2000,
        showConfirmButton: false,
        toast: true,
        position: 'top-end'
    });
}

// FUNCIONES DE CONVERSIÓN Y UTILIDADES
function convertToBolivianos(usdAmount) {
    return (usdAmount * EXCHANGE_RATE).toFixed(2);
}

function saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('orders', JSON.stringify(orders));
    if (currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    }
}

function loadFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    
    const savedOrders = localStorage.getItem('orders');
    if (savedOrders) {
        orders = JSON.parse(savedOrders);
    }
}

function showHelp() {
    Swal.fire({
        title: 'Centro de Ayuda',
        text: 'Para más información contacta con nuestro servicio al cliente',
        icon: 'info',
        confirmButtonText: 'Contactar',
        showCancelButton: true,
        cancelButtonText: 'Cerrar'
    }).then((result) => {
        if (result.isConfirmed) {
            showSection('contacto');
        }
    });
}

// EVENT LISTENERS
document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('customerAddress').value;
    const password = document.getElementById('customerPassword').value;
    
    // Limpiar errores previos
    clearValidationErrors();
    
    let isValid = true;
    
    // Validar campos obligatorios
    if (!name.trim()) {
        showValidationError('customerName', 'El nombre es obligatorio');
        isValid = false;
    }
    
    if (!email.trim()) {
        showValidationError('customerEmail', 'El correo electrónico es obligatorio');
        isValid = false;
    } else if (!validateEmail(email)) {
        showValidationError('customerEmail', 'Formato de correo electrónico inválido');
        isValid = false;
    }
    
    if (!phone.trim()) {
        showValidationError('customerPhone', 'El teléfono es obligatorio');
        isValid = false;
    } else if (!validatePhone(phone)) {
        showValidationError('customerPhone', 'Formato de teléfono inválido. Use: +591 7xxxxxxx, 591 7xxxxxxx o 7xxxxxxx');
        isValid = false;
    }
    
    if (!address.trim()) {
        showValidationError('customerAddress', 'La dirección es obligatoria');
        isValid = false;
    }
    
    if (!password.trim()) {
        showValidationError('customerPassword', 'La contraseña es obligatoria');
        isValid = false;
    } else if (!validatePassword(password)) {
        showValidationError('customerPassword', 'La contraseña no cumple con los requisitos');
        isValid = false;
    }
    
    if (!isValid) {
        return;
    }
    
    // Procesar pedido
    const orderId = Date.now();
    const total = cart.reduce((sum, item) => sum + (convertToBolivianos(item.price) * item.quantity), 0);
    
    const order = {
        id: orderId,
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        customerAddress: address,
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: convertToBolivianos(item.price),
            total: convertToBolivianos(item.price) * item.quantity
        })),
        total: total,
        status: 'pendiente',
        date: new Date().toISOString()
    };
    
    orders.push(order);
    saveToLocalStorage();
    
    // Limpiar carrito
    cart = [];
    updateCartDisplay();
    saveToLocalStorage();
    
    // Cerrar modal
    closeOrderModal();
    
    // Mostrar confirmación
    Swal.fire({
        title: '¡Pedido Confirmado!',
        html: `
            <div style="text-align: center;">
                <p><strong>Número de Pedido:</strong> #${orderId}</p>
                <p><strong>Total:</strong> Bs ${total.toFixed(2)}</p>
                <p><strong>Estado:</strong> Pendiente de Envío</p>
                <hr style="margin: 20px 0;">
                <h4>Detalles del Pedido:</h4>
                ${order.items.map(item => `<p>${item.name} x${item.quantity} - Bs ${item.total.toFixed(2)}</p>`).join('')}
            </div>
        `,
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#10b981'
    });
});

document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = document.getElementById('productId').value;
    const name = document.getElementById('productName').value;
    const description = document.getElementById('productDescription').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const category = document.getElementById('productCategory').value;
    const image = document.getElementById('productImage').value;
    
    if (!name || !description || !price || !category || !image) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor completa todos los campos',
            confirmButtonText: 'Entendido'
        });
        return;
    }
    
    const product = {
        id: id || Date.now(),
        name,
        description,
        price,
        category,
        image
    };
    
    if (id) {
        // Editar producto existente
        const productIndex = products.findIndex(p => p.id == id);
        if (productIndex !== -1) {
            products[productIndex] = product;
        } else {
            const offerIndex = specialOffers.findIndex(p => p.id == id);
            if (offerIndex !== -1) {
                specialOffers[offerIndex] = product;
            }
        }
    } else {
        // Agregar nuevo producto
        products.push(product);
    }
    
    saveToLocalStorage();
    renderProducts();
    renderSpecialOffers();
    renderAdminProducts();
    closeProductModal();
    
    Swal.fire({
        icon: 'success',
        title: 'Producto Guardado',
        text: 'El producto ha sido guardado correctamente',
        timer: 2000,
        showConfirmButton: false,
        toast: true,
        position: 'top-end'
    });
});

// Event listeners para validación en tiempo real
document.getElementById('customerEmail').addEventListener('input', function() {
    const email = this.value;
    if (email && !validateEmail(email)) {
        showValidationError('customerEmail', 'Formato de correo electrónico inválido');
    } else {
        clearValidationError('customerEmail');
    }
});

document.getElementById('customerPhone').addEventListener('input', function() {
    const phone = this.value;
    if (phone && !validatePhone(phone)) {
        showValidationError('customerPhone', 'Formato de teléfono inválido. Use: +591 7xxxxxxx, 591 7xxxxxxx o 7xxxxxxx');
    } else {
        clearValidationError('customerPhone');
    }
});

document.getElementById('customerPassword').addEventListener('input', function() {
    const password = this.value;
    validatePassword(password);
});

// Cerrar modales al hacer clic fuera
window.addEventListener('click', function(e) {
    const orderModal = document.getElementById('orderModal');
    const productModal = document.getElementById('productModal');
    
    if (e.target === orderModal) {
        closeOrderModal();
    }
    
    if (e.target === productModal) {
        closeProductModal();
    }
});
