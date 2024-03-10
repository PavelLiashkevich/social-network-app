import styled from 'styled-components'
import logo from '../../../assets/logo/logo.svg'

import { FlexContainer } from '../../FlexContainer'

export const ProfileInfo = () => {
	return (
		<div>
			<StyledBgImg
				src='https://kalix.club/uploads/posts/2022-12/thumbs/1671729557_kalix-club-p-goluboi-razmitii-fon-vkontakte-1.jpg'
				alt='Avatar'
			/>
			<FlexContainer>
				<img src={logo} alt='Avatar' />
				<h4>Description</h4>
			</FlexContainer>
		</div>
	)
}

const StyledBgImg = styled.img`
	width: 100%;
	object-fit: cover;
	height: 200px;
`
