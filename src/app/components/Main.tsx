import React from "react";
import ProductsCard from "./ProductsCard";

const Main: React.FC = () => {
  return (
    <>
      <div className="text-xl hidden md:inline font-bold">
        <h2 className="sticky top-0 z-10 bg-[#F9FAFB] py-6 px-3">
          All Products
        </h2>
        <ProductsCard />
      </div>
    </>
  );
};

export default Main;
