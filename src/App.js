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
				position="top-right"
				gutter={8}
				toastOptions={{
					duration: 4000,
					style: {
						background: "#fff",
						color: "#62d346",
						fontSize: "1rem",
						borderLeft: "#018ef4 solid 5px",
					},
					error: {
						style: {
							color: "red",
							secondary: "black",
							borderLeft: "red solid 5px",
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
