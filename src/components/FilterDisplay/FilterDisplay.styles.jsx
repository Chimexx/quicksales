import styled from "styled-components";

export const MainContainer = styled.div`
	position: relative;
`;
export const Card = styled.div`
	position: absolute;
	max-height: 150px;
	overflow: auto;
	padding: 0;
	margin: 0;
	z-index: 700;
	width: 100%;
	border-radius: 5px;
	background-color: var(--white);
	box-shadow: rgba(110, 110, 110, 0.2) 0px 2px 8px 0px;
`;
export const NoItemContainer = styled.div`
	display: flex;
	background-color: #fddcdc;
	padding: 10px;
	margin: 0;
	display: "flex";
	align-items: "center";
`;
export const Container = styled.div`
	padding: 10px;
	margin: 0;
	display: "flex";
	align-items: "center";
`;
export const Item = styled.div`
	display: flex;
	align-items: center;
	overflow: hidden;
	cursor: pointer;
	white-space: nowrap;
	padding: 4px 0;
	&:hover {
		background-color: ${(props) => (props.qty < 10 ? `#ffe6cc` : `#dceffd`)};
		font-weight: 600;
		color: ${(props) => (props.qty < 10 ? "#ff8400" : "#0095ff")};
	}

	.name {
		overflow: hidden;
		min-width: 200px;
		text-transform: capitalize;
		margin-right: 20px;
	}
	.desc {
		display: flex;
		min-width: 200px;
		text-transform: capitalize;
		display: inline-block;
	}
	.price {
		overflow: hidden;
		min-width: 80px;
	}
	p {
		margin-right: 20px;
		display: flex;
		align-items: center;

		:last-child {
			margin-right: 0;
		}
	}
`;
