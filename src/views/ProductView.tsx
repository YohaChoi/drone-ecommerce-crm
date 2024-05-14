'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { Button } from "@/components/ui/button";

import { useParams } from "next/navigation";
import useCartStore from "@/stores/cart.store";
import { getProduct } from "@/lib/action/products.actions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductView() {
  const { addItem, toggleCart } = useCartStore();
  const [product, setProduct] = useState([]);
  const params = useParams<{productId: string}>();

  useEffect(() => {
    const productQuery = async () => {
      const product = await getProduct(params.productId)
      setProduct(product)
    }

    productQuery()
  },[])
  
  const [selectedColor, setSelectedColor] = useState(product?.colors ? product.colors[0] : null);
  const [selectedSize, setSelectedSize] = useState(product?.sizes ? product.sizes[2] : null);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }} // Start with zero opacity
      animate={{ opacity: 1 }} // Animate to full opacity
      className="bg-white mt-24"
    >
      {product && (
        <div className="py-20">
        <div className="flex flex-row mx-20 items-center px-20">
          {/* Image gallery */}
          <div className="sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.imageUrl}
              alt="Product Image"
              className="h-[500px] w-full object-cover"
            />
          </div>

          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-40 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-1 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h1>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Precio</h3>

                <div className="mt-4">
                  <span className="text-gray-600">{product.price} Bs</span>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Stock</h3>

                <div className="mt-4">
                  <span className="text-gray-600">{product.stock} Unidades</span>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
                <div className="mt-4">
                  {product.stock === 0 && (
                    <span>No hay stock</span>
                  )}
                  <Button
                    disabled={product.stock === 0}
                    onClick={() => {
                      addItem({
                        id: product._id,
                        name: product.name,
                        price: product.price,
                        quantity: 1,
                        imageUrl: product.imageUrl
                      });

                      toggleCart();
                    }}
                  >Anadir a Carrito</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </motion.div>
  );
}
