import React from "react";
import Grid from "@material-ui/core/Grid";

const ProductBreakDown = ({ characteristics }) => {
  console.log("CHARACTERISTIC", characteristics);
  return (
    <div className="product-breakdown-container">
      {Object.keys(characteristics).map(key => {
        return (
          <div>
            {key}{" "}
            <div>
              {/* <input
                className="slider"
                type="range"
                name="points"
                min="0"
                max="5"
                key={key}
                list="steplist"
                value={characteristics[key].value}
              ></input> */}
              <input
                type="range"
                name="points"
                min="0"
                max="5"
                value={characteristics[key].value}
                className="slider"
              ></input>
              <div class="sliderticks">
                <p>0</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductBreakDown;
