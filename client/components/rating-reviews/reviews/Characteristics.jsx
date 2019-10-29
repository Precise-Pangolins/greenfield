import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Characteristics({
  characteristics,
  setChars,
  metaData
}) {
  return (
    <div>
      <h3>Characteristics</h3>

      {Object.keys(metaData).map(characteristic => {
        const charID = metaData[characteristic].id;

        return (
          <FormControl required component="fieldset">
            <FormLabel component="legend">{characteristic}</FormLabel>
            <RadioGroup
              aria-label="position"
              name="position"
              value={characteristics[charID] + ""}
              error={characteristic[charID] === undefined}
              helperText={
                characteristic[charID] === undefined
                  ? "Please leave a characteristic"
                  : " "
              }
              onChange={event =>
                setChars({
                  ...characteristics,
                  [charID]: Number(event.target.value)
                })
              }
              row
            >
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label="1"
                labelPlacement="top"
              />
              <FormControlLabel
                value="2"
                control={<Radio color="primary" />}
                label="2"
                labelPlacement="top"
              />
              <FormControlLabel
                value="3"
                control={<Radio color="primary" />}
                label="3"
                labelPlacement="top"
              />
              <FormControlLabel
                value="4"
                control={<Radio color="primary" />}
                label="4"
                labelPlacement="top"
              />
              <FormControlLabel
                value="5"
                control={<Radio color="primary" />}
                label="5"
                labelPlacement="top"
              />
            </RadioGroup>
          </FormControl>
        );
      })}
    </div>
  );
}
