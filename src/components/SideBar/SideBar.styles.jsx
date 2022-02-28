import styled from "styled-components";

export const Container = styled.aside`
	display: flex;
	width: 20vw;
	height: calc("100vh" - "60px");
	overflow: auto;
	border-right: var(--gray2) 1px solid;
	background-color: var(--bg1);
`;
export const Wrapper = styled.div`
	padding-top: 1rem;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;

	button {
		display: flex;
		height: 50px;
		width: 200px;
		border: none;
		background: none;
		color: var(--white);
		margin-bottom: 20px;
	}

	.short {
		width: 30%;
		border-radius: 8px 0 0 8px;
		background: var(--blueDeFrance);
		height: 100%;
		margin-right: 2px;
		display: flex;
		font-size: 25px;
		align-items: center;
		justify-content: center;
	}
	.long {
		width: 70%;
		border-radius: 0 8px 8px 0;
		background: var(--blueDeFrance2);
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 18px;
		font-weight: 700;
		transition: all ease-in-out 0.3s;
		cursor: pointer;
		color: var(--blueDeFrance);
		padding: 5px;
		text-transform: uppercase;

		&:hover {
			transform: translateX(5px);
		}
	}
`;
