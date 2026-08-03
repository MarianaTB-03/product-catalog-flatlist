# 📱 Catálogo de Productos — FlatList + useState

¡Hola! 👋 Este es un pequeño catálogo de productos hecho con React Native y Expo. La idea era practicar cómo mostrar listas largas de forma eficiente con `FlatList` y cómo manejar un estado independiente (los "me gusta") para cada elemento de la lista.

## ✨ ¿Qué hace esta app?

- Muestra un catálogo de 10 productos en una grilla de 2 columnas, con scroll fluido gracias a la virtualización de `FlatList`.
- Cada tarjeta tiene su propio botón de "me gusta" ❤️ que lleva la cuenta de forma independiente — le das like a uno y los demás no se ven afectados.
- El scroll es eficiente incluso si la lista creciera mucho más, porque `FlatList` solo renderiza lo que está visible en pantalla.

## 🗂️ Cómo está organizado el proyecto

product-catalog/
├── app/(tabs)/index.tsx ← Punto de entrada de la app
├── data/
│ └── products.js ← Los datos de los productos
├── components/
│ ├── ProductCard.js ← La tarjeta individual de cada producto
│ └── ProductList.js ← La lista que arma todo con FlatList
└── README.md

La idea detrás de esta organización: `ProductCard` es un componente "tonto" y reutilizable (solo pinta lo que le pasan), y `ProductList` se encarga de conectar los datos con la lista.

## 🚀 Cómo correrlo en tu máquina

1. Instala las dependencias (si no lo has hecho):
```bash
   npm install
```
2. Levanta el proyecto:
```bash
   npx expo start
```
3. Escanea el código QR con la app **Expo Go** desde tu celular, o presiona `w` en la terminal para probarlo en el navegador.

## 🎥 Video demo

Aquí puedes ver el catálogo en acción — el scroll y los likes funcionando:

👉 [Ver video demo](https://drive.google.com/file/d/1tePrecfi8DEosJ0CoUXZKh1muSNX7ngY/view?usp=sharing)

