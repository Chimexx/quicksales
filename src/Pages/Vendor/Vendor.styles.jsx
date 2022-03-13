import styled from "styled-components";

export const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(255, 255, 255, 0.5);
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
	backdrop-filter: blur(5.5px);
`;

export const Wrapper = styled.div`
	width: 30rem;
	height: 30rem;
	color: var(--darkGray);
	background-color: var(--bg2);
	border-radius: 0.8rem;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	box-shadow: rgba(131, 168, 247, 0.2) 0px 2px 8px 0px;

	.title {
		margin-bottom: 0.5rem;
		text-transform: capitalize;
		font-weight: 400;
		font-size: 1.5rem;
	}
	.body {
		margin: 1rem;
	}
	.form {
		margin: 1rem 0;
	}
`;
export const ButtonContainer = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: flex-start;
	margin-top: 2rem;
`;
