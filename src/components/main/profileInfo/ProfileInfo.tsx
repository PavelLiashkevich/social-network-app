import styled from 'styled-components'
import logo from '../../../assets/logo/logo.svg'

import { FlexContainer } from '../../FlexContainer'
import { Clock } from '../../clock/Clock'

export const ProfileInfo = () => {
	return (
		<div>
			<StyledBgImg
				src='https://kalix.club/uploads/posts/2022-12/thumbs/1671729557_kalix-club-p-goluboi-razmitii-fon-vkontakte-1.jpg'
				alt='Avatar'
			/>
			
		
			<FlexContainer justify='space-around' align='center'>
				<img src={logo} alt='Avatar' />
				<h4>Description</h4>
				<Clock />
			</FlexContainer>
		</div>
	)
}

const StyledBgImg = styled.img`
	width: 100%;
	object-fit: cover;
	height: 200px;
`
