import { Button } from "@mui/material";
import React from "react";

const CustomButton = (props) => {
	let _props = { ...props, is_loading: undefined };
	return (
		<Button
			sx={{ textTransform: "capitalize" }}
			fullWidth
			variant="outlined"
			disabled={props?.is_loading || props?.disabled}
			{..._props}
		>
			{props.children}
		</Button>
	);
};

export default CustomButton;
