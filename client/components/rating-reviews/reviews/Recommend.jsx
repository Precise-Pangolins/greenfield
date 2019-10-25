import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const Recommend = () => {
  const [recommend, setRecommend] = useState("yes");
  const handleChangeRecommend = event => {
    setRecommend(event.target.value);
  };

  return (
    <div>
      <h3>Would you Recommend this product?</h3>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="position"
          name="position"
          value={recommend}
          onChange={handleChangeRecommend}
          row
        >
          <FormControlLabel
            value="yes"
            control={<Radio color="primary" />}
            label="Yes"
            labelPlacement="start"
          />
          <FormControlLabel
            value="no"
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
