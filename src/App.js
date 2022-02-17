import GlobalStyle from "./GlobalStyle";
import { Container, Wrapper, MainView } from "./App.styles";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Container>
					<Header />
					<Wrapper>
						<SideBar />
						<MainView>
							<Routes>
								<Route path="/home" element={<Home />} />
								<Route path="/inventory" element={<Inventory />} />
							</Routes>
						</MainView>
					</Wrapper>
				</Container>
				<GlobalStyle />
			</BrowserRouter>
		</>
	);
}

export default App;
