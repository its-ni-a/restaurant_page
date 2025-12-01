import React from 'react';

const Menu = ({ onAddToCart }) => {
  const menuCategories = [
    {
      title: 'Appetizers',
      items: [
        { name: 'Bruschetta al Pomodoro', price: 8.99 },
        { name: 'Calamari Fritti', price: 12.99 },
        { name: 'Caprese Salad', price: 10.99 },
        { name: 'Arancini', price: 9.99 }
      ]
    },
    {
      title: 'Main Courses',
      items: [
        { name: 'Spaghetti Carbonara', price: 16.99 },
        { name: 'Lasagna Bolognese', price: 18.99 },
        { name: 'Chicken Parmigiana', price: 19.99 },
        { name: 'Risotto ai Funghi', price: 17.99 }
      ]
    },
    {
      title: 'Desserts',
      items: [
        { name: 'Tiramisu', price: 7.99 },
        { name: 'Panna Cotta', price: 6.99 },
        { name: 'Cannoli Siciliani', price: 8.99 },
        { name: 'Gelato (3 scoops)', price: 6.99 }
      ]
    }
  ];

  return (
    <section id="menu" className="container">
      <h2>Our Menu</h2>
      <div className="row justify-content-center">
        {menuCategories.map((category, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{category.title}</h3>
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="menu-item">
                    <div className="menu-item-info">
                      <div className="item-name">{item.name}</div>
                      <div className="item-price">${item.price.toFixed(2)}</div>
                    </div>
                    <button 
                      className="add-to-cart-btn" 
                      onClick={() => onAddToCart(item.name, item.price)}
                    >
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
