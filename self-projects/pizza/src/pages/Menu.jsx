import React from 'react';

const pizzas = [
  {
    id: 1,
    imageUrl: 'https://via.placeholder.com/400x300',
    name: 'Margherita Pizza',
    description: 'Classic tomato, fresh mozzarella, basil, olive oil, and sea salt',
    price: 12.99
  },
  {
    id: 2,
    imageUrl: 'https://via.placeholder.com/400x300',
    name: 'Pepperoni Pizza',
    description: 'Pepperoni, tomato sauce, mozzarella, and oregano',
    price: 14.99
  },
  {
    id: 3,
    imageUrl: 'https://via.placeholder.com/400x300',
    name: 'Vegetarian Pizza',
    description: 'Tomato sauce, bell peppers, mushrooms, onions, black olives, and mozzarella',
    price: 13.99
  },
  {
    id: 4,
    imageUrl: 'https://via.placeholder.com/400x300',
    name: 'BBQ Chicken Pizza',
    description: 'BBQ sauce, grilled chicken, red onions, and mozzarella',
    price: 15.99
  },
  {
    id: 5,
    imageUrl: 'https://via.placeholder.com/400x300',
    name: 'Hawaiian Pizza',
    description: 'Tomato sauce, ham, pineapple, and mozzarella',
    price: 13.99
  },
  {
    id: 6,
    imageUrl: 'https://via.placeholder.com/400x300',
    name: 'Meat Lovers Pizza',
    description: 'Pepperoni, sausage, bacon, ground beef, and mozzarella',
    price: 16.99
  },
  {
    id: 7,
    imageUrl: 'https://via.placeholder.com/400x300',
    name: 'Mushroom Pizza',
    description: 'Tomato sauce, mushrooms, garlic, and mozzarella',
    price: 12.99
  },
  {
    id: 8,
    imageUrl: 'https://via.placeholder.com/400x300',
    name: 'Buffalo Chicken Pizza',
    description: 'Spicy buffalo sauce, grilled chicken, red onions, and mozzarella',
    price: 15.99
  },
  {
    id: 9,
    imageUrl: 'https://via.placeholder.com/400x300',
    name: 'Four Cheese Pizza',
    description: 'Tomato sauce, mozzarella, parmesan, ricotta, and gorgonzola',
    price: 14.99
  },
  {
    id: 10,
    imageUrl: 'https://via.placeholder.com/400x300',
    name: 'Supreme Pizza',
    description: 'Pepperoni, sausage, bell peppers, onions, black olives, and mozzarella',
    price: 16.99
  }
];

const Menu = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <div className="relative p-8 flex-col flex w-full items-center font-bold font-montserrat bg-black bg-opacity-50">
        <h1 className="text-[100px] text-white">
          Our <span className="text-red-600">Menu</span>
        </h1>
        <h2 className="text-[20px] font-mono mt-[-20px] text-black ">
          Pizza to fit any taste!
        </h2>
        
      </div>
      <h2 className="text-3xl font-bold mb-8">Our Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={pizza.imageUrl} alt={pizza.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{pizza.name}</h3>
              <p className="text-gray-700">{pizza.description}</p>
              <p className="text-gray-900 mt-2">${pizza.price.toFixed(2)}</p>
              <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
