import { Card } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Action from "../../components/Action/Action";
import { Container, Wrapper } from "./Home.styles";
import { BsReceiptCutoff } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

const Home = () => {
	return (
		<Container>
			<Wrapper>
				<p className="section--title">CUSTOMER SECTION</p>
				<Card className="section">
					<Link to="/sales">
						<Action title="make a sale" icon={<BsReceiptCutoff />} />
					</Link>
					<Action />
					<Action />
					<Action />
					<Action />
				</Card>

				<p className="section--title">VENDOR SECTION</p>
				<Card className="section">
					<Link to="/receive">
						<Action title="Receive items" icon={<FaShippingFast />} />
					</Link>
					<Link to="/newitem">
						<Action title="New Item" icon={<AiOutlineAppstoreAdd />} />
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
