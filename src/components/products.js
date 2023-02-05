import React, { useState } from "react";
import cardsData from "./cardsData";
import "./products.css";
const Products = () => {
  const [count, setCounts] = useState(0);
  console.log("dsaf", cardsData);
  return (
    <div className="image">
      {cardsData.map((item) => {
        return (
          <div>
            <div className="img">
              <img src={item.imgdata} className="img-data" />
              <br />
              <button className="btn">-</button>
              <span>{count}</span>
              <button className="btn">+</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
