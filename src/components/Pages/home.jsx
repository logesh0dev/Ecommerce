import React from "react";
import fashion from "../../assets/fashion.jpg";
import { Link } from "react-router-dom";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PercentIcon from '@mui/icons-material/Percent';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';


export const Home = () => {
  return (
    <div>
      <div className="bg-[#e3edf6] font-lora">
        <div className="container px-4 grid md:grid-cols-2 py-8 mx-auto">
          <div className="flex items-center">
            <div className="max-w-[450px] space-y-4">
              <p className="text-black">
                Starting At <span className="font-bold">$999</span>
              </p>
              <h2 className="text-black font-bold text-4xl md:text-5xl">
                The best casual collection 2024
              </h2>
              <h3 className="text-2xl">
                Exclusive offer <span className="text-red-600">-10%</span> off
                this week
              </h3>
              <Link
                to="/product/6"
                data-test="hero-btn"
                className="inline-block bg-white rounded-md px-6 py-3 hover:bg-blue-500 hover:text-white"
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div>
            <img src={fashion} alt="hero" className="my-2" />
          </div>
        </div>
      </div>
      <div className="px-4 container grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-8 mb-8 mx-auto" >
        <div className="flex gap-2 bg-gray-100 px-4 py-6 font-karla items-center">
          {/* {icon} */}
          <LocalShippingIcon className="h-12 w-12" ></LocalShippingIcon>
          <div>
            <h2 className="font-medium text-xl">Free Delievery</h2>
            <p className="text-gray-600">For all items</p>
          </div>
        </div>
        <div className="flex gap-2 bg-gray-100 px-4 py-6 font-karla items-center ">
          <CurrencyRupeeIcon className="h-12 w-12" ></CurrencyRupeeIcon>
          <div>
            <h2 className="font-medium text-xl">Return & Refund</h2>
            <p className="text-gray-600">Easy Return & Refund policy</p>
          </div>
        </div>
        <div className="flex gap-2 bg-gray-100 px-4 py-6 font-karla items-center ">
          <PercentIcon className="h-12 w-12" ></PercentIcon>
          <div>
            <h2 className="font-medium text-xl">Discount</h2>
            <p className="text-gray-600">Discount on more than 100 products</p>
          </div>
        </div>
        <div className="flex gap-2 bg-gray-100 px-4 py-6 font-karla items-center ">
          <SupportAgentIcon className="h-12 w-12" ></SupportAgentIcon>
          <div>
            <h2 className="font-medium text-xl">Customer Support</h2>
            <p className="text-gray-600">24/7 Call support</p>
          </div>
        </div>
      </div>
    </div>
  );
};
