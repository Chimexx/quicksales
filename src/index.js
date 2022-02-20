import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/roboto";
import "@fontsource/roboto/700.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</ThemeProvider>,
	document.getElementById("root")
);
