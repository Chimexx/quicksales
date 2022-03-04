import styled from "styled-components";

export const Button = styled.button`
	display: ${(props) => (props.disabled ? "none" : "flex")};
	border: none;
	background: none;
	color: var(--white);
	margin-bottom: 20px;
	height: 8rem;
	width: 8rem;
	align-items: center;
	flex-direction: column;
	margin-right: 3.5rem;
	cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

	.top {
		width: 100%;
		border-radius: 8px 8px 0 0;
		background: var(--blueDeFrance);
		height: 70%;
		margin-bottom: 2px;
		display: flex;
		font-size: 50px;
		align-items: center;
		justify-content: center;
		transition: all ease-in-out 0.3s;

		&:hover {
			transform: translateY(-5px);
		}
	}
	.bottom {
		width: 100%;
		border-radius: 0 0 8px 8px;
		background: var(--blueDeFrance2);
		height: 30%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 14px;
		font-weight: 700;
		color: var(--blueDeFrance);
		padding: 5px;
		text-transform: uppercase;
	}
`;
