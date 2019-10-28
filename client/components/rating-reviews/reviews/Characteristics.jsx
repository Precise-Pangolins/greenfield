import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Characteristics({
  size,
  width,
  comfort,
  quality,
  length,
  fit,
  handleSize,
  handleWidth,
  handleComfort,
  handleQuality,
  handleLength,
  handleFit
}) {
  return (
    <div>
      <h3>Characteristics</h3>
      <FormControl component="fieldset">
        <FormLabel component="legend">Size</FormLabel>
        <RadioGroup
          aria-label="position"
          name="position"
          value={size}
          onChange={handleSize}
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
      <FormControl component="fieldset">
        <FormLabel component="legend">Width</FormLabel>
        <RadioGroup
          aria-label="position"
          name="position"
          value={width}
          onChange={handleWidth}
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
      <FormControl component="fieldset">
        <FormLabel component="legend">Comfort</FormLabel>
        <RadioGroup
          aria-label="position"
          name="position"
          value={comfort}
          onChange={handleComfort}
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

      <FormControl component="fieldset">
        <FormLabel component="legend">Quality</FormLabel>
        <RadioGroup
          aria-label="position"
          name="position"
          value={quality}
          onChange={handleQuality}
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
      <FormControl component="fieldset">
        <FormLabel component="legend">Length</FormLabel>
        <RadioGroup
          aria-label="position"
          name="position"
          value={length}
          onChange={handleLength}
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
      <FormControl component="fieldset">
        <FormLabel component="legend">Fit</FormLabel>
        <RadioGroup
          aria-label="position"
          name="position"
          value={fit}
          onChange={handleFit}
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
    </div>
  );
}
