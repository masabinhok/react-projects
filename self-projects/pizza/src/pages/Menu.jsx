import { pizzas } from "../data/menu";
import Button from "../components/Button";
import PizzaCard from "../components/PizzaCard";

const Menu = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <div className="relative p-8 flex-col flex w-full items-center font-bold font-montserrat bg-black bg-opacity-50">
        <h1 className="text-[100px] text-white max-sm:text-[50px] max-sm:p-5">
          Our <span className="text-red-600">Menu</span>
        </h1>
        <h2 className="text-[20px] font-mono mt-[-20px] text-black ">
          Pizza to fit any taste!
        </h2>
      </div>
      <h2 className="text-3xl font-bold mb-8">Our Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pizzas.map((pizza) => (
          <div
            key={pizza.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={pizza.imageUrl}
              alt={pizza.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{pizza.name}</h3>
              <p className="text-gray-700">{pizza.description}</p>
              <p className="text-gray-900 mt-2">${pizza.price.toFixed(2)}</p>
              <Button name="Add to Cart" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
