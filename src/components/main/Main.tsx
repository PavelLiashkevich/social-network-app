import styled from 'styled-components'

import { MyPosts } from './myPosts/MyPosts'
import { ProfileInfo } from './profileInfo/ProfileInfo'

type MainPagePropsType = {
	addPost: (message: string) => void
	postText: string
}

export const Main = ({ addPost, postText }: MainPagePropsType) => {
	return (
		<StyledMain>
			<ProfileInfo />

			<MyPosts addPost={addPost} postText={postText}/>
		</StyledMain>
	)
}

const StyledMain = styled.section`
	width: 70%;
	background-color: #bcff93;
	height: 100vh;
`
