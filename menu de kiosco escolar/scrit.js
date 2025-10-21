const NUMERO_WHATSAPP = '+59167741268';
const PASSWORD_ADMIN = 'admin123';

let productos = [
    { id: 1, nombre: 'Empanada', precio: 4, imagen: null, icono: '🥟', categoria: 'comidas' },
    { id: 2, nombre: 'Somo', precio: 3, imagen: null, icono: '🍪', categoria: 'comidas' },
    { id: 3, nombre: 'Chicha', precio: 2.5, imagen: null, icono: '🥤', categoria: 'bebidas' },
    { id: 4, nombre: 'Nachos', precio: 3, imagen: null, icono: '🧀', categoria: 'comidas' },
    { id: 5, nombre: 'Rollito de Canela', precio: 4, imagen: null, icono: '🥐', categoria: 'comidas' },
    { id: 6, nombre: 'Pilfrut', precio: 1.50, imagen: null, icono: '🧃', categoria: 'bebidas' },
    { id: 7, nombre: 'Asadito', precio: 4, imagen: null, icono: '🥖', categoria: 'comidas' },
    { id: 8, nombre: 'Soda', precio: 4, imagen: null, icono: '🥤', categoria: 'bebidas' },
    { id: 9, nombre: 'Jugo', precio: 4.50, imagen: null, icono: '🍹', categoria: 'bebidas' },
    { id: 10, nombre: 'Bolo', precio: 1.50, imagen: null, icono: '🍰', categoria: 'comidas' },
    { id: 11, nombre: 'Pollo', precio: 10, imagen: null, icono: '🍗', categoria: 'comidas' },
    { id: 12, nombre: 'Relleno de Papa', precio: 4, imagen: null, icono: '🥔', categoria: 'comidas' }
];

let carrito = [];
let cantidades = {};
let categoriaActual = 'todos';
let busquedaActual = '';
let imagenTemporal = null;
let autenticado = false;

function inicializarCantidades() {
    productos.forEach(p => cantidades[p.id] = 1);
}

function inicializar() {
    inicializarCantidades();
    renderProductos();
    configurarBusqueda();
    configurarEventos();
}

function solicitarAccesoAdmin() {
    swal({
        title: "Acceso Administrativo",
        text: "Ingresa la contraseña de administrador:",
        content: {
            element: "input",
            attributes: {
                placeholder: "Contraseña",
                type: "password",
            },
        },
        buttons: {
            cancel: "Cancelar",
            confirm: "Acceder"
        },
    }).then((password) => {
        if (password === PASSWORD_ADMIN) {
            autenticado = true;
            swal({
                title: "¡Acceso concedido!",
                text: "Bienvenido al panel de administración",
                icon: "success",
                timer: 1500,
                buttons: false
            }).then(() => {
                toggleAdmin();
            });
        } else if (password !== null) {
            swal({
                title: "Acceso denegado",
                text: "Contraseña incorrecta",
                icon: "error",
                button: "Intentar de nuevo"
            });
        }
    });
}

function previsualizarImagen(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagenTemporal = e.target.result;
            const preview = document.getElementById('imagePreview');
            const placeholder = document.getElementById('uploadPlaceholder');
            const uploadArea = document.getElementById('uploadArea');
            
            preview.src = imagenTemporal;
            preview.style.display = 'block';
            placeholder.style.display = 'none';
            uploadArea.classList.add('has-image');
        };
        reader.readAsDataURL(file);
    }
}

function renderProductos() {
    const grid = document.getElementById('productsGrid');
    
    if (!grid) return;
    
    let productosFiltrados = productos;
    
    if (categoriaActual !== 'todos') {
        productosFiltrados = productosFiltrados.filter(p => p.categoria === categoriaActual);
    }
    
    if (busquedaActual) {
        productosFiltrados = productosFiltrados.filter(p => 
            p.nombre.toLowerCase().includes(busquedaActual.toLowerCase())
        );
    }
    
    if (productosFiltrados.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: white; font-size: 1.2rem;">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
                No se encontraron productos
            </div>
        `;
        return;
    }
    
    grid.innerHTML = productosFiltrados.map((producto, index) => `
        <div class="product-card" style="animation-delay: ${index * 0.1}s">
            <div class="product-header">
                ${producto.imagen 
                    ? `<img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">` 
                    : `<div class="product-icon">${producto.icono}</div>`
                }
            </div>
            <div class="product-body">
                <h3 class="product-name">${producto.nombre}</h3>
                <div class="product-price">${producto.precio.toFixed(2)} Bs</div>
                <div class="quantity-section">
                    <label style="font-weight: 600; color: #6b7280;">Cantidad:</label>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="cambiarCantidad(${producto.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity-display" id="qty-${producto.id}">${cantidades[producto.id] || 1}</span>
                        <button class="quantity-btn" onclick="cambiarCantidad(${producto.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="add-btn" onclick="agregarAlCarrito(${producto.id})">
                    <i class="fas fa-cart-plus"></i> Agregar al Carrito
                </button>
            </div>
        </div>
    `).join('');
}

function cambiarCantidad(id, cambio) {
    cantidades[id] = Math.max(1, Math.min(99, (cantidades[id] || 1) + cambio));
    const elemento = document.getElementById(`qty-${id}`);
    if (elemento) {
        elemento.textContent = cantidades[id];
    }
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    
    if (!producto) return;
    
    const cantidad = cantidades[id] || 1;
    const itemExistente = carrito.find(item => item.id === id);
    
    if (itemExistente) {
        itemExistente.cantidad += cantidad;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            icono: producto.icono,
            imagen: producto.imagen,
            cantidad: cantidad
        });
    }
    
    cantidades[id] = 1;
    const elemento = document.getElementById(`qty-${id}`);
    if (elemento) {
        elemento.textContent = 1;
    }
    
    swal({
        title: "¡Agregado!",
        text: `${producto.nombre} añadido al carrito`,
        icon: "success",
        timer: 1500,
        buttons: false
    });
    
    renderCarrito();
    actualizarContadorCarrito();
}

function eliminarDelCarrito(id) {
    const producto = carrito.find(item => item.id === id);
    
    if (!producto) return;
    
    swal({
        title: "¿Eliminar producto?",
        text: `${producto.nombre} (${producto.cantidad} unidad${producto.cantidad > 1 ? 'es' : ''})`,
        icon: "warning",
        buttons: {
            cancel: {
                text: "No, conservar",
                value: null,
                visible: true,
                closeModal: true
            },
            confirm: {
                text: "Sí, eliminar",
                value: true,
                closeModal: true
            }
        },
        dangerMode: true
    }).then((confirmar) => {
        if (confirmar === true) {
            carrito = carrito.filter(item => item.id !== id);
            renderCarrito();
            actualizarContadorCarrito();
            
            swal({
                title: "¡Eliminado!",
                text: `${producto.nombre} fue eliminado del carrito`,
                icon: "success",
                timer: 1500,
                buttons: false
            });
            
            if (carrito.length === 0) {
                setTimeout(() => {
                    const modal = document.getElementById('cartModal');
                    if (modal) {
                        modal.classList.remove('active');
                    }
                }, 1500);
            }
        }
    });
}

function renderCarrito() {
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    const totalPrice = document.getElementById('totalPrice');
    
    if (!cartItems || !cartFooter || !totalPrice) return;
    
    if (carrito.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-basket"></i>
                <p>Tu carrito está vacío</p>
            </div>
        `;
        cartFooter.style.display = 'none';
        return;
    }
    
    cartItems.innerHTML = carrito.map(item => `
        <div class="cart-item">
            ${item.imagen 
                ? `<img src="${item.imagen}" alt="${item.nombre}" class="cart-item-image">` 
                : `<div class="cart-item-icon">${item.icono}</div>`
            }
            <div class="cart-item-info">
                <div class="cart-item-name">${item.nombre}</div>
                <div class="cart-item-details">${item.cantidad} × ${item.precio.toFixed(2)} Bs</div>
            </div>
            <div class="cart-item-price">${(item.precio * item.cantidad).toFixed(2)} Bs</div>
            <button class="remove-item-btn" onclick="eliminarDelCarrito(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    totalPrice.textContent = `${total.toFixed(2)} Bs`;
    cartFooter.style.display = 'block';
}

function actualizarContadorCarrito() {
    const count = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = count;
    }
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.classList.toggle('active');
    }
}

function toggleAdmin() {
    if (!autenticado) {
        solicitarAccesoAdmin();
        return;
    }
    
    const modal = document.getElementById('adminModal');
    if (modal) {
        modal.classList.toggle('active');
        if (modal.classList.contains('active')) {
            renderAdminProducts();
        }
    }
}

function filterProducts(categoria) {
    categoriaActual = categoria;
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-category') === categoria) {
            btn.classList.add('active');
        }
    });
    
    renderProductos();
}

function configurarBusqueda() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            busquedaActual = e.target.value.trim();
            renderProductos();
        });
    }
}

function configurarEventos() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.remove('active');
            });
        }
    });
}

function agregarProducto(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('productName').value.trim();
    const precio = parseFloat(document.getElementById('productPrice').value);
    const categoria = document.getElementById('productCategory').value;
    
    if (!nombre || !precio || !categoria) {
        swal({
            title: "Error",
            text: "Por favor completa todos los campos",
            icon: "error",
            button: "Entendido"
        });
        return;
    }

    if (!imagenTemporal) {
        swal({
            title: "Error",
            text: "Por favor sube una imagen del producto",
            icon: "error",
            button: "Entendido"
        });
        return;
    }
    
    const nuevoId = Math.max(...productos.map(p => p.id), 0) + 1;
    
    const nuevoProducto = {
        id: nuevoId,
        nombre: nombre,
        precio: precio,
        imagen: imagenTemporal,
        icono: categoria === 'bebidas' ? '🥤' : '🍽️',
        categoria: categoria
    };
    
    productos.push(nuevoProducto);
    cantidades[nuevoId] = 1;
    
    document.getElementById('addProductForm').reset();
    document.getElementById('imagePreview').style.display = 'none';
    document.getElementById('uploadPlaceholder').style.display = 'block';
    document.getElementById('uploadArea').classList.remove('has-image');
    imagenTemporal = null;
    
    swal({
        title: "¡Producto agregado!",
        text: `${nombre} fue agregado al menú`,
        icon: "success",
        timer: 2000,
        buttons: false
    });
    
    renderProductos();
    renderAdminProducts();
}

function eliminarProducto(id) {
    const producto = productos.find(p => p.id === id);
    
    if (!producto) return;
    
    swal({
        title: "¿Eliminar producto?",
        text: `${producto.nombre} será eliminado permanentemente`,
        icon: "warning",
        buttons: {
            cancel: {
                text: "Cancelar",
                value: null,
                visible: true,
                closeModal: true
            },
            confirm: {
                text: "Sí, eliminar",
                value: true,
                closeModal: true
            }
        },
        dangerMode: true
    }).then((confirmar) => {
        if (confirmar === true) {
            productos = productos.filter(p => p.id !== id);
            carrito = carrito.filter(item => item.id !== id);
            delete cantidades[id];
            
            swal({
                title: "¡Eliminado!",
                text: `${producto.nombre} fue eliminado del menú`,
                icon: "success",
                timer: 1500,
                buttons: false
            });
            
            renderProductos();
            renderCarrito();
            actualizarContadorCarrito();
            renderAdminProducts();
        }
    });
}

function renderAdminProducts() {
    const lista = document.getElementById('adminProductsList');
    
    if (!lista) return;
    
    if (productos.length === 0) {
        lista.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-box-open"></i>
                <p>No hay productos en el menú</p>
            </div>
        `;
        return;
    }
    
    lista.innerHTML = productos.map(producto => `
        <div class="admin-product-item">
            ${producto.imagen 
                ? `<img src="${producto.imagen}" alt="${producto.nombre}" class="admin-product-image">` 
                : `<div class="admin-product-icon">${producto.icono}</div>`
            }
            <div class="admin-product-info">
                <div class="admin-product-name">${producto.nombre}</div>
                <div class="admin-product-details">${producto.precio.toFixed(2)} Bs - ${producto.categoria}</div>
            </div>
            <button class="btn-delete" onclick="eliminarProducto(${producto.id})">
                <i class="fas fa-trash"></i> Eliminar
            </button>
        </div>
    `).join('');
}

function enviarWhatsApp() {
    if (carrito.length === 0) {
        swal({
            title: "Carrito vacío",
            text: "Agrega productos antes de hacer el pedido",
            icon: "warning",
            button: "Entendido"
        });
        return;
    }
    
    let mensaje = "🛒 *PEDIDO DEL KIOSKO ESCOLAR*\n";
    mensaje += "━━━━━━━━━━━━━━━━━━━━━━\n\n";
    
    carrito.forEach(item => {
        mensaje += `*${item.nombre}*\n`;
        mensaje += `   Cantidad: ${item.cantidad}\n`;
        mensaje += `   Precio unitario: ${item.precio.toFixed(2)} Bs\n`;
        mensaje += `   Subtotal: ${(item.precio * item.cantidad).toFixed(2)} Bs\n\n`;
    });
    
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    mensaje += "━━━━━━━━━━━━━━━━━━━━━━\n";
    mensaje += `💰 *TOTAL A PAGAR: ${total.toFixed(2)} Bs*\n\n`;
    mensaje += "¡Gracias por tu pedido! 😊";
    
    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
    
    swal({
        title: "¿Enviar pedido?",
        text: `Total: ${total.toFixed(2)} Bs`,
        icon: "info",
        buttons: {
            cancel: {
                text: "Cancelar",
                value: null,
                visible: true,
                closeModal: true
            },
            confirm: {
                text: "Enviar por WhatsApp",
                value: true,
                closeModal: true
            }
        },
        closeOnClickOutside: false
    }).then((confirmar) => {
        if (confirmar === true) {
            window.open(url, '_blank');
            
            setTimeout(() => {
                carrito = [];
                renderCarrito();
                actualizarContadorCarrito();
                const modal = document.getElementById('cartModal');
                if (modal) {
                    modal.classList.remove('active');
                }
                
                swal({
                    title: "¡Pedido enviado!",
                    text: "Tu pedido ha sido enviado por WhatsApp",
                    icon: "success",
                    timer: 2000,
                    buttons: false
                });
            }, 1000);
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    inicializar();
}