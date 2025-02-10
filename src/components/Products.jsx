import React, { useState } from "react";
import { Check, ArrowLeft, X } from "lucide-react";
import product1 from "../assets/product 1.png";
import product2 from "../assets/product 2.png";
import product3 from "../assets/product 3.png";
import product4 from "../assets/product 4.png";
import { Link } from "react-router-dom";

const products = [
  { id: 1, image: product1, price: "£250", selected: true },
  { id: 2, image: product2, price: "£250", selected: false },
  { id: 3, image: product3, price: "£250", selected: false },
  {
    id: 4,
    image: product4,
    price: "£250",
    selected: true,
  },
];

export default function Products() {
  const [selectedProducts, setSelectedProducts] = useState(products);

  const toggleSelection = (id) => {
    setSelectedProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, selected: !product.selected }
          : product
      )
    );
  };

  return (
    <div className="bg-[#F5F5F5] w-[393px] h-[852px] px-4 pt-4 mx-auto">
      <div className="flex items-center justify-between mb-4 ">
        <div className="bg-[#FFFFFF] w-8 h-8  flex justify-center items-center cursor-pointer">
          <ArrowLeft strokeWidth={1} className="w-3.5 h-3.5" />
        </div>
        <h2 className="text-[24px] leading-[26px] tracking-[-0.1px] text-center font-light ">
          SELECT PRODUCTS
        </h2>

        <div className="bg-[#FFFFFF] w-8 h-8  flex justify-center items-center cursor-pointer">
          <X strokeWidth={1} className="w-3.5 h-3.5" />
        </div>
      </div>

      <div className="flex justify-center items-center w-full h-[2px] gap-1.5 mt-7 mb-9">
        <div
          style={{
            background: "linear-gradient(to right, #194266, #17FDCF)",
          }}
          className="h-[2px] w-1/4"
        ></div>
        <div className="h-[2px] w-1/4 bg-[#CCCCCC]"></div>
        <div className="h-[2px] w-1/4 bg-[#CCCCCC]"></div>
        <div className="h-[2px] w-1/4 bg-[#CCCCCC]"></div>
      </div>

      <div className="flex items-center pb-6">
        <span className="mr-2 text-[12px] font-normal text-[#111111]">
          44 PRODUCTS
        </span>
        <span className="text-[12px] font-normal text-[#666666]">
          12 SELECTED
        </span>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-8 justify-center items-center py-4">
        {selectedProducts.map((product) => (
          <div>
            <div
              key={product.id}
              className="relative bg-[#FFFFFF] w-[100%]"
              onClick={() => toggleSelection(product.id)}
            >
              <img
                src={product.image}
                alt="Product"
                className="w-[181px] h-[224.66px] object-cover"
              />
              {product.selected ? (
                <div className="absolute top-2 right-2 bg-teal-500 p-1 rounded">
                  <Check className="text-white w-4 h-4" />
                </div>
              ) : (
                <div className="absolute top-2 right-2 bg-gray-300 w-5 h-5 rounded"></div>
              )}
            </div>

            <div className="p-2">
              <p className="text-[12px] font-normal text-[#666666]">
                PRODUCT TITLE HERE
              </p>
              <p className="text-[12px] font-normal text-[#111111]">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/edit-product">
        <button
          className="w-full py-3 text-[#FFFFFF] font-normal text-[12px] cursor-pointer"
          style={{ background: "linear-gradient(to right, #194266, #17FDCF)" }}
        >
          NEXT
        </button>
      </Link>
    </div>
  );
}
