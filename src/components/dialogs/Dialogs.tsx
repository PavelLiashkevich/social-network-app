import styled from 'styled-components'

import { FlexContainer } from '../FlexContainer'
import { Dialog } from './dialog/Dialog'
import { Message } from '../message/Message'

const dialogData = [
	{ id: '1', name: 'Paul' },
	{ id: '2', name: 'Smith' },
	{ id: '3', name: 'Tom' },
]

const messageData = [
	{ id: '1', message: 'Hello' },
	{ id: '2', message: 'How are you?' },
	{ id: '3', message: "I'm fine" },
]

export const Dialogs = () => {
	return (
		<StyledDialogs>
			<FlexContainer>
				<StyledDialogsItems>
					<FlexContainer direction='column'>
						{dialogData.map(dialog => (
							<Dialog name={dialog.name} id={dialog.id} />
						))}
					</FlexContainer>
				</StyledDialogsItems>
				<StyledMessages>
					{messageData.map(message => (
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
