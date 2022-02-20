import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	column-gap: 1rem;
	font-family: "Roboto";
`;
export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
	animation: animateHeroImage 1s;
	@keyframes animateHeroImage {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;
export const MainView = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 80vw;
	height: calc(100vh - 60px);
	overflow: auto;
`;
