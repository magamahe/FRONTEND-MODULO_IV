# Clase 15:
## Práctica Módulos
## Actividades:
### 📝 Actividad 1 – Componente Tarjeta con Estilos en Línea
- Objetivo: Practicar el uso de style y objetos JS en React.
- Consigna:
Crear un componente Tarjeta.jsx que muestre:
• Un h2 en azul, tamaño 24px
• Un párrafo en gris
• Un contenedor con borde negro, padding y fondo gris claro
Importarlo y renderizarlo en App.jsx.
Pistas: usar camelCase en las propiedades de estilo.

### 📝 Actividad 2 – Botones con Módulos CSS
- Objetivo: Practicar className y CSS Modules.
- Consigna:
• Crear Button.module.css con .btn, .primary y .secondary.
• Crear Button.jsx que reciba una prop variant ("primary" por defecto) y asigne
la clase correspondiente.
• Renderizar varios botones en App.jsx para comprobar que los estilos no
colisionan.
Extra: agregar un tercer estilo .danger para practicar.
### 📝 Actividad 3 – CardProducto con Estilos Dinámicos +
Íconos
Objetivo: Integrar todo lo aprendido.
Consigna:
• Crear CardProducto.module.css con estilos para la tarjeta, imagen, y dos estados de
botón (.agregado y .noAgregado).
• Crear CardProducto.jsx que muestre:
• Imagen local del producto (guardar en /assets/).
• Título.
• Botón con ícono de carrito (FaShoppingCart) que cambie de color y texto según el
estado (inCart).
• Renderizar en App.jsx.
Extra: permitir que el componente reciba props para título e imagen.

## Ahora es momento de aplicar lo aprendido en clase