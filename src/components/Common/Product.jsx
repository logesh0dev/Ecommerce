import React from "react";
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct, removeProduct, setWishlist } from "../store/slice";
import FavoriteIcon from '@mui/icons-material/Favorite';


const Product = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const pro = location.state;

    const wishlist = useSelector((store) => store.store.wishlist)
    const [isFav, setIsFav] = useState(false)

    useEffect(() => {
        setIsFav(wishlist.some(x => x.name === pro.name))
    }, [wishlist])

    useEffect(() => {
        // Scroll to the top of the page when the product page is loaded
        window.scrollTo(0, 0);
    }, [location]);

    const addtoCart = (product) => {
        dispatch(setProduct(product))
    }

    const removeFromCart = (product) => {
        dispatch(removeProduct(product))
    }

    const addFav = (product) => {
        console.log('wishlist added')
        dispatch(setWishlist(product))
    }

    return (
        <div className="">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap -mx-4">
                    {/* Product Images */}
                    <div className="w-full flex justify-center md:w-1/2 px-4 mb-8">
                        <img
                            src={pro.image}
                            alt="Product"
                            className="w-3/4 h-auto rounded-lg shadow-md mb-4"
                            id="mainImage"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="w-full md:w-1/2 px-4">
                        <h2 className="text-3xl font-bold mb-2">{pro.name}</h2>
                        {/* <p className="text-gray-600 mb-4">SKU: WH1000XM4</p> */}
                        <div className="mb-4">
                            <span className="text-2xl font-bold mr-2">Rs. {pro.amount}</span>
                            <span className="text-gray-500 line-through">Rs. {pro.offer}</span>
                        </div>
                        <div className="flex items-center mb-4">
                            {/* Stars */}
                            {[...Array(5)].map((_, index) => (
                                <svg
                                    key={index}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="size-6 text-yellow-500"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ))}
                            <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
                        </div>
                        <p className="text-gray-700 mb-6">
                            High-quality sports shoes with superior comfort, style, and support. Perfect for running, gym workouts, and casual wear.
                        </p>





                        <div className="flex space-x-4 mb-6">
                            <button onClick={() => addtoCart(pro)}
                                class={`flex cursor-pointer  items-center justify-center rounded-md bg-slate-900 px-6 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all active:scale-90`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                    />
                                </svg>
                                Add to Cart
                            </button>
                            <button onClick={() => addFav(pro)}
                                className="bg-gray-200 flex gap-2 items-center  px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                                <FavoriteIcon className={`${isFav? 'text-red-500':'text-white-400'}`}  />
                                Wishlist
                            </button>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>Breathable mesh upper for comfort</li>
                                <li>Durable rubber outsole for grip</li>
                                <li>Supportive cushioning for all-day wear</li>
                                <li>Lightweight and flexible design</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
