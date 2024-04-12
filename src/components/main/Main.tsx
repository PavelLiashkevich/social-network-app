import styled from 'styled-components'

import { MyPosts } from './myPosts/MyPosts'
import { ProfileInfo } from './profileInfo/ProfileInfo'

type MainPropsType = {
	addPost: (id: string, message: string, likeCount: string) => void
}

export const Main = ({ addPost }: MainPropsType) => {
	return (
		<StyledMain>
			<ProfileInfo />

			<MyPosts addPost={addPost} />
		</StyledMain>
	)
}

const StyledMain = styled.section`
	width: 70%;
	background-color: #bcff93;
	height: 100vh;
`
