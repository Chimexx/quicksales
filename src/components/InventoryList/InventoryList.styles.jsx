import styled from "styled-components";

export const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
	border-radius: 50px;

	td {
		border: 1px solid #e6e6e6;
		text-align: left;
		padding: 4px 5px;
		font-size: 15px;
		font-weight: 700;
		overflow: hidden;
		white-space: nowrap;
		font-weight: 700;

		.button-container {
			display: flex;
			align-items: center;
		}
		.button-col {
			display: flex;
			width: 50px;
			align-items: center;
			justify-content: center;
		}
		button {
			padding: 2px 20px;
			margin: 0 5px;
		}
		input {
			width: 50px;
			height: 25px;
			padding: 0 5px;
			border-radius: 5px;
			color: #414141;
			font-weight: 700;
			font-family: Poppins;
			background-color: transparent;
			border: none;
			background-color: #ffffffa2;
		}
		input:focus {
			outline: none;
		}

		input[type="number"]::-webkit-inner-spin-button,
		input[type="number"]::-webkit-outer-spin-button {
			-webkit-appearance: none;
		}

		input[type="number"] {
			-moz-appearance: textfield;
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
		background-color: #e3f3ff83;
	}
`;
