import React, { useState, useEffect } from "react";
import bmcButton from "../../assets/bmc-button.png";

const Coffee = () => {
  return (
    <div className="box2 text-center">
      <a href="https://www.buymeacoffee.com/vikesh" target="_blank">
        <img src={bmcButton} alt="Buy me a Coffee" width="175" height="50" />
      </a>
    </div>
  );
}
export default Coffee;
