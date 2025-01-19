import React from "react";

const shoeCategories = [
  {
    name: "Sneakers",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Stylish and comfortable sneakers perfect for any casual outing or street style."
  },
  {
    name: "Running Shoes",
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Engineered for performance, these running shoes will keep you going mile after mile."
  },
  {
    name: "Casual Shoes",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071&auto=format&fit=crop&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Casual yet refined, these shoes are ideal for everyday wear and comfort."
  },
  {
    name: "Formal Shoes",
    image: "https://img.freepik.com/free-photo/classic-stylish-men-s-shoes_169016-5563.jpg?t=st=1737267074~exp=1737270674~hmac=ef37387f888f7ddcb57b05b015600b4672b06c30c7a48f18a354ea367c07316e&w=1060",
    description: "Exquisite design and superior comfort for those special occasions and business meetings."
  },
  {
    name: "Boots",
    image: "https://cdn.pixabay.com/photo/2014/01/22/19/38/boot-250012_1280.jpg",
    description: "Durable and stylish boots, ideal for both outdoor adventures and urban settings."
  },
  {
    name: "Sports Shoes",
    image: "https://img.freepik.com/premium-photo/products-running-sneakers_204916-6549.jpg?ga=GA1.1.290153399.1737267066&semt=ais_incoming",
    description: "High-performance sports shoes built for speed, agility, and precision on the field."
  }
];

export const Category = () => {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold md:text-5xl">Make every step user-centric</h2>
          <p className="mb-8 mt-4 max-w-xl text-base text-gray-500 md:mb-12 md:text-lg lg:mb-16">
            Discover the perfect shoes for any occasion, crafted to fit every step of your journey.
          </p>
        </div>

        {/* Shoe Categories */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {shoeCategories.map((category, index) => (
            <div key={index} className="grid gap-6 rounded-md border border-solid border-gray-300 p-8 md:p-10">
              <img src={category.image} alt={category.name} className="inline-block h-16 w-16 object-cover rounded-full" />
              <h3 className="text-xl font-semibold">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
