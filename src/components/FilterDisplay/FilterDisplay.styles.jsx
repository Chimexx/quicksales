import styled from "styled-components";

export const Item = styled.div`
	display: flex;
	align-items: center;
	overflow: hidden;
	cursor: pointer;
	white-space: nowrap;
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
