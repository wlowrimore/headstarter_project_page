"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { fetchProductById } from "../productsFetch";
import { Product } from "../components/ProductsCard";

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
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold py-4">{shortenedTitle}</h1>
            <div className="pb-1 border-b border-neutral-700">
              <h2 className="text-xl">Product Details</h2>
            </div>
            <div className="pt-3 space-y-2">
              <p className="text-lg">{product.description}</p>
              <p>{product.price}</p>
              <p>{product.rating.rate}</p>
              <p>{product.rating.count}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProductDetails;
