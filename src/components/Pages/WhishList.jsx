import React from 'react';
import { useSelector } from "react-redux";


const WhishList = () => {

    const product = useSelector((state) => state.store.wishlist)
    console.log(product)

    const total = product.reduce((x, a) => x + Number(a.amount), 0);

    console.log("prod", product)
    return (
        <div>
            <div class="  w-full  bg-white px-10 py-10">
                <div class="flex justify-between border-b pb-8">
                    <h1 class="font-semibold text-2xl">WishList</h1>
                    <h2 class="font-semibold text-2xl">{product.length} Items</h2>
                </div>

                {
                    product.map((pro, index) => (<>
                        <div key={index} class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
                            <div class="md:w-4/12 2xl:w-1/4 w-full">
                                <img src={pro.image} alt="Black Leather Purse" class=" w-64 h-full object-center object-cover md:block hidden" />
                                <img src={pro.image} alt="Black Leather Purse" class="md:hidden w-full h-full object-center object-cover" />
                            </div>
                            <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                {/* <p class="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p> */}
                                <div class="flex items-center justify-between w-full">
                                    <p class="text-base font-black leading-none text-gray-800">{pro.name}</p>

                                </div>
                                <p class="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                                <p class="text-xs leading-3 text-gray-600 py-4">Color: {pro.color}</p>
                                <p class="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p>
                                <div class="flex items-center justify-between pt-5">
                                    <div class="flex itemms-center">
                                        {/* <p class="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p> */}
                                        <p class="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                                    </div>
                                    <p class="text-base font-black leading-none text-gray-800">Rs. {pro.amount}</p>
                                </div>
                            </div>
                        </div>

                    </>))
                }

                <a href="/" class="flex font-semibold text-indigo-600 text-sm mt-10">
                    <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                        <path
                            d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                    </svg>
                    Continue Shopping
                </a>
            </div>
        </div>
    )
}

export default WhishList
