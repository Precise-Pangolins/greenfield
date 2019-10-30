import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const Recommend = ({ setRecommend, recommend }) => {
  return (
    <div>
      <h3>Would you Recommend this product?</h3>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="position"
          name="position"
          value={recommend}
          onChange={event => setRecommend(event.target.value)}
          row
        >
          <FormControlLabel
            value="0"
            control={<Radio color="primary" />}
            label="Yes"
            labelPlacement="start"
          />
          <FormControlLabel
            value="1"
            control={<Radio color="primary" />}
            label="No"
            labelPlacement="start"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Recommend;
