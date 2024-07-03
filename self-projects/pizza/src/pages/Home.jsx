import { pizza1 } from "../assets";
import Button from "../components/Button";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center relative">
      <div className="flex-1 h-full">
        <img
          className="object-cover absolute w-full h-full"
          src={pizza1}
          alt="Delicious pizza"
        />
      </div>
      <div className="relative p-8 flex-col flex w-full items-center font-bold font-montserrat bg-black bg-opacity-50">
        <h1 className="text-[100px] text-white max-sm:text-[50px] max-sm:p-4">
          Pizza <span className="text-red-600">Ghar</span>
        </h1>
        <h2 className="text-[20px] font-mono mt-[-20px] text-black ">
          Pizza to fit any taste!
        </h2>
        <p className="text-[18px] font-sans text-gray-300 mt-4 max-w-xl text-center">
          Welcome to Pizza Ghar, where we serve the best pizzas in town! Our
          pizzas are made with the freshest ingredients, hand-tossed dough, and
          a variety of delicious toppings to satisfy all your cravings. Come and
          experience the taste of authentic pizza at Pizza Ghar!
        </p>
       <Link to='/menu'><Button name="Order Now"/></Link> 
      </div>
    </section>
  );
};

export default Home;
