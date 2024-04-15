import { Header } from './components/header/Header'
import { Container } from './components/Container'
import { FlexContainer } from './components/FlexContainer'
import { Sidebar } from './components/sidebar/Sidebar'
import { Main } from './components/main/Main'
import { Dialogs } from './components/dialogs/Dialogs'
import { Error } from './components/error/Error'

import { Navigate, Route, Routes } from 'react-router-dom'
import { PATH } from '../src/components/sidebar/Sidebar'
import { store } from './components/redux/data'

const App = () => {
	return (
		<div className='App'>
			<Container>
				<Header />

				<FlexContainer>
					<Sidebar />
					<Routes>
						<Route path={'/'} element={<Navigate to={PATH.PATH1} />} />
						<Route
							path={PATH.PATH1}
							element={
								<Main
									postText={store._data.profilePage.newPostText}
									addPost={store.addPost}
									updatePostText={store.updateNewPostText}
								/>
							}
						/>
						<Route path={PATH.PATH2} element={<Dialogs />} />
						{/*<Route path={PATH.PATH6} element={<Error />} />*/}
					</Routes>
				</FlexContainer>
			</Container>
		</div>
	)
}

export default App
