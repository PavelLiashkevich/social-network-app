import styled from 'styled-components'
import { FlexContainer } from '../FlexContainer'

export const Dialogs = () => {
	return (
		<StyledDialogs>
			<FlexContainer>
				<StyledDialogsItems>
					<div className='dialog'>dialog1</div>
					<div className='dialog'>dialog2</div>
					<div className='dialog'>dialog3</div>
					<div className='dialog'>dialog4</div>
				</StyledDialogsItems>
				<StyledMessages>
					<div className='message'>Hello</div>
					<div className='message'>How are you?</div>
					<div className='message'>I'm fine</div>
					<div className='message'>I'm fine</div>
				</StyledMessages>
			</FlexContainer>
		</StyledDialogs>
	)
}

const StyledDialogs = styled.div`
	width: 70%;
	background-color: #93e4ff;
	height: 100vh;
`

const StyledDialogsItems = styled.div`
	width: 40%;
	height: 100vh;
	padding: 30px;
`

const StyledMessages = styled.div`
	width: 60%;
	height: 100vh;
	padding: 30px;
`
