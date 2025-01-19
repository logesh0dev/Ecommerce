import React, { useState } from "react";

const categories = [
  "Sneakers",
  "Running Shoes",
  "Casual Shoes",
  "Formal Shoes"
];

const shoeItems = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Sneakers",
    title: "Comfortable Street Sneakers",
    description: "Perfect for daily wear and all-day comfort."
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Sneakers",
    title: "Modern High-Top Sneakers",
    description: "Stylish and trendy, ideal for casual outings."
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Running Shoes",
    title: "Lightweight Running Shoes",
    description: "Designed for performance, comfort, and speed."
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Running Shoes",
    title: "Advanced Trail Running Shoes",
    description: "For rugged terrains, built for durability and support."
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Casual Shoes",
    title: "Casual Slip-On Shoes",
    description: "Comfortable and easy to wear for everyday use."
  }
];

export const Collections = () => {
  const [activeButton, setActiveButton] = useState("Sneakers");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const buttonClass = (button) =>
    activeButton === button
      ? "px-4 py-2 bg-black text-white font-semibold rounded-full"
      : "px-4 py-2 bg-gray-100 text-black font-semibold rounded-full";

  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="text-center mb-12">
          {/* Title */}
          <h2 className="mb-4 mt-6 text-3xl font-bold md:text-5xl">
            The Latest and Trendy Shoe Collections
          </h2>
          <p className="text-gray-500 mt-2">Discover the perfect pair for every occasion.</p>
          {/* Buttons */}
          <div className="my-10 md:my-20 flex flex-col md:flex-row justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={buttonClass(category)}
                onClick={() => handleButtonClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Shoe Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {shoeItems.slice(0, 2).map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="relative h-80">
                  <img className="h-80 w-full object-cover" src={item.imgSrc} alt={item.title} />
                  <span className="absolute bottom-5 right-5 bg-gray-400 text-sm font-semibold px-2.5 py-2 rounded">
                    {item.category}
                  </span>
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                  <button className="cursor-pointer h-14 w-14">
                    <svg
                      className="h-14 w-14"
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30.0001 52.5001C42.4265 52.5001 52.5001 42.4265 52.5001 30.0001C52.5001 17.5736 42.4265 7.5 30.0001 7.5C17.5736 7.5 7.5 17.5736 7.5 30.0001C7.5 42.4265 17.5736 52.5001 30.0001 52.5001Z"
                        fill="black"
                        stroke="black"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M31.4297 37.9454L39.375 30L31.4297 22.0547"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.625 30H39.3751"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shoeItems.slice(2).map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="relative h-72">
                  <img className="h-72 w-full object-cover" src={item.imgSrc} alt={item.title} />
                  <span className="absolute bottom-5 right-5 bg-gray-400 text-sm font-semibold px-2.5 py-2 rounded">
                    {item.category}
                  </span>
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-10 md:mt-20 text-center">
            <button className="px-6 py-2 bg-black text-white rounded-lg">
              Load More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
