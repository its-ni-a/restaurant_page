import React from 'react';

const CartModal = ({ 
  show, 
  cart, 
  onClose, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart, 
  onCheckout, 
  total 
}) => {
  if (!show) return null;

  const handleBackdropClick = (e) => {
    if (e.target.className === 'cart-modal active') {
      onClose();
    }
  };

  return (
    <div className={`cart-modal ${show ? 'active' : ''}`} onClick={handleBackdropClick}>
      <div className="cart-content">
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-cart" onClick={onClose}>&times;</button>
        </div>
        
        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">Your cart is empty</div>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">${item.price.toFixed(2)} each</div>
                </div>
                <div className="cart-item-controls">
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn" 
                      onClick={() => onUpdateQuantity(item.name, -1)}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      className="quantity-btn" 
                      onClick={() => onUpdateQuantity(item.name, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    className="remove-btn" 
                    onClick={() => onRemoveItem(item.name)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="cart-total-price">${total.toFixed(2)}</span>
            </div>
            <div className="cart-actions">
              <button className="clear-cart-btn" onClick={onClearCart}>
                Clear Cart
              </button>
              <button className="checkout-btn" onClick={onCheckout}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
