import { Header } from './components/header/Header'
import { Container } from './components/Container'
import { FlexContainer } from './components/FlexContainer'
import { Sidebar } from './components/sidebar/Sidebar'
import { Main } from './components/main/Main'
import { Dialogs } from './components/dialogs/Dialogs'
import { Error } from './components/error/Error'

import { Route, Routes } from 'react-router-dom'
import { PATH } from '../src/components/sidebar/Sidebar'
import { data, addPost, updateNewPostText } from './components/redux/data'

const App = () => {
	return (
		<div className='App'>
			<Container>
				<Header />

				<FlexContainer>
					<Sidebar />
					<Routes>
						<Route
							path={PATH.PATH1}
							element={
								<Main
									postText={data.profilePage.newPostText}
									addPost={addPost}
									updatePostText={updateNewPostText}
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
