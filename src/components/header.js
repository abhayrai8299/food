import React from "react";
import "./header.css";
import { SiIfood } from "react-icons/si";
import { AiOutlineShoppingCart } from "react-icons/ai";
const header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="item">
          <span>
            <SiIfood className="main_logo" />
            FoodZilla
          </span>
          <span>About</span>
          <span>Services</span>
          <span>Find</span>
          <span>Admin</span>
          <span>Order History</span>
        </div>
        <div>
          <span>
            <input type="text" className="input" />
          </span>
        </div>
        <div className="order">
          <span>
            <AiOutlineShoppingCart />
          </span>
        </div>
      </div>
    </div>
  );
};

export default header;
