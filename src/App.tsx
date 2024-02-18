import { Header } from './components/header/Header'
import { Container } from './components/Container'
import { FlexContainer } from './components/FlexContainer'
import { Sidebar } from './components/sidebar/Sidebar'
import { Main } from './components/main/Main'

function App() {
	return (
		<div className='App'>
			<Container>
				<Header />

				<FlexContainer>
					<Sidebar />
					<Main />
				</FlexContainer>
			</Container>
		</div>
	)
}

export default App
