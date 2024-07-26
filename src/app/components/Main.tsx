import type { Metadata } from "next";
import Image from "next/image";
import SiteLogo from "../../../public/logos/site-logo.webp";
import ProductsCard from "./ProductsCard";
import { HiUserRemove } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Simple Products",
  description:
    "Simple Products is a NextJS mobile responsive and dynamic product page. It features simple animations, and dynamic rendering via conditional statements.  Other features include TailwindCSS and Fake Store API",
};

const Main: React.FC = () => {
  return (
    <>
      <div className="text-xl w-full inline-flex items-center justify-between font-bold">
        <h2 className="sticky text-sm sm:text-lg md:text-xl top-0 z-10 bg-[#F9FAFB] py-6 px-3">
          All Products
        </h2>
        <Image
          src={SiteLogo}
          alt="Site Logo"
          width={500}
          height={500}
          className="hidden md:w-24 md:h-24"
        />
        <button className="flex flex-wrap justify-between text-sm sm:hidden items-center px-3">
          <HiUserRemove />
          <span className="">Signout</span>
        </button>
      </div>
      <ProductsCard />
    </>
  );
};

export default Main;
