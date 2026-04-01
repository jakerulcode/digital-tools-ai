import React, { useState } from "react";
import Features from "./Features";
import { toast } from "react-toastify";

const DigiCard = ({ product, carts, setCarts }) => {
  const badgeStyles = {
    popular: "bg-[#E1E7FF] text-[#9514FA]",
    "best seller": "bg-[#FEF3C6] text-[#BB4D00]",
    new: "bg-[#DBFCE7] text-[#0A883E]",
  };

  const [isBuy, setIsBuy] = useState(false);

  const buyNowHandle = () => {
    setIsBuy(true);

    const isFound = carts.find((item) => item.id === product.id);

    if (isFound) {
      toast.error("This product already in cart");
      return;
    }

    setCarts([...carts, product]);
    toast.success(`${product.name} added to cart`);
  };
  return (
    <div
      className="p-5 bg-base-100 shadow-2xl rounded-xl space-y-2.5
            "
    >
      <span className="flex justify-end">
        <p
          className={`px-3 py-1 text-sm rounded-full flex  ${badgeStyles[product.tag]}`}
        >
          {product.tag}
        </p>
      </span>

      <div className="w-15 h-15 rounded-full bg-base-100 shadow-2xl ">
        {" "}
        <img
          className="w-auto object-contain p-2 rounded-full"
          src={product.icon}
          alt=""
        />
      </div>

      <h2 className="font-bold text-2xl">{product.name}</h2>
      <p className="text-[#627382]">{product.description}</p>
      <h2 className="font-bold text-xl">
        ${product.price}
        <span className="text-[#627382] text-[20px]">/{product.period}</span>
      </h2>

      {product.features.map((feature, index) => (
        <Features feature={feature} key={index} />
      ))}

      <div className="mt-6">
        <button
          onClick={buyNowHandle}
          className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] btn-block rounded-full text-white"
        >
          {isBuy ? "Added to cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default DigiCard;
