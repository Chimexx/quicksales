import styled from "styled-components";

export const Container = styled.aside`
	display: flex;
	flex: 1;
	height: calc(100vh - 60px);
	overflow: auto;
	border-right: var(--gray2) 1px solid;
	background-color: var(--white);
`;
export const Wrapper = styled.div`
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
`;
