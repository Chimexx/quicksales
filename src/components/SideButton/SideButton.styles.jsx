import styled from "styled-components";

export const Button = styled.button`
	height: 50px;
	width: 80%;
	font-weight: 700;
	font-size: var(--fontMedium);
	border-radius: 16px;
	background-color: var(--blueDeFrance);
	border: none;
	margin-bottom: 20px;
	transition: all ease-in-out 0.3s;
	cursor: pointer;

	:last-child {
		margin-bottom: 0;
	}

	&:disabled {
		background-color: var(--bg2);
		cursor: not-allowed;
	}
	&:hover {
		background-color: #018ff4;
	}
`;
