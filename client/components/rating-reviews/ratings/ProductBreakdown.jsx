import React from "react";
import Grid from "@material-ui/core/Grid";

const ProductBreakDown = ({ characteristics }) => {
  return (
    <div className="product-breakdown-container">
      {Object.keys(characteristics).map(key => {
        return (
          <div>
            {key}{" "}
            <div className>
              <input
                className="product-breakdown"
                type="range"
                name="points"
                min="0"
                max="5"
                key={key}
                value={characteristics[key]}
              ></input>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductBreakDown;
