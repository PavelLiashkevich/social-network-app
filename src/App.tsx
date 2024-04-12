import { Header } from './components/header/Header'
import { Container } from './components/Container'
import { FlexContainer } from './components/FlexContainer'
import { Sidebar } from './components/sidebar/Sidebar'
import { Main } from './components/main/Main'
import { Dialogs } from './components/dialogs/Dialogs'
import { Error } from './components/error/Error'

import { Route, Routes } from 'react-router-dom'
import { PATH } from '../src/components/sidebar/Sidebar'

type PostType = {
	id: string
	message: string
	likeCount: string
}

type PostsType = PostType[]

type ProfilePageType = {
	posts: PostsType
}

type DialogType = {
	id: string
	name: string
}

type DialogsType = DialogType[]

type MessageType = {
	id: string
	message: string
}

type MessagesType = MessageType[]

type DialogsPageType = {
	dialogs: DialogsType
	messages: MessagesType
}

type DataType = ProfilePageType | DialogsPageType

export const data = {
	profilePage: {
		posts: [
			{ id: '1', message: 'It', likeCount: '31' },
			{ id: '2', message: 'Programming', likeCount: '53' },
			{ id: '3', message: "I'm fine", likeCount: '23' },
		],
	},

	dialogsPage: {
		dialogs: [
			{ id: '1', name: 'Paul' },
			{ id: '2', name: 'Smith' },
			{ id: '3', name: 'Tom' },
		],
		messages: [
			{ id: '1', message: 'Hello' },
			{ id: '2', message: 'How are you?' },
			{ id: '3', message: "I'm fine" },
		],
	},
}

const addPost = (message: string) => {
	debugger
	let newPost = { id: '22', message: message, likeCount: '0' }

	data.profilePage.posts.push(newPost)
}

function App() {
	return (
		<div className='App'>
			<Container>
				<Header />

				<FlexContainer>
					<Sidebar />
					<Routes>
						<Route path={PATH.PATH1} element={<Main addPost={addPost} />} />
						<Route path={PATH.PATH2} element={<Dialogs />} />
						{/*<Route path={PATH.PATH6} element={<Error />} />*/}
					</Routes>
				</FlexContainer>
			</Container>
		</div>
	)
}

export default App
