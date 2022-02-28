import React from "react";
import { Container } from "./Action.styles";
const Action = ({ title, icon }) => {
	return (
		<Container>
			<button>
				<div className="top">{icon}</div> <div className="bottom">{title}</div>
			</button>
		</Container>
	);
};

export default Action;
