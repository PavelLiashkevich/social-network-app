import styled from 'styled-components'

import { MyPosts } from './myPosts/MyPosts'
import { ProfileInfo } from './profileInfo/ProfileInfo'

export const Main = () => {
	return (
		<StyledMain>
			<ProfileInfo />
			
			<MyPosts />
		</StyledMain>
	)
}

const StyledMain = styled.section`
	width: 70%;
	background-color: #bcff93;
	height: 100vh;
`