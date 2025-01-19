import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FavoriteIcon from '@mui/icons-material/Favorite';


export const Items = (pro) => {
  const product = useSelector((store) => store.store.product)
  const wishlist = useSelector((store) => store.store.wishlist)

  const [count, setCount] = useState(0)
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    setCount(product.filter(x => x.id == pro.id).length)
  }, [product])

  useEffect(() => {
    setIsFav(wishlist.some(x => x.name === pro.name))
  }, [wishlist])




  return (
    <div className="m-4" >
      <div class="relative  flex w-full flex-col rounded-lg border border-gray-100 bg-white shadow-md">
        <a
          class="relative mx-3 mt-3 flex h-60  rounded-xl"
        >
          <img
            class="object-cover w-full"
            src={pro.image}
            alt="product image"
          />
          <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {pro.offer}

          </span>

          <span onClick={() => pro.addFav()} class=" cursor-pointer absolute top-0 right-0 m-2 rounded bg-gray-400 p-1 text-center text-sm font-medium text-white">
            <FavoriteIcon className={`${isFav ? 'text-red-500' : ""}`} />

          </span>
        </a>
        <div class="mt-4 px-5 pb-5">
          <a >
            <h5 class="text-xl tracking-tight text-slate-900">
              {pro.name}
            </h5>
          </a>
          <div class="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span class="text-3xl font-bold text-slate-900">{pro.amount}</span>
              <span class="text-sm text-slate-900 line-through">{pro.prev_amount}</span>
            </p>
            <div class="flex items-center">
              <svg
                aria-hidden="true"
                class="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                class="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                {pro.rating}
              </span>
            </div>
          </div>


          {/* <div className="flex gap-6 justify-center " >
            <a onClick={() => pro.add()}
              class=" cursor-pointer items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all active:scale-90"
            >-</a> <span className="flex cursor-pointer items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all active:scale-90" >6</span>
            <a onClick={() => pro.add()}
              class=" cursor-pointer items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all active:scale-90"
            >+</a>
            
          </div> */}
          <div className="flex gap-2 transform-all" >
            <a onClick={() => pro.add()}
              class={`flex cursor-pointer ${count != 0 ? 'w-[calc(100%_-_100px)]' : "w-full"} items-center justify-center rounded-md bg-slate-900 px-1 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all active:scale-90`}
            >
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >

              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />

            </svg> */}
              Add to cart
            </a>

            {
              count != 0 && (<>
                <a onClick={() => pro.remove()}
                  class=" cursor-pointer items-center justify-center rounded-md bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all active:scale-90"
                >-</a>
                <span
                  class=" cursor-pointer items-center justify-center rounded-md  px-2 py-1 text-center text-xl font-medium text-black focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all active:scale-90"
                > {count}
                </span>
                <a onClick={() => pro.add()}
                  class=" cursor-pointer items-center justify-center rounded-md bg-slate-900 px-4 py-3 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all active:scale-90"
                >+</a>
              </>

              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};
