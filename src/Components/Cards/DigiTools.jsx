import React, { use } from "react";
import Features from "./Features";
import DigiCard from "./DigiCard";

const DigiTools = ({ dataPromise, carts, setCarts }) => {
  const products = use(dataPromise);

  

  //  "name": "Email Marketing Tool",
  //   "description": "Send and manage campaigns.\nBoost engagement effortlessly.",
  //   "price": 10,
  //   "period": "monthly",
  //   "tag": "popular",
  //   "tagType": "popular",
  //   "features": ["Automation", "Templates", "Analytics"],
  return (
    <div className="container mx-auto">
      <div className="text-center  space-y-2.5 ">
        <h2 className="text-5xl font-bold">Premium Digital Tools</h2>
        <p>
          Choose from our curated collection of premium digital products
          designedto boost your productivity and creativity.
        </p>

      
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {products.map((product) => {
          return (
           <DigiCard product={product} key={product.id} carts={carts} setCarts={setCarts}/>
          );
        })}
      </div>
    </div>
  );
};

export default DigiTools;
