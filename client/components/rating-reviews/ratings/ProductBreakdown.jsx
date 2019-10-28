import React from "react";
import Grid from "@material-ui/core/Grid";

const ProductBreakDown = ({ characteristics }) => {
  return (
    <div>
      <Grid container>
        {Object.keys(characteristics).map(key => {
          return (
            <Grid item xs={12}>
              {key}{" "}
              <input
                type="range"
                name="points"
                min="0"
                max="5"
                key={key}
                value={characteristics[key]}
              ></input>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ProductBreakDown;
