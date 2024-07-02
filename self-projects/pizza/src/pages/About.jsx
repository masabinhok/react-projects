import { pizza2 } from "../assets";

import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="w-full h-screen flex items-center justify-end relative">
      <div className="flex-1 h-full">
        <img
          className="object-cover absolute w-full h-full"
          src={pizza2}
          alt="Delicious pizza"
        />
      </div>
      <div className="relative  flex-col flex w-half p-20 items-start font-bold font-montserrat max-xl:bg-black  max-xl:bg-opacity-50">
        <h1 className="text-[100px] text-white max-xl:text-[80px] max-xl:py-2">
          About <span className="text-red-600">Us</span>
        </h1>
        <h2 className="text-[20px] font-mono mt-[-20px] text-gray-300 max-xl:text-[18px]  ">
          Slice into Happiness with Every Bite!
        </h2>
        <p className="text-[18px] font-sans text-gray-300 mt-4 max-w-xl text-start">
          Welcome to Pizza Ghar, located in Bafal-13, Kathmandu. We are proud to
          offer 24-hour service, ensuring that you can satisfy your pizza
          cravings any time, day or night. At Pizza Ghar, we use only the
          freshest ingredients to create our hand-tossed pizzas, rich in flavor
          and generous with toppings. Whether you’re in the mood for a classic
          Margherita or something more adventurous, our menu has something for
          everyone. Our commitment to quality and customer satisfaction sets us
          apart, and we strive to provide an exceptional dining experience for
          every guest. Thank you for choosing Pizza Ghar—we look forward to
          serving you!
        </p>
        <Link to="/contact">
          <button className="mt-8 px-6 py-3 bg-red-600 text-white text-lg rounded-full hover:bg-red-700">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
