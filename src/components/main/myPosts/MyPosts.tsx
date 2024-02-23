import React from 'react'
import { Post } from './post/Post'

export const MyPosts = () => {
	return (
		<div>
			My Posts
			<div>New Post</div>
			<div>
				<Post message='Hi'/>
				<Post message='HELLO'/>
				<Post message='IT'/>
			</div>
		</div>
	)
}
