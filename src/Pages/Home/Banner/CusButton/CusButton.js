import React from "react";
import "./CusButton.css";
const CusButton = () => {
  return (
    <div>
      <button className="my-btn" href="https://twitter.com/kamildyrek">
        <div class="left"></div>
        Hire me →<div class="right"></div>
      </button>
    </div>
  );
};

export default CusButton;
