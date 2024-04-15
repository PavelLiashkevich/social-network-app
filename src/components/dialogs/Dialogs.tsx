import styled from 'styled-components'

import { FlexContainer } from '../FlexContainer'
import { Dialog } from './dialog/Dialog'
import { Message } from '../message/Message'

import { store } from '../redux/data'

export const Dialogs = () => {
	return (
		<StyledDialogs>
			<FlexContainer>
				<StyledDialogsItems>
					<FlexContainer direction='column'>
						{store._data.dialogsPage.dialogs.map(dialog => (
							<Dialog name={dialog.name} id={dialog.id} />
						))}
					</FlexContainer>
				</StyledDialogsItems>
				<StyledMessages>
					{store._data.dialogsPage.messages.map(message => (
						<Message message={message.message} />
					))}
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
