import React from "react";
import { Container, Wrapper } from "./SideBar.styles";
import { Link } from "react-router-dom";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdOutlineInventory } from "react-icons/md";
import { AiOutlineOrderedList } from "react-icons/ai";

const SideBar = () => {
	return (
		<Container>
			<Wrapper>
				<Link to="/home">
					<button>
						<div className="short">
							<SiHomeassistantcommunitystore />
						</div>
						<div className="long">home</div>
					</button>
				</Link>
				<Link to="/inventory">
					<button>
						<div className="short">
							<MdOutlineInventory />
						</div>{" "}
						<div className="long">Inventory</div>
					</button>
				</Link>
				<Link to="/items">
					<button>
						<div className="short">
							<AiOutlineOrderedList />
						</div>{" "}
						<div className="long">Item list</div>
					</button>
				</Link>
				{/* <button>
					<div className="short">short</div> <div className="long">button</div>
				</button> */}
			</Wrapper>
		</Container>
	);
};

export default SideBar;
