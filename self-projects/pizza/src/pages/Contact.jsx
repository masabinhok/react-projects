import { useState } from 'react';
import { pizza4 } from "../assets";

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending data to backend or displaying a confirmation message
    console.log(formData);
    // Example: You may want to clear the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="w-full h-screen flex items-center justify-center relative">
      <div className="flex-1 h-full">
        <img
          className="object-cover absolute w-full h-full"
          src={pizza4}
          alt="Delicious pizza"
        />
      </div>
      <div className="relative p-8 flex-col flex w-full items-center font-bold font-montserrat bg-black bg-opacity-50">
        <h1 className="text-5xl text-white mb-4">
          Contact <span className="text-red-600">Us</span>
        </h1>
        <form onSubmit={handleSubmit} className="max-w-md w-full">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md mb-4 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-md mb-4 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-3 rounded-md mb-4 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Home;
