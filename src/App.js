import GlobalStyle from "./GlobalStyle";
import { Container, Wrapper, MainView } from "./App.styles";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ItemList from "./Pages/ItemList/ItemList";
import SellItem from "./Pages/SellItem/SellItem";

function App() {
	return (
		<>
			<Toaster
				position="top-center"
				gutter={8}
				toastOptions={{
					duration: 4000,
					style: {
						background: "#fff",
						color: "#62d346",
						fontSize: "1rem",
						borderLeft: "#62d346 solid 5px",
						borderRadius: 2,
						maxWidth: 500,
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
								<Route path="/sales" element={<SellItem />} />
								<Route path="/inventory" element={<Inventory />} />
								<Route path="/items" element={<ItemList />} />
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
