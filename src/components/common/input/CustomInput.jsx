import React from "react";
// import "./input.style.css";
import {
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
  InputProps,
} from "@mui/material";

const CustomInput = ({
  startIcon = null,
  endIcon = null,
  label = "",
  parentStyle,
  ...rest
}) => {
  return (
    <FormControl
      variant="filled"
      style={parentStyle}
      fullWidth
      margin="normal"
    >
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <FilledInput
      fullWidth
      id={label}
        endAdornment={<InputAdornment position="end">{endIcon}</InputAdornment>}
        {...rest}
      />
    </FormControl>
  );
};

export default CustomInput;