// Datos de productos con imágenes reales y precios en Bolivianos
const products = [
    // ELECTRODOMÉSTICOS (15 productos)
    {
        id: 1,
        name: "Refrigerador Samsung 300L",
        price: 2500,
        category: "electrodomesticos",
        image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=300&h=300&fit=crop",
        description: "Refrigerador de 300 litros con tecnología No Frost",
        rating: 4.7,
        reviews: 125,
        inStock: true,
        discount: 0
    },
    {
        id: 2,
        name: "Microondas LG 25L",
        price: 450,
        category: "electrodomesticos",
        image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=300&h=300&fit=crop",
        description: "Microondas con grill y función descongelar",
        rating: 4.5,
        reviews: 89,
        inStock: true,
        discount: 10
    },
    {
        id: 3,
        name: "Lavadora Whirlpool 15kg",
        price: 1800,
        category: "electrodomesticos",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
        description: "Lavadora automática con múltiples programas",
        rating: 4.6,
        reviews: 156,
        inStock: true,
        discount: 0
    },
    {
        id: 4,
        name: "Televisor Smart 55\"",
        price: 3200,
        category: "electrodomesticos",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop",
        description: "Smart TV 4K con Android TV integrado",
        rating: 4.8,
        reviews: 203,
        inStock: true,
        discount: 15
    },
    {
        id: 5,
        name: "Licuadora Oster 3 velocidades",
        price: 180,
        category: "electrodomesticos",
        image: "https://images.unsplash.com/photo-1585515655859-8bb5b6b4a8a0?w=300&h=300&fit=crop",
        description: "Licuadora de alta potencia con vaso de vidrio",
        rating: 4.4,
        reviews: 67,
        inStock: true,
        discount: 0
    },
    {
        id: 6,
        name: "Cafetera Nespresso",
        price: 650,
        category: "electrodomesticos",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop",
        description: "Cafetera automática con cápsulas",
        rating: 4.7,
        reviews: 134,
        inStock: true,
        discount: 0
    },
    {
        id: 7,
        name: "Plancha a Vapor Philips",
        price: 320,
        category: "electrodomesticos",
        image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c2?w=300&h=300&fit=crop",
        description: "Plancha con sistema de vapor continuo",
        rating: 4.3,
        reviews: 45,
        inStock: true,
        discount: 0
    },
    {
        id: 8,
        name: "Aspiradora Electrolux",
        price: 280,
        category: "electrodomesticos",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
        description: "Aspiradora sin cable con filtro HEPA",
        rating: 4.5,
        reviews: 78,
        inStock: true,
        discount: 0
    },
    {
        id: 9,
        name: "Horno Eléctrico Mabe",
        price: 850,
        category: "electrodomesticos",
        image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=300&h=300&fit=crop",
        description: "Horno eléctrico con convección y grill",
        rating: 4.6,
        reviews: 92,
        inStock: true,
        discount: 0
    },
    {
        id: 10,
        name: "Ventilador de Techo",
        price: 150,
        category: "electrodomesticos",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
        description: "Ventilador de techo con control remoto",
        rating: 4.2,
        reviews: 56,
        inStock: true,
        discount: 0
    },
    {
        id: 11,
        name: "Batidora KitchenAid",
        price: 420,
        category: "electrodomesticos",
        image: "https://images.unsplash.com/photo-1585515655859-8bb5b6b4a8a0?w=300&h=300&fit=crop",
        description: "Batidora planetaria de 5 litros",
        rating: 4.8,
        reviews: 145,
        inStock: true,
        discount: 0
    },
    {
        id: 12,
        name: "Secadora de Ropa",
        price: 1200,
        category: "electrodomesticos",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
        description: "Secadora eléctrica con sensor de humedad",
        rating: 4.4,
        reviews: 73,
        inStock: true,
        discount: 0
    },
    {
        id: 13,
        name: "Purificador de Aire",
        price: 380,
        category: "electrodomesticos",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
        description: "Purificador con filtro HEPA y ionizador",
        rating: 4.5,
        reviews: 89,
        inStock: true,
        discount: 0
    },
    {
        id: 14,
        name: "Termo Eléctrico 50L",
        price: 750,
        category: "electrodomesticos",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop",
        description: "Termo eléctrico con protección anticorrosión",
        rating: 4.6,
        reviews: 112,
        inStock: true,
        discount: 0
    },
    {
        id: 15,
        name: "Freidora de Aire",
        price: 290,
        category: "electrodomesticos",
        image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=300&h=300&fit=crop",
        description: "Freidora sin aceite con capacidad de 4L",
        rating: 4.7,
        reviews: 167,
        inStock: true,
        discount: 0
    },

    // ROPA (15 productos)
    {
        id: 16,
        name: "Jeans Levis 501",
        price: 180,
        category: "ropa",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop",
        description: "Jeans clásicos de mezclilla azul",
        rating: 4.6,
        reviews: 234,
        inStock: true,
        discount: 0
    },
    {
        id: 17,
        name: "Camisa Polo Ralph Lauren",
        price: 120,
        category: "ropa",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop",
        description: "Camisa polo de algodón pima",
        rating: 4.7,
        reviews: 189,
        inStock: true,
        discount: 0
    },
    {
        id: 18,
        name: "Vestido Casual Zara",
        price: 95,
        category: "ropa",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop",
        description: "Vestido de algodón con estampado floral",
        rating: 4.5,
        reviews: 156,
        inStock: true,
        discount: 0
    },
    {
        id: 19,
        name: "Chaqueta de Cuero",
        price: 450,
        category: "ropa",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
        description: "Chaqueta de cuero genuino estilo vintage",
        rating: 4.8,
        reviews: 78,
        inStock: true,
        discount: 0
    },
    {
        id: 20,
        name: "Zapatillas Nike Air Max",
        price: 320,
        category: "ropa",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
        description: "Zapatillas deportivas con tecnología Air Max",
        rating: 4.7,
        reviews: 298,
        inStock: true,
        discount: 0
    },
    {
        id: 21,
        name: "Sudadera con Capucha",
        price: 85,
        category: "ropa",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop",
        description: "Sudadera de algodón con capucha y bolsillo",
        rating: 4.4,
        reviews: 123,
        inStock: true,
        discount: 0
    },
    {
        id: 22,
        name: "Pantalón Deportivo Adidas",
        price: 110,
        category: "ropa",
        image: "https://images.unsplash.com/photo-1506629905607-3b4a0b4b4b4b?w=300&h=300&fit=crop",
        description: "Pantalón deportivo con tecnología ClimaLite",
        rating: 4.5,
        reviews: 167,
        inStock: true,
        discount: 0
    },
    {
        id: 23,
        name: "Blusa de Seda",
        price: 75,
        category: "ropa",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=300&h=300&fit=crop",
        description: "Blusa de seda natural con botones de perla",
        rating: 4.6,
        reviews: 89,
        inStock: true,
        discount: 0
    },
    {
        id: 24,
        name: "Cinturón de Cuero",
        price: 45,
        category: "ropa",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
        description: "Cinturón de cuero genuino con hebilla metálica",
        rating: 4.3,
        reviews: 67,
        inStock: true,
        discount: 0
    },
    {
        id: 25,
        name: "Gafas de Sol Ray-Ban",
        price: 180,
        category: "ropa",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=300&h=300&fit=crop",
        description: "Gafas de sol polarizadas con montura de acetato",
        rating: 4.8,
        reviews: 145,
        inStock: true,
        discount: 0
    },
    {
        id: 26,
        name: "Reloj Casio Digital",
        price: 65,
        category: "ropa",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
        description: "Reloj digital resistente al agua",
        rating: 4.4,
        reviews: 198,
        inStock: true,
        discount: 0
    },
    {
        id: 27,
        name: "Bolso de Cuero",
        price: 120,
        category: "ropa",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
        description: "Bolso de cuero italiano con diseño minimalista",
        rating: 4.6,
        reviews: 134,
        inStock: true,
        discount: 0
    },
    {
        id: 28,
        name: "Bufanda de Lana",
        price: 35,
        category: "ropa",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop",
        description: "Bufanda de lana merino con estampado escocés",
        rating: 4.2,
        reviews: 78,
        inStock: true,
        discount: 0
    },
    {
        id: 29,
        name: "Guantes de Cuero",
        price: 55,
        category: "ropa",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop",
        description: "Guantes de cuero con forro de lana",
        rating: 4.5,
        reviews: 56,
        inStock: true,
        discount: 0
    },
    {
        id: 30,
        name: "Sombrero de Paja",
        price: 25,
        category: "ropa",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=300&h=300&fit=crop",
        description: "Sombrero de paja toquilla con cinta decorativa",
        rating: 4.1,
        reviews: 45,
        inStock: true,
        discount: 0
    },

    // VÍVERES (15 productos)
    {
        id: 31,
        name: "Arroz Pilaf 5kg",
        price: 25,
        category: "viveres",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop",
        description: "Arroz de grano largo tipo pilaf",
        rating: 4.5,
        reviews: 234,
        inStock: true,
        discount: 0
    },
    {
        id: 32,
        name: "Aceite de Oliva Extra Virgen",
        price: 45,
        category: "viveres",
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=300&h=300&fit=crop",
        description: "Aceite de oliva extra virgen 500ml",
        rating: 4.7,
        reviews: 189,
        inStock: true,
        discount: 0
    },
    {
        id: 33,
        name: "Leche Entera 1L",
        price: 8,
        category: "viveres",
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop",
        description: "Leche fresca pasteurizada",
        rating: 4.6,
        reviews: 456,
        inStock: true,
        discount: 0
    },
    {
        id: 34,
        name: "Pan Integral Artesanal",
        price: 12,
        category: "viveres",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=300&fit=crop",
        description: "Pan integral hecho a mano",
        rating: 4.4,
        reviews: 123,
        inStock: true,
        discount: 0
    },
    {
        id: 35,
        name: "Huevos Frescos x12",
        price: 15,
        category: "viveres",
        image: "https://images.unsplash.com/photo-1518569656558-1c25a1d7bb0d?w=300&h=300&fit=crop",
        description: "Huevos frescos de gallina criolla",
        rating: 4.8,
        reviews: 298,
        inStock: true,
        discount: 0
    },
    {
        id: 36,
        name: "Queso Fresco 500g",
        price: 18,
        category: "viveres",
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=300&fit=crop",
        description: "Queso fresco de vaca",
        rating: 4.5,
        reviews: 167,
        inStock: true,
        discount: 0
    },
    {
        id: 37,
        name: "Tomates Frescos 1kg",
        price: 6,
        category: "viveres",
        image: "https://images.unsplash.com/photo-1546470427-5a3c4b8b8b8b?w=300&h=300&fit=crop",
        description: "Tomates frescos de invernadero",
        rating: 4.3,
        reviews: 89,
        inStock: true,
        discount: 0
    },
    {
        id: 38,
        name: "Cebolla Blanca 1kg",
        price: 4,
        category: "viveres",
        image: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=300&h=300&fit=crop",
        description: "Cebolla blanca fresca",
        rating: 4.2,
        reviews: 67,
        inStock: true,
        discount: 0
    },
    {
        id: 39,
        name: "Papa Nacional 2kg",
        price: 8,
        category: "viveres",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=300&h=300&fit=crop",
        description: "Papa nacional de primera calidad",
        rating: 4.6,
        reviews: 198,
        inStock: true,
        discount: 0
    },
    {
        id: 40,
        name: "Carne de Res 1kg",
        price: 35,
        category: "viveres",
        image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300&h=300&fit=crop",
        description: "Carne de res fresca",
        rating: 4.7,
        reviews: 145,
        inStock: true,
        discount: 0
    },
    {
        id: 41,
        name: "Pollo Entero 1.5kg",
        price: 22,
        category: "viveres",
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&h=300&fit=crop",
        description: "Pollo fresco entero",
        rating: 4.5,
        reviews: 134,
        inStock: true,
        discount: 0
    },
    {
        id: 42,
        name: "Pescado Fresco 1kg",
        price: 28,
        category: "viveres",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=300&fit=crop",
        description: "Pescado fresco del día",
        rating: 4.4,
        reviews: 78,
        inStock: true,
        discount: 0
    },
    {
        id: 43,
        name: "Frutas Variadas 2kg",
        price: 20,
        category: "viveres",
        image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&h=300&fit=crop",
        description: "Mix de frutas frescas de temporada",
        rating: 4.6,
        reviews: 156,
        inStock: true,
        discount: 0
    },
    {
        id: 44,
        name: "Verduras Frescas 1kg",
        price: 12,
        category: "viveres",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=300&fit=crop",
        description: "Mix de verduras frescas",
        rating: 4.5,
        reviews: 89,
        inStock: true,
        discount: 0
    },
    {
        id: 45,
        name: "Café en Grano 500g",
        price: 35,
        category: "viveres",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop",
        description: "Café en grano tostado artesanalmente",
        rating: 4.8,
        reviews: 167,
        inStock: true,
        discount: 0
    },

    // LIMPIEZA (15 productos)
    {
        id: 46,
        name: "Detergente Líquido 1L",
        price: 18,
        category: "limpieza",
        image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c2?w=300&h=300&fit=crop",
        description: "Detergente líquido concentrado",
        rating: 4.5,
        reviews: 234,
        inStock: true,
        discount: 0
    },
    {
        id: 47,
        name: "Suavizante de Ropa 1L",
        price: 15,
        category: "limpieza",
        image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c2?w=300&h=300&fit=crop",
        description: "Suavizante con fragancia a lavanda",
        rating: 4.4,
        reviews: 189,
        inStock: true,
        discount: 0
    },
    {
        id: 48,
        name: "Limpiavidrios Multiuso",
        price: 12,
        category: "limpieza",
        image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c2?w=300&h=300&fit=crop",
        description: "Limpiador multiuso para vidrios y superficies",
        rating: 4.6,
        reviews: 156,
        inStock: true,
        discount: 0
    },
    {
        id: 49,
        name: "Desinfectante 500ml",
        price: 22,
        category: "limpieza",
        image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c2?w=300&h=300&fit=crop",
        description: "Desinfectante bactericida y fungicida",
        rating: 4.7,
        reviews: 298,
        inStock: true,
        discount: 0
    },
    {
        id: 50,
        name: "Jabón de Tocador x3",
        price: 8,
        category: "limpieza",
        image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c2?w=300&h=300&fit=crop",
        description: "Jabón de tocador con glicerina",
        rating: 4.3,
        reviews: 123,
        inStock: true,
        discount: 0
    },
    {
        id: 51,
        name: "Shampoo Familiar 400ml",
        price: 25,
        category: "limpieza",
        image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c2?w=300&h=300&fit=crop",
        description: "Shampoo para toda la familia",
        rating: 4.5,
        reviews: 167,
        inStock: true,
        discount: 0
    },
    {
        id: 52,
        name: "Acondicionador 400ml",
        price: 22,
        category: "limpieza",
        image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c2?w=300&h=300&fit=crop",
        description: "Acondicionador hidratante",
        rating: 4.4,
        reviews: 89,
        inStock: true,
        discount: 0
    },
    {
        id: 53,
        name: "Crema Dental 150g",
        price: 6,
        category: "limpieza",
        image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c2?w=300&h=300&fit=crop",
        description: "Crema dental con flúor",
        rating: 4.6,
        reviews: 198,
        inStock: true,
        discount: 0
    },
    {
        id: 54,
        name: "Cepillo de Dientes",
        price: 4,
        category: "limpieza",
        image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c2?w=300&h=300&fit=crop",
        description: "Cepillo de dientes de cerdas suaves",
        rating: 4.2,
        reviews: 67,
        inStock: true,
        discount: 0
    },
    {
        id: 55,
        name: "Papel Higiénico x4",
        price: 15,
        category: "limpieza",
        image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c2?w=300&h=300&fit=crop",
        description: "Papel higiénico ultra suave",
        rating: 4.7,
        reviews: 145,
        inStock: true,
        discount: 0
    },
    {
        id: 56,
        name: "Toallas de Papel x6",
        price: 18,
        category: "limpieza",
        image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c2?w=300&h=300&fit=crop",
        description: "Toallas de papel absorbentes",
        rating: 4.5,
        reviews: 134,
        inStock: true,
        discount: 0
    },
    {
        id: 57,
        name: "Trapo Multiuso x5",
        price: 10,
        category: "limpieza",
        image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c2?w=300&h=300&fit=crop",
        description: "Trapo multiuso de microfibra",
        rating: 4.3,
        reviews: 78,
        inStock: true,
        discount: 0
    },
    {
        id: 58,
        name: "Escoba y Recogedor",
        price: 35,
        category: "limpieza",
        image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c2?w=300&h=300&fit=crop",
        description: "Set de escoba y recogedor",
        rating: 4.4,
        reviews: 56,
        inStock: true,
        discount: 0
    },
    {
        id: 59,
        name: "Aspiradora Manual",
        price: 45,
        category: "limpieza",
        image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c2?w=300&h=300&fit=crop",
        description: "Aspiradora manual portátil",
        rating: 4.6,
        reviews: 89,
        inStock: true,
        discount: 0
    },
    {
        id: 60,
        name: "Ambientador 250ml",
        price: 8,
        category: "limpieza",
        image: "https://images.unsplash.com/photo-1581578731548-c6a0c3f2f2c2?w=300&h=300&fit=crop",
        description: "Ambientador con fragancia a limón",
        rating: 4.1,
        reviews: 45,
        inStock: true,
        discount: 0
    }
];

// Estado del carrito
let cart = [];
let currentFilter = 'all';

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    updateCartCount();
    
    // Event listeners
    document.querySelector('.cart-icon').addEventListener('click', toggleCart);
    document.getElementById('searchInput').addEventListener('input', searchProducts);
});

// Mostrar productos
function displayProducts(productsToShow) {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

// Crear tarjeta de producto
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const discountBadge = product.discount > 0 ? 
        `<div class="discount-badge">-${product.discount}%</div>` : '';
    
    const stockStatus = product.inStock ? 
        '<span class="in-stock"><i class="fas fa-check-circle"></i> En Stock</span>' :
        '<span class="out-of-stock"><i class="fas fa-times-circle"></i> Agotado</span>';
    
    const ratingStars = generateStarRating(product.rating);
    
    card.innerHTML = `
        <div class="product-image">
            ${discountBadge}
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
            <div class="product-rating">
                ${ratingStars}
                <span class="rating-text">${product.rating} (${product.reviews} reseñas)</span>
            </div>
            <div class="product-price">
                ${product.discount > 0 ? 
                    `<span class="original-price">Bs ${product.price}</span>
                     <span class="discounted-price">Bs ${Math.round(product.price * (1 - product.discount/100))}</span>` :
                    `Bs ${product.price}`
                }
            </div>
            <div class="product-stock">${stockStatus}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})" ${!product.inStock ? 'disabled' : ''}>
                <i class="fas fa-cart-plus"></i> 
                ${product.inStock ? 'Agregar al Carrito' : 'Agotado'}
            </button>
        </div>
    `;
    return card;
}

// Generar estrellas de rating
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    
    // Estrellas llenas
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    // Media estrella
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Estrellas vacías
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Agregar producto al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    updateCartDisplay();
    
    // Mostrar notificación con SweetAlert
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

// Remover producto del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartDisplay();
    
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

// Actualizar cantidad de producto
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            updateCartDisplay();
        }
    }
}

// Actualizar contador del carrito
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = totalItems;
}

// Actualizar visualización del carrito
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Tu carrito está vacío</p>';
        cartTotal.textContent = '0';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">Bs ${item.price}</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Eliminar</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
        total += item.price * item.quantity;
    });
    
    cartTotal.textContent = total;
}

// Alternar carrito
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
}

// Alternar búsqueda
function toggleSearch() {
    const searchOverlay = document.getElementById('searchOverlay');
    searchOverlay.classList.toggle('active');
    
    if (searchOverlay.classList.contains('active')) {
        document.getElementById('searchInput').focus();
    }
}

// Filtrar productos por categoría
function filterProducts(category) {
    currentFilter = category;
    let filteredProducts;
    
    if (category === 'all') {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    displayProducts(filteredProducts);
    
    // Scroll a la sección de productos
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

// Ordenar productos
function sortProducts() {
    const sortSelect = document.getElementById('sortSelect');
    const sortValue = sortSelect.value;
    let sortedProducts = [...products];
    
    // Aplicar filtro actual si existe
    if (currentFilter !== 'all') {
        sortedProducts = sortedProducts.filter(product => product.category === currentFilter);
    }
    
    switch (sortValue) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            sortedProducts.sort((a, b) => b.rating - a.rating);
            break;
        default:
            // Mantener orden original
            break;
    }
    
    displayProducts(sortedProducts);
}

// Cargar más productos
function loadMoreProducts() {
    Swal.fire({
        title: 'Cargando...',
        text: 'Obteniendo más productos',
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });
    
    setTimeout(() => {
        Swal.close();
        Swal.fire({
            icon: 'success',
            title: '¡Listo!',
            text: 'Más productos cargados',
            timer: 1500,
            showConfirmButton: false,
            toast: true,
            position: 'top-end'
        });
    }, 2000);
}

// Buscar productos
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    let filteredProducts = products;
    
    if (currentFilter !== 'all') {
        filteredProducts = products.filter(product => product.category === currentFilter);
    }
    
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }
    
    displayProducts(filteredProducts);
    
    // Mostrar mensaje si no hay resultados
    if (filteredProducts.length === 0) {
        const productGrid = document.getElementById('productGrid');
        productGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: #6b7280; margin-bottom: 1rem;"></i>
                <h3 style="color: #374151; margin-bottom: 0.5rem;">No se encontraron productos</h3>
                <p style="color: #6b7280;">Intenta con otros términos de búsqueda</p>
            </div>
        `;
    }
}

// Mostrar detalles del producto
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    
    Swal.fire({
        title: product.name,
        html: `
            <div style="text-align: center;">
                <img src="${product.image}" alt="${product.name}" style="width: 200px; height: 200px; object-fit: cover; border-radius: 10px; margin-bottom: 15px;">
                <p style="margin-bottom: 10px;">${product.description}</p>
                <div style="margin-bottom: 10px;">
                    ${generateStarRating(product.rating)}
                    <span style="margin-left: 10px;">${product.rating} (${product.reviews} reseñas)</span>
                </div>
                <p style="font-size: 1.5em; font-weight: bold; color: #2563eb;">Bs ${product.price}</p>
                <p style="color: ${product.inStock ? '#10b981' : '#ef4444'};">
                    <i class="fas fa-${product.inStock ? 'check-circle' : 'times-circle'}"></i>
                    ${product.inStock ? 'En Stock' : 'Agotado'}
                </p>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: product.inStock ? 'Agregar al Carrito' : 'Cerrar',
        cancelButtonText: 'Cerrar',
        confirmButtonColor: '#2563eb',
        cancelButtonColor: '#6b7280'
    }).then((result) => {
        if (result.isConfirmed && product.inStock) {
            addToCart(productId);
        }
    });
}

// Proceder al checkout
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
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    Swal.fire({
        title: 'Método de Pago',
        text: `Total: Bs ${total}`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Tigo Money',
        cancelButtonText: 'Cancelar',
        showDenyButton: true,
        denyButtonText: 'QR Code',
        showCloseButton: true,
        closeButtonText: 'WhatsApp'
    }).then((result) => {
        if (result.isConfirmed) {
            processTigoMoneyPayment(total);
        } else if (result.isDenied) {
            processQRPayment(total);
        } else if (result.dismiss === Swal.DismissReason.close) {
            processWhatsAppPayment(total);
        }
    });
}

// Procesar pago con Tigo Money
function processTigoMoneyPayment(total) {
    Swal.fire({
        title: 'Pago con Tigo Money',
        html: `
            <div style="text-align: center;">
                <p>Total a pagar: <strong>Bs ${total}</strong></p>
                <p>Número de cuenta: <strong>12345678</strong></p>
                <p>Envía el pago y adjunta el comprobante</p>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Necesito Factura',
        cancelButtonText: 'Solo Comprobante',
        confirmButtonColor: '#2563eb',
        cancelButtonColor: '#10b981'
    }).then((result) => {
        if (result.isConfirmed) {
            showInvoiceForm(total);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            showOrderConfirmation(total, 'Tigo Money', false);
        }
    });
}

// Procesar pago con QR
function processQRPayment(total) {
    Swal.fire({
        title: 'Pago con QR',
        html: `
            <div style="text-align: center;">
                <p>Total a pagar: <strong>Bs ${total}</strong></p>
                <div style="width: 200px; height: 200px; background: #f0f0f0; margin: 20px auto; display: flex; align-items: center; justify-content: center; border-radius: 10px;">
                    <i class="fas fa-qrcode" style="font-size: 4rem; color: #666;"></i>
                </div>
                <p>Escanea el código QR para pagar</p>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Necesito Factura',
        cancelButtonText: 'Solo Comprobante',
        confirmButtonColor: '#2563eb',
        cancelButtonColor: '#10b981'
    }).then((result) => {
        if (result.isConfirmed) {
            showInvoiceForm(total);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            showOrderConfirmation(total, 'QR Code', false);
        }
    });
}

// Procesar pago con WhatsApp
function processWhatsAppPayment(total) {
    const orderDetails = cart.map(item => 
        `${item.name} x${item.quantity} - Bs ${item.price * item.quantity}`
    ).join('\n');
    
    const message = `Hola! Quiero realizar una compra:\n\n${orderDetails}\n\nTotal: Bs ${total}`;
    const whatsappUrl = `https://wa.me/591712345678?text=${encodeURIComponent(message)}`;
    
    Swal.fire({
        title: 'Contactar por WhatsApp',
        html: `
            <div style="text-align: center;">
                <p>Total a pagar: <strong>Bs ${total}</strong></p>
                <p>Se abrirá WhatsApp para confirmar tu pedido</p>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Abrir WhatsApp',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#25D366'
    }).then((result) => {
        if (result.isConfirmed) {
            window.open(whatsappUrl, '_blank');
            showOrderConfirmation(total, 'WhatsApp', false);
        }
    });
}

// Mostrar formulario de factura
function showInvoiceForm(total) {
    Swal.fire({
        title: 'Datos para Factura',
        html: `
            <div style="text-align: left;">
                <input type="text" id="companyName" class="swal2-input" placeholder="Nombre de la Empresa">
                <input type="text" id="nit" class="swal2-input" placeholder="NIT">
                <input type="text" id="address" class="swal2-input" placeholder="Dirección">
                <input type="text" id="phone" class="swal2-input" placeholder="Teléfono">
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Generar Factura',
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
            const companyName = document.getElementById('companyName').value;
            const nit = document.getElementById('nit').value;
            const address = document.getElementById('address').value;
            const phone = document.getElementById('phone').value;
            
            if (!companyName || !nit || !address || !phone) {
                Swal.showValidationMessage('Todos los campos son obligatorios');
                return false;
            }
            
            return { companyName, nit, address, phone };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            showOrderConfirmation(total, 'Tigo Money', true, result.value);
        }
    });
}

// Mostrar confirmación de pedido
function showOrderConfirmation(total, paymentMethod, hasInvoice, invoiceData = null) {
    const orderNumber = Math.floor(Math.random() * 1000000);
    
    let invoiceInfo = '';
    if (hasInvoice && invoiceData) {
        invoiceInfo = `
            <h4>Datos de Factura:</h4>
            <p><strong>Empresa:</strong> ${invoiceData.companyName}</p>
            <p><strong>NIT:</strong> ${invoiceData.nit}</p>
            <p><strong>Dirección:</strong> ${invoiceData.address}</p>
            <p><strong>Teléfono:</strong> ${invoiceData.phone}</p>
        `;
    }
    
    Swal.fire({
        title: '¡Pedido Confirmado!',
        html: `
            <div style="text-align: center;">
                <p><strong>Número de Pedido:</strong> #${orderNumber}</p>
                <p><strong>Total:</strong> Bs ${total}</p>
                <p><strong>Método de Pago:</strong> ${paymentMethod}</p>
                <p><strong>Estado:</strong> Pendiente de Pago</p>
                ${invoiceInfo}
                <hr style="margin: 20px 0;">
                <h4>Detalles del Pedido:</h4>
                ${cart.map(item => `<p>${item.name} x${item.quantity} - Bs ${item.price * item.quantity}</p>`).join('')}
            </div>
        `,
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#10b981'
    }).then(() => {
        // Limpiar carrito después de confirmar pedido
        cart = [];
        updateCartCount();
        updateCartDisplay();
        toggleCart();
    });
}

// Mostrar alertas de ayuda
function showHelpAlert() {
    Swal.fire({
        title: 'Centro de Ayuda',
        text: 'Para más información contacta con nuestro servicio al cliente',
        icon: 'info',
        confirmButtonText: 'Contactar',
        showCancelButton: true,
        cancelButtonText: 'Cerrar'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = '#contacto';
        }
    });
}

// Mostrar alertas de ofertas
function showOfferAlert() {
    Swal.fire({
        title: '¡Ofertas Especiales!',
        text: 'Descubre nuestras mejores ofertas en la sección de productos',
        icon: 'fire',
        confirmButtonText: 'Ver Ofertas',
        showCancelButton: true,
        cancelButtonText: 'Cerrar'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = '#productos';
        }
    });
}

// Mostrar menú de usuario
function showUserMenu() {
    Swal.fire({
        title: 'Mi Cuenta',
        text: 'Funcionalidad de usuario próximamente disponible',
        icon: 'info',
        confirmButtonText: 'Entendido'
    });
}

// Scroll a productos
function scrollToProducts() {
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
}

// Smooth scrolling para navegación
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

// Animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animaciones
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.category-card, .product-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});