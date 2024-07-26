import type { Metadata } from "next";
import ProductDetails from "../../components/ProductDetails";

export const metadata: Metadata = {
  title: "Simple Products",
  description:
    "Simple Products is a NextJS mobile responsive and dynamic product page. It features simple animations, and dynamic rendering via conditional statements.  Other features include TailwindCSS and Fake Store API",
};

const ProductDetailsPage = () => {
  return <ProductDetails />;
};

export default ProductDetailsPage;
