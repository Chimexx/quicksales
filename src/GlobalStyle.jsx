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
	max-width: '1440px';
	
	a{
		text-decoration: none;
	}

    animation: animateHeroImage 1s;
    @keyframes animateHeroImage{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }


	::-webkit-scrollbar{
		width: 5px;
	}
	::-webkit-scrollbar-track{
		background: #7a7a7a
	}
	::-webkit-scrollbar-thumb{
		background: #162a6b;
		border-radius: 5px;

		&:hover{
			background: #7a7a7a;
		}
	}
  }
  :root {
    --saffron: #F2C237;
    --blueDeFrance: #018ef4;
    --blueDeFrance2: #d9efff;
    --green: #00b400;
    --lightGreen: #eaffea;
    --orange: #ff8400;
    --lightOrange: #ffefdc;
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
