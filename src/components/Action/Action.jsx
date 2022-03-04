import React from "react";
import { Button } from "./Action.styles";
const Action = ({ title, icon, disabled }) => {
	return (
		<Button disabled={disabled}>
			<div className="top">{icon}</div> <div className="bottom">{title}</div>
		</Button>
	);
};

export default Action;
