"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function ProductsView() {

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Nuestro Drones
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {/* {products &&
            products.map((product) => (
              <a href={`/product/${product._id}`} key={product._id}>
                <div className="group relative transition-transform duration-300 ease-in-out hover:scale-105">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 rounded-xl">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 mt-4 flex h-20 justify-between w-full">
                    <div className="relative flex flex-row w-full items-center bg-gradient-to-b from-[#11111123] to-[#000000] p-5 justify-between">
                      <div className="w-1/2">
                        <h3 className="text-sm text-white font-medium">
                          <a href={`/product/${product._id}`}>
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </a>
                        </h3>
                      </div>
                      <span className="font-bold text-md text-white w-1/2 text-right">
                        {product.price} Bs
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))} */}
        </div>
      </div>
    </div>
  );
}
