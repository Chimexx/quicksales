import { Card } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Action from "../../components/Action/Action";
import { Container, Wrapper } from "./Home.styles";
import { BsReceiptCutoff } from "react-icons/bs";
import { FaShippingFast, FaStore } from "react-icons/fa";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

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
					<Link to="/customers">
						<Action title="customers " icon={<BsFillPeopleFill />} />
					</Link>
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
					<Link to="/vendors">
						<Action title="Vendors" icon={<FaStore />} />
					</Link>
					<Action />
					<Action />
				</Card>
			</Wrapper>
		</Container>
	);
};

export default Home;
