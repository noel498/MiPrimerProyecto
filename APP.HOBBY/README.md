# 🛍️ Tienda Hobby - Tienda Online de Hobbies

Una tienda online moderna y responsive para productos de hobbies, construida con HTML, CSS y JavaScript vanilla.

## ✨ Características

- **Diseño Moderno**: Interfaz atractiva con gradientes y animaciones
- **Responsive**: Funciona perfectamente en móviles, tablets y desktop
- **Catálogo de Productos**: 12 productos organizados en 4 categorías
- **Carrito de Compras**: Funcionalidad completa de carrito con sidebar
- **Búsqueda**: Buscar productos por nombre o descripción
- **Filtros por Categoría**: Arte, Deportes, Música y Juegos
- **Notificaciones**: Feedback visual al agregar productos
- **Animaciones**: Efectos suaves y transiciones

## 🚀 Cómo Ejecutar

### Opción 1: Servidor Local Simple
```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev
```

### Opción 2: Servidor HTTP
```bash
# Instalar dependencias
npm install

# Ejecutar servidor HTTP
npm start
```

### Opción 3: Abrir Directamente
Simplemente abre el archivo `index.html` en tu navegador web.

## 📁 Estructura del Proyecto

```
APP.HOBBY/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
├── package.json        # Configuración del proyecto
└── README.md          # Este archivo
```

## 🛒 Funcionalidades del Carrito

- ✅ Agregar productos al carrito
- ✅ Ver cantidad de items en el icono del carrito
- ✅ Modificar cantidades desde el carrito
- ✅ Eliminar productos individuales
- ✅ Calcular total automáticamente
- ✅ Sidebar deslizable para el carrito
- ✅ Overlay para cerrar el carrito

## 🎨 Categorías de Productos

1. **Arte y Manualidades** 🎨
   - Kit de Pintura Acrílica
   - Pinceles Profesionales
   - Lienzo Blanco

2. **Deportes** ⚽
   - Pelota de Fútbol
   - Raqueta de Tenis
   - Balón de Baloncesto

3. **Música** 🎵
   - Guitarra Acústica
   - Micrófono USB
   - Teclado MIDI

4. **Juegos** 🎲
   - Set de Juegos de Mesa
   - Puzzle 1000 Piezas
   - Dados de Rol

## 📱 Diseño Responsive

- **Desktop**: Grid de 4 columnas
- **Tablet**: Grid de 2-3 columnas
- **Mobile**: Grid de 1 columna
- **Carrito**: Sidebar completo en móviles

## 🎯 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Flexbox, Grid, Animaciones, Gradientes
- **JavaScript ES6+**: Funcionalidad moderna
- **Font Awesome**: Iconos
- **Responsive Design**: Mobile-first approach

## 🔧 Personalización

### Agregar Nuevos Productos
Edita el array `products` en `script.js`:

```javascript
{
    id: 13,
    name: "Nuevo Producto",
    price: 29.99,
    category: "arte", // arte, deportes, musica, juegos
    icon: "fas fa-icon-name",
    description: "Descripción del producto"
}
```

### Cambiar Colores
Modifica las variables CSS en `styles.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #ff6b6b;
}
```

## 🌟 Características Destacadas

- **Sin Dependencias Externas**: Solo HTML, CSS y JavaScript
- **Carga Rápida**: Optimizado para rendimiento
- **SEO Friendly**: Estructura semántica
- **Accesible**: Navegación por teclado
- **Cross-browser**: Compatible con todos los navegadores modernos

## 📞 Contacto

- **Email**: info@tiendahobby.com
- **Teléfono**: +1 234 567 890
- **Redes Sociales**: Facebook, Instagram, Twitter

---

¡Disfruta explorando tu nueva tienda online! 🎉
