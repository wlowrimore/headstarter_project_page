"use client";

import { useEffect, useState } from "react";
import { fetchAllProducts } from "../productsFetch";
import Image from "next/image";
import Link from "next/link";
import { HiMiniShoppingCart, HiMiniStar, HiShoppingBag } from "react-icons/hi2";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductsCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [stockStatus, setStockStatus] = useState<string | number>("");

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetchAllProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  if (!products) {
    return <div>Loading...</div>;
  }

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  const formattedPrice = (price: number) => {
    return `${price.toFixed(2)}`;
  };

  useEffect(() => {
    const getStockLevelStatus = () => {
      products.forEach((product) => {
        const stockLevel = product.rating.count;
        if (stockLevel <= 5 && stockLevel > 0) {
          setStockStatus("Low Stock");
        } else if (stockLevel > 5) {
          setStockStatus("In Stock");
        } else {
          setStockStatus("Out of Stock");
        }
      });
    };
    getStockLevelStatus();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-2">
      {products?.map((product) => (
        <div
          key={product.id}
          className="max-w-[18rem] p-3 border rounded space-y-3 cursor-pointer"
        >
          <Link href={`/product-details/${product.id}`} key={product.id}>
            <h1 className="font-bold text-neutral-800">
              {truncateText(product.title, 15)}
            </h1>
            <p className="text-sm tracking-wide text-neutral-700">
              {truncateText(product.description, 75)}
            </p>
            <div className="w-full max-h-[10rem] flex justify-center items-center">
              <Image
                src={product.image}
                alt={product.title}
                width={1000}
                height={1000}
                priority
                className="max-w-32 max-h-36 mt-10 mb-14"
              />
            </div>

            <div className="relative w-full pt-10">
              <p className="absolute bottom-1.5 bg-yellow-500/50 px-2 rounded-lg">
                ${formattedPrice(product.price)}
              </p>
              <div className="flex items-center">
                <div className="w-full ml-[40%]">
                  <p className="text-sm text-neutral-400 flex items-center">
                    {product.rating.rate}
                    <HiMiniStar className="text-yellow-400" />
                  </p>
                  {stockStatus === "Out of Stock" ? (
                    <p className="text-sm text-red-500">Out of Stock</p>
                  ) : stockStatus === "Low Stock" ? (
                    <p className="text-sm text-orange-300">
                      Only {product.rating.count} left
                    </p>
                  ) : (
                    <p className="text-sm text-green-500">In Stock</p>
                  )}
                </div>
              </div>
            </div>
            <span className="w-fit flex items-center bg-cyan-100 text-neutral-700 text-sm px-2 py-1 rounded-lg cursor-pointer hover:brightness-90 transition duration-200">
              Add to cart{" "}
              <HiMiniShoppingCart className="w-6 text-neutral-500" />
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;
