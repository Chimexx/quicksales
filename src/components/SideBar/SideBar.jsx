import React, { useState } from "react";
import { Container, Wrapper, Button } from "./SideBar.styles";
import { Link } from "react-router-dom";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { AiOutlineOrderedList, AiOutlineAppstoreAdd } from "react-icons/ai";

const SideBar = () => {
	const [enable, setEnable] = useState(true);
	return (
		<Container>
			<Wrapper>
				<Link to="/home">
					<Button>
						<div className="short">
							<SiHomeassistantcommunitystore />
						</div>
						<div className="long">home</div>
					</Button>
				</Link>
				<Link to="/newitem">
					<Button>
						<div className="short">
							<AiOutlineAppstoreAdd />
						</div>
						<div className="long">New Item</div>
					</Button>
				</Link>
				<Link to="/items">
					<Button>
						<div className="short">
							<AiOutlineOrderedList />
						</div>{" "}
						<div className="long">Item list</div>
					</Button>
				</Link>
			</Wrapper>
		</Container>
	);
};

export default SideBar;
