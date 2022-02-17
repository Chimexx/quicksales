import styled from "styled-components";

export const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
	border-radius: 5px 5px 0 0;

	td {
		border: 1px solid #e6e6e6;
		text-align: left;
		padding: 4px 5px;
		font-size: 12px;
		overflow: hidden;
		white-space: nowrap;

		.button-container {
			display: flex;
			align-items: center;
		}
		.button-col {
			display: flex;
			width: 50px;
		}
		button {
			padding: 2px 20px;
			margin: 0 5px;
		}
		input {
			width: 50px;
			height: 27px;
			padding: 0 5px;
			border-radius: 5px;
			color: #414141;
			font-weight: 700;
			background-color: transparent;
			border: 1px solid #f3f3f3;
		}
		input:focus {
			outline: none;
		}
	}
	th {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 4px 5px;
		font-size: 14px;
		overflow: hidden;
		white-space: nowrap;
		background-color: #018ff4;
		color: #fff;
	}

	tr:nth-child(even) {
		background-color: #e7f5ff;
	}
`;
