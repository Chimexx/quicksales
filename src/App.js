import GlobalStyle from "./GlobalStyle";
import { Container, Wrapper, MainView } from "./App.styles";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<>
			<Toaster
				position="bottom-center"
				gutter={8}
				toastOptions={{
					duration: 3000,
					style: {
						background: "#fff",
						color: "#62d346",
						fontSize: "1.5rem",
					},
					error: {
						style: {
							color: "red",
							secondary: "black",
						},
					},
				}}
			/>
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
