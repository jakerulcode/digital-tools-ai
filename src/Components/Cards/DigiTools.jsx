import React, { use } from "react";
import Features from "./Features";
import DigiCard from "./DigiCard";

const DigiTools = ({ dataPromise }) => {
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

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box justify-center ">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab"
            aria-label="Products"
            defaultChecked
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab"
            aria-label="Cart (2)"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {products.map((product) => {
          return (
           <DigiCard product={product} key={product.id}/>
          );
        })}
      </div>
    </div>
  );
};

export default DigiTools;
