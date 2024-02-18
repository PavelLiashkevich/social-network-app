import styled from 'styled-components'

import { FlexContainer } from '../FlexContainer'

import logo from '../../assets/logo/logo.svg'

export const Header = () => {
	return (
		<StyledHeader>
			<FlexContainer justify={'space-between'} align={'center'}>
				<img src={logo} />
			</FlexContainer>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	padding: 28px 0;
	background-color: #e893ff;
`
