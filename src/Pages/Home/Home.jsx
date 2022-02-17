import { Card } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Action from "../../components/Action/Action";
import { Container, Wrapper } from "./Home.styles";

const Home = () => {
	return (
		<Container>
			<Wrapper>
				<p className="section--title">CUSTOMER SECTION</p>
				<Card className="section">
					<Action />
					<Action />
					<Action />
					<Action />
					<Action />
				</Card>

				<p className="section--title">VENDOR SECTION</p>
				<Card className="section">
					<Link to="/receive-item">
						<Action title="Receive item" />
					</Link>
					<Action />
					<Action />
					<Action />
					<Action />
				</Card>
			</Wrapper>
		</Container>
	);
};

export default Home;
