import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
  body {
    margin: 0;
    padding: 0;
	font-family: 'Poppins', sans-serif;
	width: 100%;
	min-height: 100vh;
	background-color: var(--bg1);
	max-width: 1440px;
  }
  :root {
    --saffron: #F2C237;
    --blueDeFrance: #018ef4;
    --blueDeFrance2: #018ff499;
    --green: #96d243;
    --orange: #ff8400;
	--bg1: #f8f8ff;
	--bg2: #ecedf6;
	--bg3: #cccdde;
	--gray1: #eee;
	--gray2: #dedfe1;
	--black: black;
	--darkGray: #303030;
	--white: white;
	--fontSmall: 1rem;
	--fontMedium: 1.2rem;
	--fontLarge: 1.6rem;
	--fontXLarge: 3rem;
}
`;

export default GlobalStyle;
