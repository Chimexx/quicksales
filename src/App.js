import GlobalStyle from "./GlobalStyle";
import { Container, Wrapper } from "./App.styles";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Home from "./Pages/Home/Home";

function App() {
	return (
		<>
			<Container>
				<Header />
				<Wrapper>
					<SideBar />
					<Home />
				</Wrapper>
			</Container>
			<GlobalStyle />
		</>
	);
}

export default App;
