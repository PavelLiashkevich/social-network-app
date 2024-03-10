import React from 'react'
import logo from '../../../../assets/logo/logo.svg'
import styled from 'styled-components'

type PostPropsType = {
	message: string
	likeCount: string
}

export const Post = ({ message, likeCount }: PostPropsType) => {
	return (
		<StyledPost>
			<img src={logo} alt='Avatar' />
			<span>{message}</span>
			<span>{likeCount}</span>
		</StyledPost>
	)
}

const StyledPost = styled.div`
	background-color: #faafaf;
	margin-bottom: 20px;
`
