import GlobalStyle from "./GlobalStyle";
import { Container, Wrapper, MainView } from "./App.styles";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ItemList from "./Pages/ItemList/ItemList";
import SellItem from "./Pages/SellItem/SellItem";
import NewItem from "./Pages/NewItem/NewItem";
import ReceiveItem from "./Pages/ReceiveItem/ReceiveItem";
import Customers from "./Pages/Customers/Customers";
import Vendors from "./Pages/Vendors/Vendors";
import SalesHistory from "./Pages/SalesHistory/SalesHistory";
import PurchaseHistory from "./Pages/receivingHistory/PurchaseHistory";

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
								<Route path="/items" element={<ItemList />} />
								<Route path="/newitem" element={<NewItem />} />
								<Route path="/receive" element={<ReceiveItem />} />
								<Route path="/customers" element={<Customers />} />
								<Route path="/vendors" element={<Vendors />} />
								<Route path="/sales-history" element={<SalesHistory />} />
								<Route path="/purchase-history" element={<PurchaseHistory />} />
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
