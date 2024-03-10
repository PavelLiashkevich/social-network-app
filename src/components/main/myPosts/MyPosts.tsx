import React from 'react'
import { Post } from './post/Post'
import styled from 'styled-components'

const postData = [
	{ id: '1', message: 'It', likeCount: '31' },
	{ id: '2', message: 'Programming', likeCount: '53' },
	{ id: '3', message: "I'm fine", likeCount: '23' },
]

export const MyPosts = () => {
	return (
		<div>
			<h2>My Posts</h2>
			<input type='text' />
			<StyledAddPostButton>New Post</StyledAddPostButton>
			<div>
				{postData.map(post => (
					<Post message={post.message} likeCount={post.likeCount} />
				))}
			</div>
		</div>
	)
}

const StyledAddPostButton = styled.button`
	background-color: #ddef8f;
	color: black;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
	box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
	transition: box-shadow 0.3s ease;

	&:hover {
		box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
	}
`
