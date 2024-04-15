import styled from 'styled-components'

import { MyPosts } from './myPosts/MyPosts'
import { ProfileInfo } from './profileInfo/ProfileInfo'

type MainPagePropsType = {
	postText: string
	addPost: (message: string) => void
	updatePostText: (newText: string) => void
}

export const Main = ({
	postText,
	addPost,
	updatePostText,
}: MainPagePropsType) => {
	return (
		<StyledMain>
			<ProfileInfo />
			<MyPosts
				postText={postText}
				addPost={addPost}
				updatePostText={updatePostText}
			/>
		</StyledMain>
	)
}

const StyledMain = styled.section`
	width: 70%;
	background-color: #bcff93;
	height: 100vh;
`
