import { Header } from './components/header/Header'
import { Container } from './components/Container'
import { FlexContainer } from './components/FlexContainer'
import { Sidebar } from './components/sidebar/Sidebar'
import { Main } from './components/main/Main'
import { Dialogs } from './components/dialogs/Dialogs'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PATH } from '../src/components/sidebar/Sidebar'

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Container>
					<Header />

					<FlexContainer>
						<Sidebar />
						<Routes>
							<Route path={PATH.PATH1} element={<Main />} />
							<Route path={PATH.PATH2} element={<Dialogs />} />
						</Routes>
					</FlexContainer>
				</Container>
			</div>
		</BrowserRouter>
	)
}

export default App
