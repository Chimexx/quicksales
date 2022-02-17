import { createTheme } from "@material-ui/core";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#018ef4",
			green: "#96d243",
			lightGreen: "#96d24347",
			lightOrange: "#ff840049",
			saffron: "#F2C237",
			white: "#fff",
			lightBlue: "#018ff455",
			blueDeFrance2: "#018ff426",
			orange: "#ff8400",
			darkGray: "#303030",
		},
		secondary: {
			main: "#cccdde",
			darkGray: "#303030",
		},
		default: {
			main: "#fff",
		},
		success: {
			main: "#4caf50",
		},
	},
	button: {
		primary: {
			blueDeFrance: "#018ef4",
		},
		secondary: {
			bg1: "#f8f8ff",
		},
		default: {
			white: "#fff",
		},
		success: {
			green: "#96d243",
		},
	},
});
