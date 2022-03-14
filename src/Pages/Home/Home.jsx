import { Card } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Action from "../../components/Action/Action";
import { Container, Wrapper } from "./Home.styles";
import { BsReceiptCutoff } from "react-icons/bs";
import { FaShippingFast, FaStore } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiPurchaseTag } from "react-icons/bi";
import { MdOutlineInventory } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";

const Home = () => {
	return (
		<Container>
			<Wrapper>
				<p className="section--title">CUSTOMER SECTION</p>
				<Card className="section">
					<Link to="/sales">
						<Action title="make a sale" icon={<BsReceiptCutoff />} />
					</Link>
					<Link to="/sales-history">
						<Action title="sales history " icon={<MdOutlineInventory />} />
					</Link>
					<Link to="/customers">
						<Action title="customers " icon={<BsFillPeopleFill />} />
					</Link>
					<Action />
					<Action />
				</Card>

				<p className="section--title">VENDOR SECTION</p>
				<Card className="section">
					<Link to="/receive">
						<Action title="Receive items" disabled={false} icon={<FaShippingFast />} />
					</Link>

					<Link to="/purchase-history">
						<Action title="Purchase History" icon={<BiPurchaseTag />} />
					</Link>
					<Link to="/vendors">
						<Action title="Vendors" icon={<FaStore />} />
					</Link>
					<Link to="/departments">
						<Action title="Departments" icon={<FaNetworkWired />} />
					</Link>
					<Action />
				</Card>
			</Wrapper>
		</Container>
	);
};

export default Home;
