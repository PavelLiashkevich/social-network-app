import React from 'react'
import logo from '../../../../assets/logo/logo.svg'

type PostPropsType = {
	message: string
}

export const Post = (props: PostPropsType) => {
	return (
		<div>
			<img src={logo} alt='Avatar' />
			{props.message}
		</div>
	)
}
