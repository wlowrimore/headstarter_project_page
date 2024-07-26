"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { fetchProductById } from "../productsFetch";
import { Product } from "../components/ProductsCard";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { HiArrowCircleLeft } from "react-icons/hi";

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>();
  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await fetchProductById(Number(id));
      if (fetchedProduct) {
        setProduct(fetchedProduct);
      } else {
        console.log("Product not found!");
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  function extractTitleBeforeComma(title: string): string {
    const commaIndex = title.indexOf(",");
    if (commaIndex !== -1) {
      return title.substring(0, commaIndex);
    }
    return title;
  }

  const shortenedTitle = product.title.split(",")[0];

  return (
    <>
      <div className="absolute bg-white pl-2 pr-3 py-1 rounded-3xl top-8 left-48 hover:bg-neutral-200 transition duration-300">
        <button className="flex items-center text-xl gap-1 font-semibold">
          <HiArrowCircleLeft className="w-8 h-8 opacity-80" />
          Go Back
        </button>
      </div>
      <main className="max-w-4xl h-screen flex items-center mx-auto bg-[#F9FAFB]">
        {product && (
          <div className="bg-[#F9FAFB] flex space-x-14">
            <div className="flex flex-col items-center">
              <div>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={1000}
                  height={1000}
                  className="w-full p-4 rounded-xl"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl font-bold py-4">{shortenedTitle}</h1>
              <div className="pb-1 border-b border-neutral-700">
                <h2 className="text-xl">Product Details</h2>
              </div>
              <div className="pt-3 space-y-4">
                <p className="text-lg">{product.description}</p>
                <div className="flex justify-between">
                  <p className="text-lg font-bold">{product.price}</p>
                  <button className="flex text-sm px-3 rounded-lg text-neutral-950 bg-yellow-400 items-center gap-1 hover:brightness-110 hover:text-blue-900 transition duration-300">
                    Add to cart{" "}
                    <HiMiniShoppingCart className="opacity-60 text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default ProductDetails;
