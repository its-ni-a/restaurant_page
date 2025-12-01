# Bella Cucina - React Restaurant Website

A fully functional Italian restaurant website converted to React with shopping cart functionality.

## Project Structure

```
bella-cucina-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   ├── Gallery.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── CartModal.jsx
│   │   └── Notification.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.js
└── package.json
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Components

- **Header**: Navigation bar with cart icon
- **Hero**: Landing section with CTA button
- **Menu**: Three categories (Appetizers, Main Courses, Desserts) with add-to-cart buttons
- **Gallery**: Image carousel
- **About**: Restaurant story
- **Contact**: Contact form and Google Maps integration
- **Footer**: Business hours, location, and social links
- **CartModal**: Shopping cart overlay
- **Notification**: Toast notifications for cart actions

