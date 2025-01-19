import React, { useEffect } from "react";
import fashion from "../../assets/fashion.jpg";
import fashionset from "../../assets/fashionset.jpg";
import { Link } from "react-router-dom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import PercentIcon from "@mui/icons-material/Percent";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Items } from "./Items";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeProduct, setProduct } from "../store/slice";

export const Home = () => {

  const dispatch = useDispatch();
  const product = useSelector((store) => store.store.product)

  const productsarray = [
    {
      name: "Nike",
      id: "1",
      amount: "499",
      offer: "38% off",
      rating: 4.6,
      prev_amount: "699",
      color:"black",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaVaA4EBXKdy_LFSRDwxdo7r3LPkVCjxGpeJyCD0xLMFiVSZYURNqkv0_tYjP-C8PdePo&usqp=CAU",
    },
    {
      name: "Puma",
      id: "2",
      amount: "699",
      offer: "28% off",
      rating: 4.8,
      prev_amount: "899,",
      color:"black",

      image:
        "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/386269/01/fnd/EEA/fmt/png/All-Day-Active-Sneakers",
    },
    {
      name: "Adidas",
      id: "3",
      amount: "799",
      offer: "32% off",
      rating: 4.4,
      prev_amount: "979",
      color:"White",

      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/78b76ab3632d4251a7f2ae2b005fb600_9366/Grand_Court_TD_Lifestyle_Court_Casual_Shoes_White_GW9250_01_standard.jpg",
    },
    {
      name: "Rebook",
      id: "4",
      amount: "299",
      offer: "18% off",
      rating: 4.3,
      prev_amount: "299",
      color:"Black",

      image:
        "https://assets.ajio.com/medias/sys_master/root/20230706/Hztj/64a6dbbea9b42d15c941e528/-473Wx593H-469452097-grey-MODEL.jpg",
    },
    {
      name: "canvas",
      id: "5",
      amount: "299",
      offer: "18% off",
      rating: 4.3,
      prev_amount: "299",
      color:"Beige",
      image:
        "https://images-static.nykaa.com/media/catalog/product/d/7/d7faf49MZW-1054_1.jpg?tr=w-344,h-344,cm-pad_resize",
    },
    {
      name: "Bata",
      id: "6",
      amount: "499",
      offer: "38% off",
      rating: 4.6,
      prev_amount: "699",
      color:"Navy Blue",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSCz1X_u9Ul259o0b-Mw-trrhce7KMEbyuTMP9UyhZi967ZJx53hb7Yz0R4gCwz0nZplCWxSPir2tjbvYhJT14ZSxGrK_lJiTW_VcU-chbwHsIdJ4f4fr2B",
    },
    {
      name: "Crocs",
      id: "7",
      amount: "699",
      offer: "28% off",
      rating: 4.8,
      prev_amount: "899,",
      color:"Black",

      image:
        "https://www.crocs.in/media/catalog/product/2/0/206705_0dd_alt100_1.jpg?width=500",
    },
    {
      name: "Ascics",
      id: "8",
      amount: "799",
      offer: "32% off",
      rating: 4.4,
      prev_amount: "979",
      color:"Dark Blue",

      image:
        "https://m.media-amazon.com/images/I/71UkTJkvW7L._SY695_.jpg",
    },
    {
      name: "U.S. Polo",
      id: "9",
      amount: "299",
      offer: "18% off",
      rating: 4.3,
      prev_amount: "299",
      color:"White",

      image:
        "https://m.media-amazon.com/images/I/71aFuiEntML._SY695_.jpg",
    },
    {
      name: "Skechers",
      id: "10",
      amount: "299",
      offer: "18% off",
      rating: 4.3,
      prev_amount: "299",
      color:"Whitish Pink",

      image:
        "https://www.skechers.in/on/demandware.static/-/Sites-skechers_india/default/dw65c997f8/images/large/197627211503-1.jpg",
    }
  ];

  const addtoCart = (product) => {
    dispatch(setProduct(product))
  }
  
  const removeFromCart = (product) => {
    dispatch(removeProduct(product))
  }



  return (
    <div  >
      <div className="bg-[#CCD3CA] font-lora">
        <div className="container px-4 grid md:grid-cols-2 py-8  mx-auto">
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
      <div className="px-4 container grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-8 mb-8 mx-auto">
        <div className="flex gap-2 bg-gray-100 px-4 py-6 font-karla items-center">
          {/* {icon} */}
          <LocalShippingIcon className="h-12 w-12"></LocalShippingIcon>
          <div>
            <h2 className="font-medium text-xl">Free Delievery</h2>
            <p className="text-gray-600">For all items</p>
          </div>
        </div>
        <div className="flex gap-2 bg-gray-100 px-4 py-6 font-karla items-center ">
          <CurrencyRupeeIcon className="h-12 w-12"></CurrencyRupeeIcon>
          <div>
            <h2 className="font-medium text-xl">Return & Refund</h2>
            <p className="text-gray-600">Easy Return & Refund policy</p>
          </div>
        </div>
        <div className="flex gap-2 bg-gray-100 px-4 py-6 font-karla items-center ">
          <PercentIcon className="h-12 w-12"></PercentIcon>
          <div>
            <h2 className="font-medium text-xl">Discount</h2>
            <p className="text-gray-600">Discount on more than 100 products</p>
          </div>
        </div>
        <div className="flex gap-2 bg-gray-100 px-4 py-6 font-karla items-center ">
          <SupportAgentIcon className="h-12 w-12"></SupportAgentIcon>
          <div>
            <h2 className="font-medium text-xl">Customer Support</h2>
            <p className="text-gray-600">24/7 Call support</p>
          </div>
        </div>
      </div>
      <div>
        <div className=" ml-8 sm:flex items-center justify-between">
          <h2 className="text-4xl font-medium font-lora">Trending </h2>
        </div>

        <div
          style={{ overflowX: "scroll" }}
          className=" custom-scrollbar flex  w-full relative  "
        >
          {productsarray.map((pro, index) => (
            <Items
              name={pro.name}
              key={index}
              id={pro.id}
              amount={pro.amount}
              rating={pro.rating}
              image={pro.image}
              prev_amount={pro.prev_amount}
              offer={pro.offer}
              add={() => addtoCart(pro)}

            ></Items>
          ))}
        </div>

        <div className="container mt-8 mb-8 mx-auto px-4 md:flex font-lora">
          <img src={fashionset} alt="banner" className="md:w-1/2" />
          <div className="bg-[#f0ece2] md:w-1/2 flex flex-col items-center text-center justify-center p-4">
            <h1 className="text-4xl font-bold mb-1">Don't miss the offer</h1>
            <h2 className="text-3xl font-semibold mb-4">Grab it now</h2>
            <Link
              to="/product/4"
              className="inline-block bg-white rounded-md px-6 py-3 hover:bg-blue-500 hover:text-white"
              data-test="banner-btn"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div>
          <div className=" ml-8 sm:flex items-center justify-between">
            <h2 className="text-4xl font-medium font-lora">New Arrivals </h2>
          </div>

          <div
            style={{ overflowX: "scroll" }}
            className=" custom-scrollbar flex  w-full relative  "
          >
            {productsarray.map((pro, index) => (
              <Items
                name={pro.name}
                key={index}
                id={pro.id}
                amount={pro.amount}
                rating={pro.rating}
                image={pro.image}
                prev_amount={pro.prev_amount}
                offer={pro.offer}
                add={() => addtoCart(pro)}
                remove ={() => removeFromCart(pro)}
              ></Items>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
