import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartModal from './components/CartModal';
import Notification from './components/Notification';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [notification, setNotification] = useState(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('restaurantCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('restaurantCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (name, price) => {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { name, price, quantity: 1 }]);
    }
    
    showNotification(`${name} added to cart!`);
  };

  const removeFromCart = (name) => {
    setCart(cart.filter(item => item.name !== name));
  };

  const updateQuantity = (name, change) => {
    const item = cart.find(item => item.name === name);
    
    if (item) {
      const newQuantity = item.quantity + change;
      
      if (newQuantity <= 0) {
        removeFromCart(name);
      } else {
        setCart(cart.map(item =>
          item.name === name
            ? { ...item, quantity: newQuantity }
            : item
        ));
      }
    }
  };

  const clearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      setCart([]);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const checkout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    
    const total = calculateTotal();
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    alert(`Thank you for your order!\n\nTotal Items: ${itemCount}\nTotal Amount: $${total.toFixed(2)}\n\nYour order will be ready in 30-45 minutes!`);
    
    setCart([]);
    setShowCart(false);
  };

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 2300);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="App">
      <Header 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={toggleCart}
      />
      
      <CartModal
        show={showCart}
        cart={cart}
        onClose={toggleCart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
        onCheckout={checkout}
        total={calculateTotal()}
      />

      {notification && <Notification message={notification} />}

      <Hero />
      <Menu onAddToCart={addToCart} />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
