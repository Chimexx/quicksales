import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	margin-top: 1rem;
	padding: 0 20px;
	flex: 5;
`;
export const Wrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	gap: 5px;
	align-items: center;
	justify-content: space-between;
	margin: 0 auto;

	.section {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		padding: 30px 40px;
		margin-bottom: 50px;
	}
	.section--title {
		padding: 10px 40px;
		background-color: var(--gray1);
		color: var(--darkGray);
		border-radius: 5px;
		width: 100%;
		font-weight: 700;
		text-transform: capitalize;
	}
`;
