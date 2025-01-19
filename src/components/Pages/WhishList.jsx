import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setWishlist } from '../store/slice';
import { setProduct } from '../store/slice';


const WhishList = () => {

    const dispatch = useDispatch()
    const product = useSelector((state) => state.store.wishlist)
    console.log(product)

    const total = product.reduce((x, a) => x + Number(a.amount), 0);

    console.log("prod", product)

     const addOrRemoveFav = (product) => {
        console.log('wishlist added')
        dispatch(setWishlist(product))
      }

       const addtoCart = (product) => {
          dispatch(setProduct(product))
          addOrRemoveFav(product)
        }
    return (
        <div>
            <div class="transform  w-full  bg-white px-10 py-10">
                <div class="md:flex justify-between border-b pb-8">
                    <h1 class="font-semibold text-2xl">WishList</h1>
                    <h2 class="font-semibold text-2xl">{product.length} Items</h2>
                </div>
                <div className='flex gap-6 flex-wrap ' > 
                {
                    product.map((pro, index) => (<>
                        <div key={index} class="md:flex items-strech  md:py-10 lg:py-4 border-t border-gray-50 bg-gray-200 rounded p-4 w-full xl:w-1/2 ">
                            <div class="w-1/2">
                                <img src={pro.image} alt="Black Leather Purse" class=" w-64 h-full object-center object-cover md:block hidden" />
                                <img src={pro.image} alt="Black Leather Purse" class="md:hidden w-full h-full object-center object-cover" />
                            </div>
                            <div class="md:pl-3 pt-6 md:pt-0 w-full flex flex-col justify-center">
                                {/* <p class="text-xs leading-3 text-gray-800 md:pt-0 pt-4">RF293</p> */}
                                <div class="flex items-center justify-between w-full">
                                    <p class="text-base font-black leading-none text-gray-800">{pro.name}</p>

                                </div>
                                <p class="text-xs leading-3 text-gray-600 pt-2">Height: 10 inches</p>
                                <p class="text-xs leading-3 text-gray-600 py-4">Color: {pro.color}</p>
                                <p class="w-96 text-xs leading-3 text-gray-600">Composition: 100% calf leather</p>
                                <div class="md:flex items-center justify-between pt-5">
                                <p class="text-base font-black leading-none text-gray-800 pb-4">Rs. {pro.amount}</p>

                                    <div class="flex gap-2 itemms-center">
                                        <p class="cursor-pointer items-center justify-center rounded-md bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all active:scale-90" onClick={() =>addtoCart(pro)} >Add to Cart</p>
                                        <p class="cursor-pointer items-center justify-center rounded-md bg-red-700 px-8 py-3 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all active:scale-90" onClick={() =>addOrRemoveFav(pro)} >Remove</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>))
                }
                </div>

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
