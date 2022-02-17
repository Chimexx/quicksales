import styled from "styled-components";

export const Item = styled.table`
	display: flex;
	align-items: center;
	overflow: hidden;
	cursor: pointer;
	&:hover {
		background-color: #eeeeee;
	}

	.name {
		overflow: hidden;
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
