import React, { useEffect, useState } from "react";
import { ArrowLeft, ChevronRight, X } from "lucide-react";
import product1 from "../assets/product 1.png";
import product2 from "../assets/product 2.png";
import product3 from "../assets/product 3.png";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "RED SPORTS TOP",
    image: product1,
    price: 140,
    units: 1240,
    ready: true,
  },
  {
    id: 2,
    name: "UNTITLED",
    image: product2,
    price: 140,
    units: 1240,
    ready: false,
  },
  {
    id: 3,
    name: "RED SPORTS TOP",
    image: product3,
    price: null,
    units: 1240,
    ready: false,
  },
];

export default function EditProduct() {
  const [productList, setProductList] = useState(products);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F5F5F5] w-[393px] px-4 pt-4 mx-auto">
      <div className="flex items-center justify-between mb-4">
        <Link to="/">
          <div className="bg-[#FFFFFF] w-8 h-8 flex justify-center items-center cursor-pointer">
            <ArrowLeft strokeWidth={1} className="w-3.5 h-3.5" />
          </div>
        </Link>
        <h2 className="text-[20px] leading-[26px] tracking-[-0.1px] text-center font-light">
          EDIT PRODUCTS
        </h2>
        <div className="bg-[#FFFFFF] w-8 h-8 flex justify-center items-center cursor-pointer">
          <X strokeWidth={1} className="w-3.5 h-3.5" />
        </div>
      </div>

      <div className="flex justify-center items-center w-full h-[2px] gap-1.5 mt-7 mb-9">
        <div className="h-[2px] w-1/4 bg-[#CCCCCC]"></div>
        <div className="h-[2px] w-1/4 bg-[#289B8D]"></div>
        <div className="h-[2px] w-1/4 bg-[#CCCCCC]"></div>
        <div className="h-[2px] w-1/4 bg-[#CCCCCC]"></div>
      </div>

      <div>
        <h3 className="text-[#111111] text-[12px] font-normal mb-4 flex justify-between items-center">
          <span>YOUR PRODUCT SELECTION</span>
          <button className="text-[12px] text-[#194266] underline font-light cursor-pointer">
            EDIT
          </button>
        </h3>

        <div className="space-y-4">
          {productList.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 flex items-center justify-between"
            >
              <div className="flex items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[70px] h-[70px] object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="text-[12px] text-[#111111] font-normal">
                    {product.name}
                  </h4>
                  <p className="text-[12px] text-[#666666] font-light">
                    {product.price ? `$${product.price}` : "MISSING PRICE"} •{" "}
                    {product.units} UNITS
                  </p>
                  <div className="my-2">
                    {product.id === 1 && product.ready && (
                      <button
                        className="text-[#FFFFFF] font-normal text-[12px] w-[45px] h-[20px] mr-1"
                        style={{
                          background:
                            "linear-gradient(to right, #194266, #18BBAA, #17FDCF)",
                        }}
                      >
                        READY
                      </button>
                    )}

                    {(product.id === 2 ||
                      (product.id === 3 && !product.price)) && (
                      <>
                        <button className="bg-[#ff6a005b] text-[12px] w-[109px] h-[20px] mr-1">
                          MISSING PRICE
                        </button>
                        <button className="bg-[#ff6a005b] text-[12px] w-[27px] h-[20px] mr-1">
                          3+
                        </button>
                      </>
                    )}
                  </div>
                  <button className="text-[12px] text-[#194266] underline font-light cursor-pointer">
                    EDIT
                  </button>
                </div>
              </div>
              <ChevronRight strokeWidth={1} className="cursor-pointer" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-48">
        <div
          className=" text-[#FFFFFF]  text-center py-4"
          style={{ background: "linear-gradient(to right, #194266, #17FDCF)" }}
        >
          <p className="text-[12px] font-normal">PROJECTED REVENUE</p>
          <h3 className="text-[48px] font-normal">$2158</h3>
        </div>
      </div>

      <button className="w-full my-6  py-3 text-[#FFFFFF] font-medium text-[14px] cursor-pointer bg-[#CCCCCC]">
        NEXT
      </button>
    </div>
  );
}
