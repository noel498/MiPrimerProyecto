// Global Variables
let cart = [];
let products = [];
let currentCategory = 'all';

// Product Data
const PRODUCTS_DATA = [
    // Bebidas
    {
        id: 1,
        name: 'Coca Cola 2L',
        price: 15.00,
        category: 'bebidas',
        image: 'https://images.unsplash.com/photo-1554866585-cd94860890b9?w=400&h=300&fit=crop',
        stock: 50,
        description: 'Refresco Coca Cola de 2 litros'
    },
    {
        id: 2,
        name: 'Jugo de Naranja 1L',
        price: 12.50,
        category: 'bebidas',
        image: 'https://images.unsplash.com/photo-1613479671451-0045a57b7a8c?w=400&h=300&fit=crop',
        stock: 30,
        description: 'Jugo de naranja natural 1 litro'
    },
    {
        id: 3,
        name: 'Agua Mineral 1.5L',
        price: 8.00,
        category: 'bebidas',
        image: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?w=400&h=300&fit=crop',
        stock: 100,
        description: 'Agua mineral sin gas 1.5L'
    },
    
    // Snacks
    {
        id: 4,
        name: 'Galletas Oreo',
        price: 6.50,
        category: 'snacks',
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop',
        stock: 80,
        description: 'Galletas Oreo paquete de 154g'
    },
    {
        id: 5,
        name: 'Papas Fritas Lays',
        price: 9.00,
        category: 'snacks',
        image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=300&fit=crop',
        stock: 60,
        description: 'Papas fritas Lays clásicas 170g'
    },
    {
        id: 6,
        name: 'Chocolate Nestlé',
        price: 7.50,
        category: 'snacks',
        image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop',
        stock: 45,
        description: 'Tableta de chocolate Nestlé 100g'
    },
    
    // Limpieza
    {
        id: 7,
        name: 'Detergente Ace 2L',
        price: 25.00,
        category: 'limpieza',
        image: 'https://images.unsplash.com/photo-1555529771-83c323e6593a?w=400&h=300&fit=crop',
        stock: 25,
        description: 'Detergente líquido Ace 2 litros'
    },
    {
        id: 8,
        name: 'Jabón Dove 3 Pack',
        price: 18.00,
        category: 'limpieza',
        image: 'https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=400&h=300&fit=crop',
        stock: 40,
        description: 'Jabón Dove pack de 3 unidades'
    },
    {
        id: 9,
        name: 'Limpiador Multiusos',
        price: 14.50,
        category: 'limpieza',
        image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop',
        stock: 35,
        description: 'Limpiador multiusos 500ml'
    },
    
    // Carnes
    {
        id: 10,
        name: 'Pollo Entero 2kg',
        price: 45.00,
        category: 'carnes',
        image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop',
        stock: 20,
        description: 'Pollo entero fresco 2kg'
    },
    {
        id: 11,
        name: 'Carne Molida 1kg',
        price: 35.00,
        category: 'carnes',
        image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=400&h=300&fit=crop',
        stock: 15,
        description: 'Carne molida de res 1kg'
    },
    {
        id: 12,
        name: 'Chuletas de Cerdo 500g',
        price: 28.00,
        category: 'carnes',
        image: 'https://images.unsplash.com/photo-1602470522256-8ec003d624e6?w=400&h=300&fit=crop',
        stock: 18,
        description: 'Chuletas de cerdo 500g'
    }
];

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Hide loading overlay
    setTimeout(() => {
        const loadingOverlay = document.getElementById('loadingOverlay');
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 500);
    }, 1000);

    // Load products
    products = PRODUCTS_DATA;
    renderProducts();
    
    // Load cart from localStorage
    loadCartFromStorage();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Initialize scroll effects
    initializeScrollEffects();
}

function initializeEventListeners() {
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Checkout form
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
    }
}

function initializeScrollEffects() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Product Functions
function renderProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;
    
    let filteredProducts = currentCategory === 'all' 
        ? products 
        : products.filter(product => product.category === currentCategory);
    
    container.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
    
    // Add animation
    const cards = container.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 100);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'col-md-4 col-sm-6 product-card-container';
    
    card.innerHTML = `
        <div class="card product-card h-100">
            <img src="${product.image}" class="product-img" alt="${product.name}" loading="lazy">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold">${product.name}</h5>
                <p class="card-text text-muted flex-grow-1">${product.description}</p>
                <div class="mb-2">
                    <span class="product-price fw-bold">Bs ${product.price.toFixed(2)}</span>
                </div>
                <div class="mb-3">
                    <small class="product-stock">
                        <i class="fas fa-boxes me-1"></i>
                        ${product.stock} disponibles
                    </small>
                </div>
                <button class="btn btn-add-cart w-100" onclick="addToCart(${product.id})" 
                        ${product.stock === 0 ? 'disabled' : ''}>
                    <i class="fas fa-shopping-cart me-2"></i>
                    ${product.stock > 0 ? 'Agregar al Carrito' : 'Agotado'}
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function filterProducts(category) {
    currentCategory = category;
    renderProducts();
    
    // Scroll to products section
    scrollToSection('productos');
    
    // Show success message
    Swal.fire({
        title: 'Categoría seleccionada',
        text: `Mostrando productos de ${category}`,
        icon: 'info',
        timer: 1500,
        showConfirmButton: false
    });
}

function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const container = document.getElementById('products-container');
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    container.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h4 class="text-muted">No se encontraron productos</h4>
                <p class="text-muted">Intenta con otra búsqueda</p>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    if (product.stock === 0) {
        Swal.fire({
            title: 'Producto agotado',
            text: 'Lo sentimos, este producto no está disponible',
            icon: 'error',
            confirmButtonText: 'Entendido'
        });
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity += 1;
        } else {
            Swal.fire({
                title: 'Stock máximo alcanzado',
                text: `No hay más stock disponible de ${product.name}`,
                icon: 'warning',
                confirmButtonText: 'Entendido'
            });
            return;
        }
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    saveCartToStorage();
    
    // Show success message
    Swal.fire({
        title: '¡Producto agregado!',
        text: `${product.name} se agregó al carrito`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
        toast: true,
        position: 'top-end'
    });
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCartToStorage();
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    const product = products.find(p => p.id === productId);
    
    if (!item || !product) return;
    
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    if (newQuantity > product.stock) {
        Swal.fire({
            title: 'Stock máximo alcanzado',
            text: `No hay más stock disponible de ${product.name}`,
            icon: 'warning',
            confirmButtonText: 'Entendido'
        });
        return;
    }
    
    item.quantity = newQuantity;
    updateCartUI();
    saveCartToStorage();
}

function clearCart() {
    Swal.fire({
        title: '¿Vaciar carrito?',
        text: 'Se eliminarán todos los productos del carrito',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, vaciar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            cart = [];
            updateCartUI();
            saveCartToStorage();
            
            Swal.fire({
                title: 'Carrito vacío',
                text: 'Todos los productos han sido eliminados',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            });
        }
    });
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    }
    
    // Update cart items
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="text-center py-4">
                    <i class="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                    <h5 class="text-muted">Carrito vacío</h5>
                    <p class="text-muted">Agrega productos para comenzar a comprar</p>
                </div>
            `;
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item d-flex align-items-center">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-img me-3">
                    <div class="flex-grow-1">
                        <h6 class="mb-1">${item.name}</h6>
                        <p class="text-muted mb-1">Bs ${item.price.toFixed(2)} c/u</p>
                        <p class="text-success fw-bold mb-0">Subtotal: Bs ${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="mx-2 fw-bold">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="btn btn-sm btn-danger ms-2" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) {
        cartTotal.textContent = `Bs ${total.toFixed(2)}`;
    }
}

function proceedToCheckout() {
    if (cart.length === 0) {
        Swal.fire({
            title: 'Carrito vacío',
            text: 'Agrega productos antes de proceder al pago',
            icon: 'warning',
            confirmButtonText: 'Entendido'
        });
        return;
    }
    
    // Close cart modal
    const cartModal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    if (cartModal) {
        cartModal.hide();
    }
    
    // Update order summary
    updateOrderSummary();
    
    // Open checkout modal
    const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    checkoutModal.show();
}

function updateOrderSummary() {
    const orderSummary = document.getElementById('order-summary');
    const finalTotal = document.getElementById('final-total');
    
    if (!orderSummary || !finalTotal) return;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    orderSummary.innerHTML = cart.map(item => `
        <div class="d-flex justify-content-between mb-1">
            <span>${item.name} x${item.quantity}</span>
            <span>Bs ${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
    
    finalTotal.textContent = `Bs ${total.toFixed(2)}`;
}

// Checkout Functions
function handleCheckout(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const customerName = document.getElementById('customerName').value;
    const customerPhone = document.getElementById('customerPhone').value;
    const customerAddress = document.getElementById('customerAddress').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    
    // Validate form
    if (!customerName || !customerPhone || !customerAddress) {
        Swal.fire({
            title: 'Campos incompletos',
            text: 'Por favor completa todos los campos requeridos',
            icon: 'error',
            confirmButtonText: 'Entendido'
        });
        return;
    }
    
    // Create order
    const order = {
        id: Date.now(),
        customer: {
            name: customerName,
            phone: customerPhone,
            address: customerAddress
        },
        items: [...cart],
        paymentMethod: paymentMethod,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        date: new Date().toLocaleString(),
        status: 'pendiente'
    };
    
    // Process payment based on method
    processPayment(order);
}

function processPayment(order) {
    const paymentMethod = order.paymentMethod;
    
    switch (paymentMethod) {
        case 'transferencia':
            showTransferInstructions(order);
            break;
        case 'pagomovil':
            showPagoMovilInstructions(order);
            break;
        case 'efectivo':
            processCashPayment(order);
            break;
        case 'whatsapp':
            processWhatsAppPayment(order);
            break;
        default:
            Swal.fire({
                title: 'Error',
                text: 'Método de pago no válido',
                icon: 'error',
                confirmButtonText: 'Entendido'
            });
    }
}

function showTransferInstructions(order) {
    const total = order.total.toFixed(2);
    
    Swal.fire({
        title: 'Instrucciones de Transferencia',
        html: `
            <div class="text-start">
                <h6 class="mb-3">Por favor realiza la transferencia a:</h6>
                <div class="bg-light p-3 rounded mb-3">
                    <p class="mb-1"><strong>Banco:</strong> Banco de Venezuela</p>
                    <p class="mb-1"><strong>Número de cuenta:</strong> 0102-0000-00-0000000000</p>
                    <p class="mb-1"><strong>Titular:</strong> Pedidos Express SN</p>
                    <p class="mb-1"><strong>RIF:</strong> J-00000000-0</p>
                    <p class="mb-0"><strong>Monto:</strong> Bs ${total}</p>
                </div>
                <p class="text-muted">Una vez realizada la transferencia, envía el comprobante por WhatsApp al +58 412-1234567</p>
            </div>
        `,
        icon: 'info',
        confirmButtonText: 'Entendido',
        showCancelButton: true,
        cancelButtonText: 'Cancelar pedido'
    }).then((result) => {
        if (result.isConfirmed) {
            completeOrder(order);
        }
    });
}

function showPagoMovilInstructions(order) {
    const total = order.total.toFixed(2);
    
    Swal.fire({
        title: 'Instrucciones de Pago Móvil',
        html: `
            <div class="text-start">
                <h6 class="mb-3">Realiza el pago móvil a:</h6>
                <div class="bg-light p-3 rounded mb-3">
                    <p class="mb-1"><strong>Banco:</strong> Banco de Venezuela</p>
                    <p class="mb-1"><strong>Teléfono:</strong> 0412-1234567</p>
                    <p class="mb-1"><strong>Cédula:</strong> 12.345.678</p>
                    <p class="mb-1"><strong>Monto:</strong> Bs ${total}</p>
                </div>
                <p class="text-muted">Envía el comprobante por WhatsApp para confirmar tu pedido</p>
            </div>
        `,
        icon: 'info',
        confirmButtonText: 'Entendido',
        showCancelButton: true,
        cancelButtonText: 'Cancelar pedido'
    }).then((result) => {
        if (result.isConfirmed) {
            completeOrder(order);
        }
    });
}

function processCashPayment(order) {
    Swal.fire({
        title: 'Pago en Efectivo Confirmado',
        html: `
            <div class="text-start">
                <p>Tu pedido será procesado y el pago se realizará en el momento de la entrega.</p>
                <div class="bg-warning p-3 rounded mt-3">
                    <p class="mb-0"><strong>Importante:</strong> Ten el monto exacto listo para la entrega.</p>
                </div>
            </div>
        `,
        icon: 'success',
        confirmButtonText: 'Confirmar pedido'
    }).then((result) => {
        if (result.isConfirmed) {
            completeOrder(order);
        }
    });
}

function processWhatsAppPayment(order) {
    const message = createWhatsAppMessage(order);
    const phoneNumber = '584121234567'; // Formato internacional sin +
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    Swal.fire({
        title: 'Redirigiendo a WhatsApp',
        text: 'Serás redirigido a WhatsApp para completar el pago',
        icon: 'info',
        confirmButtonText: 'Continuar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            completeOrder(order);
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
            }, 1000);
        }
    });
}

function createWhatsAppMessage(order) {
    let message = `¡Hola! Quiero realizar un pedido:\n\n`;
    message += `📋 *Datos del Cliente:*\n`;
    message += `Nombre: ${order.customer.name}\n`;
    message += `Teléfono: ${order.customer.phone}\n`;
    message += `Dirección: ${order.customer.address}\n\n`;
    
    message += `🛒 *Productos:*\n`;
    order.items.forEach(item => {
        message += `• ${item.name} x${item.quantity} - Bs ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    message += `\n💰 *Total: Bs ${order.total.toFixed(2)}*\n`;
    message += `💳 *Método de Pago: ${getPaymentMethodName(order.paymentMethod)}*\n\n`;
    message += `¡Gracias! 😊`;
    
    return message;
}

function getPaymentMethodName(method) {
    const methods = {
        'transferencia': 'Transferencia Bancaria',
        'pagomovil': 'Pago Móvil',
        'efectivo': 'Efectivo',
        'whatsapp': 'WhatsApp'
    };
    return methods[method] || method;
}

function completeOrder(order) {
    // Close checkout modal
    const checkoutModal = bootstrap.Modal.getInstance(document.getElementById('checkoutModal'));
    if (checkoutModal) {
        checkoutModal.hide();
    }
    
    // Clear cart
    cart = [];
    updateCartUI();
    saveCartToStorage();
    
    // Show success message
    Swal.fire({
        title: '¡Pedido Confirmado!',
        html: `
            <div class="text-center">
                <i class="fas fa-check-circle text-success fa-3x mb-3"></i>
                <p>Tu pedido #${order.id} ha sido confirmado exitosamente.</p>
                <p class="text-muted">Te contactaremos pronto para coordinar la entrega.</p>
                <div class="bg-light p-3 rounded mt-3">
                    <p class="mb-0"><strong>Total:</strong> Bs ${order.total.toFixed(2)}</p>
                </div>
            </div>
        `,
        icon: 'success',
        confirmButtonText: 'Perfecto',
        allowOutsideClick: false
    });
    
    // Reset form
    document.getElementById('checkout-form').reset();
}

// Storage Functions
function saveCartToStorage() {
    localStorage.setItem('pedidosExpressCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('pedidosExpressCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function openWhatsApp() {
    const message = '¡Hola! Estoy interesado en los productos de Pedidos Express Satélite Norte.';
    const phoneNumber = '584121234567';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});

// Add scroll animations
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar-principal');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(44, 62, 80, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--gradient-primary)';
        navbar.style.backdropFilter = 'none';
    }
});

// Initialize tooltips and popovers if available
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize Bootstrap popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});